import { test } from 'vitest'
import { render } from '@testing-library/vue'
import HelloWorld from './components/HelloWorld.vue'

test("Component", () => {
  const renderResult = render(HelloWorld, { props: { msg: 'mymessage' } })
  renderResult.findByText("mymessage")
})