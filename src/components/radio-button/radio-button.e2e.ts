import { newE2EPage } from '@stencil/core/testing';

describe('radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-button></radio-button>');

    const element = await page.find('radio-button');
    expect(element).toHaveClass('hydrated');
  });

  it("toggles the checked attribute", async () => {
    const page = await newE2EPage();
    await page.setContent("<radio-button></radio-button>");

    const toggleButton = await page.find("radio-button");

    expect(await toggleButton.getProperty("checked")).toBe(false);

    await toggleButton.click();

    await page.waitForChanges();

    expect(await toggleButton.getProperty("checked")).toBe(true);
  });
});
