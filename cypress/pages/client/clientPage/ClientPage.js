import BasePage from "../../BasePage";
export default class ClientPage extends BasePage{
    open(clientId) {
        return super.open(`/client`)
    }
}