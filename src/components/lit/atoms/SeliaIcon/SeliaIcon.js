import { LitElement, html } from 'lit'

class SeliaIcon extends LitElement {
  static properties = {
    size: { type: String },
    color: { type: String },
  }

  constructor() {
    super()
    this.size = '24px'
    this.color = ''
  }

  updated(changedProperties) {
    if (changedProperties.has('size')) {
      this.style.setProperty('--selia-icon-size', this.size)
    }
    if (changedProperties.has('color')) {
      this.style.setProperty('--selia-icon-color', this.color)
    }
  }

  render() {
    return html`
      <div class="icon" aria-hidden="true">
        <slot></slot>
      </div>
    `
  }
}

customElements.define('selia-icon', SeliaIcon)
