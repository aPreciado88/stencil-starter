import { newSpecPage } from '@stencil/core/testing';
import { RadioButtonGroup } from './radio-button-group';

describe('radio-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioButtonGroup],
      html: `<radio-button-group></radio-button-group>`,
    });
    expect(page.root).toEqualHtml(`
      <radio-button-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </radio-button-group>
    `);
  });
});
