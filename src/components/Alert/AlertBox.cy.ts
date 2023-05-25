import AlertBox from './AlertBox.vue'

describe('<AlertBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AlertBox)
  })
})