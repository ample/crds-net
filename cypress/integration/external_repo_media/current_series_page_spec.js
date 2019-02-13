import { ContentfulApi } from '../../Contentful/ContentfulApi';
import { ContentfulElementValidator as Element } from '../../Contentful/ContentfulElementValidator';

describe('Tesing the Media/Series/[Current Series] page:', function () {
  let currentSeries;
  before(function () {
    const seriesList = new ContentfulApi().retrieveSeriesManager();

    cy.wrap({ seriesList }).its('seriesList.currentSeries').should('not.be.undefined').then(() => {
      currentSeries = seriesList.currentSeries;
      cy.visit(`${Cypress.env('CRDS_MEDIA_ENDPOINT')}/series/${currentSeries.slug.text}`);
    });
  });

  it('The jumbotron image and background image should match Contentful', function () {
    //Current series image
    cy.get('.jumbotron-content').as('currentSeries');
    Element.shouldHaveImgixImageFindImg('currentSeries', currentSeries.image);

    //Large jumbotron image
    cy.get('.jumbotron').as('jumbotron');
    cy.get('@jumbotron').should('be.visible');

    if (currentSeries.backgroundImage.isRequiredOrHasContent) {
      cy.get('@jumbotron').should('have.attr', 'style').and('contain', currentSeries.backgroundImage.id);
    } else if (currentSeries.image.isRequiredOrHasContent) {
      cy.get('@jumbotron').find('div').should('have.attr', 'style').and('contain', currentSeries.image.id);
    }
  });
});