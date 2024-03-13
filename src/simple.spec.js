import { test } from 'vitest'
import { render } from '@testing-library/vue'
import SimpleComponent from './components/SimpleComponent.vue'

test("Component", () => {
  const renderResult = render(SimpleComponent)
  renderResult.findByText("mymessage")
})