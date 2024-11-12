import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cn-dice")
export class CnDice extends LitElement {
	static styles = css`
    /* Add your CSS styles here */
    svg {
      width: 100px;
      height: 100px; 
    }
  `;

	@property({ type: Number }) sides = 6;
	@property({ type: Number }) value?: number;
	@property({ type: Boolean }) roll = false;

	render() {
		// Logic to determine which SVG to display based on 'sides' and 'value'
		// or to generate a random value if 'roll' is true

		return html`
      <svg viewBox="0 0 100 100">
        </svg>
    `;
	}
}
