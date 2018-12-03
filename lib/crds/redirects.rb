require 'httparty'
require 'colorize'
require 'csv'

class Redirects
  include HTTParty
  base_uri 'cdn.contentful.com'

  def initialize
    @options = {
      query: {
        access_token: ENV['CONTENTFUL_ACCESS_TOKEN'],
        content_type: 'redirect'
      }
    }
  end

  def redirects
    JSON.parse(get_redirects).dig('items').collect do |item|
      set_tmp_status(item)
      item.dig('fields').values 
    end
  end

  def to_csv!(path = './redirects.csv')
    rows = CSV.read(path)
    rows.insert(1, *redirects)
    File.write(path, rows.map(&:to_csv).join)
    puts "\n + #{redirects.size} redirects from Contentful".colorize(:cyan)
  end

  def set_tmp_status(item)
    item['fields']['status'] = 302
    item
  end

  private

    def get_redirects
      self.class.get("/spaces/#{ENV['CONTENTFUL_SPACE_ID']}/environments/master/entries", @options)
    end
end
