import { storiesOf } from '@storybook/vue'

import FlowSns from '@/components/parts/flowSns'
import { i18n } from '../../plugins/i18n'

storiesOf('FlowSns', module)
  .add('default', () => ({
    components: { FlowSns },
    template: `<FlowSns />`,
    i18n
  }))
