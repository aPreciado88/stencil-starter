import { newSpecPage } from '@stencil/core/testing';
import { StarRating } from './star-rating';

describe('star-rating', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StarRating],
      html: `<star-rating></star-rating>`,
    });
    expect(page.root).toEqualHtml(`
      <star-rating>
        <mock:shadow-root>
          <div>
            <span class="rating" style="color: orange;">
              ★
            </span>
            <span class="rating" style="color: orange;">
              ★
            </span>
            <span class="rating" style="color: orange;">
              ☆
            </span>
            <span class="rating" style="color: orange;">
              ☆
            </span>
            <span class="rating" style="color: orange;">
              ☆
            </span>
          </div>
        </mock:shadow-root>
      </star-rating>
    `);
  });
});
