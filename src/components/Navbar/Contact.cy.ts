import Contact from './Contact.vue'

describe('<Contact />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Contact)
  })
})