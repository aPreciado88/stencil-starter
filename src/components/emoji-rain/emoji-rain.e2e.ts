import { newE2EPage } from '@stencil/core/testing';

describe('emoji-rain', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<emoji-rain></emoji-rain>');

    const element = await page.find('emoji-rain');
    expect(element).toHaveClass('hydrated');
  });
});
