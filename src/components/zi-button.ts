import {customElement, property} from "lit/decorators.js";
import {html, LitElement} from "lit";


@customElement('zi-button')
export class ZiButton extends LitElement {

    @property({type: String})
    name!: string


    protected override render(): unknown {
        return html`
        <button>Hello ${this.name || 'world'}</button>`
    }
}