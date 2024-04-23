import { newE2EPage } from '@stencil/core/testing';

describe('toggle-button', () => {
  it('renders a toggle button', async () => {
    const page = await newE2EPage();
    await page.setContent('<toggle-button checked></toggle-button>');

    const element = await page.find('toggle-button');

    expect(element).toHaveClass('hydrated');
    expect(element).toHaveAttribute("checked");
  });

  it("toggles the checked attribute", async () => {
    const page = await newE2EPage();
    await page.setContent("<toggle-button></toggle-button>");

    const toggleButton = await page.find("toggle-button");

    expect(await toggleButton.getProperty("checked")).toBe(false);

    await toggleButton.click();

    await page.waitForChanges();

    expect(await toggleButton.getProperty("checked")).toBe(true);
  });

  it("toggles the checked attributes when click is called", async () => {
    const page = await newE2EPage();
    await page.setContent("<toggle-button></toggle-button>");
    const toggleButton = await page.find("toggle-button");

    expect(await toggleButton.getProperty("checked")).toBe(false);

    await page.$eval("toggle-button", (component: HTMLToggleButtonElement) => {
      component.click();
    });

    expect(await toggleButton.getProperty("checked")).toBe(true);

    await toggleButton.callMethod("click");
    await page.waitForChanges();

    expect(await toggleButton.getProperty("checked")).toBe(false);
  });
});
