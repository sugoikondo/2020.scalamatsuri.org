import { storiesOf } from '@storybook/vue'

import FlowSns from '@/components/parts/flowSns'

storiesOf('FlowSns', module)
  .add('default', () => ({
    components: { FlowSns },
    render(h) {
      return <FlowSns />
    }
  }))
