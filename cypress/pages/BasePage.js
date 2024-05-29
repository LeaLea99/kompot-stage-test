export default class BasePage {
    open(path) {
        cy.visit(path)
        return this
    }
}