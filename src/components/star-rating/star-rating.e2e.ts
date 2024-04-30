import { newE2EPage } from '@stencil/core/testing';

describe('star-rating', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<star-rating></star-rating>');

    const element = await page.find('star-rating');
    expect(element).toHaveClass('hydrated');
  });

  it('renders checked star', async () => {
    const page = await newE2EPage();

    await page.setContent('<star-rating current-rating=1></star-rating>');
    const element = await page.find('star-rating >>> span');
    expect(element.textContent).toEqual(`★`);
  });

  it('renders unchecked star', async () => {
    const page = await newE2EPage();

    await page.setContent('<star-rating current-rating=1></star-rating>');
    const stars = await page.findAll("star-rating >>> .rating");
    expect(stars[1].textContent).toEqual(`☆`);
  });
});
