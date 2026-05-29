import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import discardComments from 'postcss-discard-comments';
import cssnano from 'cssnano';

export default {
  plugins: [
    purgeCSSPlugin({ content: ['_site/**/*.html'] }),
    discardComments({ removeAll: true }),
    cssnano({ preset: 'default' }),
  ],
};
