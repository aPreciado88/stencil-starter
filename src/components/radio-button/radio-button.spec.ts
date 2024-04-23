import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from './radio-button';

describe('radio-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioButton],
      html: `<radio-button></radio-button>`,
    });
    expect(page.root).toEqualHtml(`
      <radio-button>
        <mock:shadow-root>
          <input class="pointer" type="radio"/>
          <label class="label pointer"></label>
        </mock:shadow-root>
      </radio-button>
    `);
  });
});
