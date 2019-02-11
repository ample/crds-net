require 'json'
require 'contentful/management'

client = Contentful::Management::Client.new(ENV['CONTENTFUL_MANAGEMENT_TOKEN'])
environment = client.environments('y3a9myzsdjan').find('int') #change to master to populate production with system pages
systempages = environment.content_types.find('system_page')

data = File.read("system-pages-old.json")
json = JSON.parse(data)

json['systemPages'].each do |entry|
  legacy = entry['legacyStyles'].to_i > 0
  if entry['image']
    image_url = entry['image']['filename']
  else
    image_url = ''
  end

  new_entry = systempages.entries.create(title: entry['title'], image: image_url, url: entry['uRL'], description: entry['description'], stateName: entry['stateName'], legacyStyles: legacy)
  new_entry.save
  new_entry.publish
end
