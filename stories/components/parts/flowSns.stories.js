import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import FlowSns from '@/components/parts/flowSns'
import { i18n } from '../../plugins/i18n'

storiesOf('FlowSns', module)
  .addDecorator(withInfo)
  .add('default', () => ({
    components: { FlowSns },
    template: `<FlowSns />`,
    i18n
  }))
