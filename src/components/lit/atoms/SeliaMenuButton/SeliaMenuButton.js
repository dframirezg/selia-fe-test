import { LitElement, html } from 'lit'

import { seliaMenuButtonStyles } from './SeliaMenuButtonStyles.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

class SeliaMenuButton extends LitElement {
  static styles = [seliaMenuButtonStyles]

  static properties = {
    icon: { type: String },
    label: { type: String },
    size: { type: String, reflect: true },
    color: { type: String },
    isExpandable: { type: Boolean },
    selected: { type: Boolean, reflect: true },
    hide_label: { type: Boolean, reflect: true },
    inlineSvg: { type: String },
    active: { type: Boolean },
  }

  constructor() {
    super()
    this.icon = ''
    this.label = ''
    this.size = 24
    this.color = ''
    this.selected = false
    this.hide_label = false
    this.isExpandable = false
    this.active = true
  }

  updated(changedProperties) {
    if (changedProperties.has('icon') && this.icon) {
      this.fetchSvg(this.icon)
    }
  }

  async fetchSvg(path) {
    try {
      const response = await fetch(path)
      if (response.ok) {
        this.inlineSvg = await response.text()
      } else {
        console.error(`Failed to load SVG: ${path}`)
        this.inlineSvg = ''
      }
    } catch (error) {
      console.error(`Error fetching SVG: ${error}`)
      this.inlineSvg = ''
    }
  }

  render() {
    return html`
      <button
        class="menu-button ${this.selected ? 'active' : ''} ${this.isExpandable ? 'expandable' : ''} ${this.active ? '' : 'inactive'} ${this.size === 'large' ? 'menu-button-lg' : 'menu-button-sm'}"
        ${this.active ? '' : 'disabled'}
        "
        part="menu-button"
      >
        <div class="icon-container" style="width: ${this.size}px; height: ${this.size}px;">
          <selia-icon size="${this.size}px" color="${this.color}">
            ${unsafeHTML(this.inlineSvg)}
          </selia-icon>
        </div>
        ${!this.hide_label ? html`<span class="menu-label">${this.label}</span>` : ''}
      </button>
    `
  }
}

customElements.define('selia-menu-button', SeliaMenuButton)
