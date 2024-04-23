import { newE2EPage } from '@stencil/core/testing';

describe('radio-button-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<radio-button-group></radio-button-group>');

    const element = await page.find('radio-button-group');
    expect(element).toHaveClass('hydrated');
  });

  it("updates a radio button checked status when clicked", async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <radio-button-group>
        <radio-button id="first" value="one"></radio-button>
        <radio-button id="second" value="two"></radio-button>
      </radio-button-group>
    `);

    const element = await page.find("radio-button-group");
    const firstElement = await element.find("radio-button");

    await firstElement.click();
    await page.waitForChanges();

    expect(await firstElement.getProperty("checked")).toBe(true);
  });
});
