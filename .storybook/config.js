import { configure } from '@storybook/vue';

import { addDecorator } from '@storybook/vue';
import i18n from '@/plugins/i18n';

addDecorator(() => ({
  template: '<story/>',
  i18n,
}));

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
