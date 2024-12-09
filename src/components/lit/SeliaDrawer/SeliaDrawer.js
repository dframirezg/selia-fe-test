import { LitElement, html } from 'lit'

import { seliaDrawerStyles } from './SeliaDrawerStyles.js'

class SeliaDrawer extends LitElement {
  static styles = [seliaDrawerStyles]
  static properties = {
    isOpen: {
      type: Boolean,
      default: true,
      reflect: true,
    },
    menuItems: {
      type: Array,
    },
  }

  constructor() {
    super()
    this.isOpen = false
    this.sections = []
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen
    const url = new URL(window.location)
    url.searchParams.set('drawer', this.open ? 'open' : 'closed')
    window.history.pushState({}, '', url)
  }

  renderMenu() {
    const sections = this.menuItems.reduce((acc, item) => {
      if (!acc[item.section]) acc[item.section] = []
      acc[item.section].push(item)
      return acc
    }, {})

    return html`
      ${Object.keys(sections).map(
        (section) => html`
          ${section !== 'main' ? html`<div class="section-header">${section}</div>` : ''}
          ${sections[section].map(
            (item) => html`
              <a
                href="#"
                class="menu-item ${item.selected ? 'selected' : ''}"
                @click="${() => this.handleItemClick(item)}"
              >
                <span class="menu-icon">${item.icon}</span>
                <span>${item.label}</span>
              </a>
            `,
          )}
        `,
      )}
    `
  }

  handleItemClick(item) {
    this.menuItems = this.menuItems.map((menuItem) =>
      menuItem.label === item.label
        ? { ...menuItem, selected: true }
        : { ...menuItem, selected: false },
    )
    this.requestUpdate()
    this.dispatchEvent(new CustomEvent('item-selected', { detail: { item } }))
  }

  render() {
    return html`
      <div>
        <div class="menu-header">
          <span class="menu-icon"></span>
          <h1>Selia</h1>
        </div>
        <div class="content">${this.isOpen ? this.renderMenu() : ''}</div>
        <button class="toggle-button" @click="${this.toggleDrawer}">
          ${this.isOpen ? '←' : '→'}
        </button>
        <div class="footer">Selia v1.15</div>
      </div>
    `
  }
}

customElements.define('selia-drawer', SeliaDrawer)
