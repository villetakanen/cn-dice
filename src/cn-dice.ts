import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('cn-dice')
export class CnDice extends LitElement {
  static styles = css`
    :host {
      container: cn-dice / inline-size;
      display: inline-block;
      height: 36px;
      aspect-ratio: 1; /* Maintain 1:1 aspect ratio */
      position: relative;
      background-color: red;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",   
 sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      inline-size: 36px;
      vertical-align: middle;
    }
    .dice-container { 
      height: 100cqi; /* 100% of the container height */
      aspect-ratio: 1; /* Maintain 1:1 aspect ratio */
      position: relative; 
      display: inline-flex; /* Add inline-flex container */
      align-items: center; /* Vertically center content */
      justify-content: center; /* Horizontally center content */
      
    }
    img {
      width: 100%; 
      height: 100%;
      object-fit: contain; 
    }
    .dice-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 
      font-size: 80cqi; /* 80% of the container height */
      line-height: 1; /* To prevent extra spacing */
      color: black;
      -webkit-text-stroke: 1px white; 
      text-stroke: 1px white; 
      text-shadow: 0 0 4px black;
    }
  `;

  @property({ type: Number, reflect: true }) 
  public sides = 6; 

  @property({ type: Number, reflect: true })
  public value = 6;  

  @property({ type: Boolean, reflect: true })
  public roll = false;

  sideOptions = [4, 6, 8, 10, 12, 20]

  render() {
    const imgSrc = this.sideOptions.includes(this.sides) ?
      `/assets/d${this.sides}.svg` :
      '/assets/d6.svg';

    return html`
      <div class="dice-container">
        <img src=${imgSrc} alt="Dice with ${this.sides} sides">
        <div class="dice-value">${this.value}</div> 
      </div>
    `;
  }
}