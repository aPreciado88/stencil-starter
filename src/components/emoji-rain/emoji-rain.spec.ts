import { newSpecPage } from '@stencil/core/testing';
import { EmojiRain } from './emoji-rain';

describe('emoji-rain', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EmojiRain],
      html: `<emoji-rain></emoji-rain>`,
    });
    expect(page.root).toEqualHtml(`
      <emoji-rain id="emoji-rain">
        <mock:shadow-root>
          <canvas id="canvas" class="hidden"></canvas>
        </mock:shadow-root>
      </emoji-rain>
    `);
  });
});
