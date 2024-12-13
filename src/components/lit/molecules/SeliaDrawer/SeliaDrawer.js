import '../../atoms/SeliaMenuButton/SeliaMenuButton.js'
import '../../molecules/SeliaExpandableMenuButton/SeliaExpandableMenuButton.js'

import { LitElement, html } from 'lit'

import packageJson from '../../../../../package.json'
import { seliaDrawerStyles } from './SeliaDrawerStyles.js'

class SeliaDrawer extends LitElement {
  static styles = [seliaDrawerStyles]

  static properties = {
    isOpen: { type: Boolean, default: true, reflect: true },
    menuItems: { type: Array },
    header: { type: Object },
    toggleIcons: { type: Array },
    seliaVersion: { type: String },
  }

  constructor() {
    super()
    this.isOpen = false
    this.menuItems = []
    this.seliaVersion = packageJson.version
  }

  connectedCallback() {
    super.connectedCallback()
    document.addEventListener('click', this.handleDocumentClick.bind(this))
    const url = new URL(window.location)
    const drawerState = url.searchParams.get('drawer')
    this.isOpen = drawerState === 'open'
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen
    const url = new URL(window.location)
    url.searchParams.set('drawer', this.isOpen ? 'open' : 'closed')
    window.history.pushState({}, '', url)
  }

  renderMenu(isOpen) {
    const sections = this.menuItems.reduce((acc, item) => {
      if (!acc[item.section]) acc[item.section] = []
      acc[item.section].push(item)
      return acc
    }, {})

    return html`
      ${Object.keys(sections).map(
        (section) => html`
          ${sections[section].map((item) => {
            if (item.submenuItems) {
              return html`
                <selia-expandable-menu-button
                  style="border-bottom: 2px solid var(--selia-separator-color);"
                  .icons="${item.icons}"
                  .label="${item.label}"
                  .size="${isOpen ? 'large' : 'small'}"
                  .submenuItems="${item.submenuItems}"
                  .hide_label="${!isOpen}"
                  @submenu-item-clicked="${(e) => this.handleItemClick(e.detail)}"
                ></selia-expandable-menu-button>
              `
            } else {
              return html`
                <selia-menu-button
                  .icon="${item.icon}"
                  .label="${item.label}"
                  .size="${isOpen ? 'large' : 'small'}"
                  .selected="${item.selected}"
                  .hide_label="${!isOpen}"
                  @click="${() => this.handleItemClick(item)}"
                ></selia-menu-button>
              `
            }
          })}
        `,
      )}
    `
  }

  handleItemClick(item) {
    console.log(item)

    const updateSelection = (items, selectedItem) =>
      items.map((menuItem) => {
        if (menuItem.label === selectedItem.label) {
          return { ...menuItem, selected: true }
        }
        if (menuItem.submenuItems) {
          const updatedSubmenu = updateSelection(menuItem.submenuItems, selectedItem)

          // Determine if any submenu item is selected
          const isSubmenuSelected = updatedSubmenu.some((submenuItem) => submenuItem.selected)

          return {
            ...menuItem,
            selected: isSubmenuSelected,
            submenuItems: updatedSubmenu,
          }
        }
        return { ...menuItem, selected: false }
      })

    this.menuItems = updateSelection(this.menuItems, item)
    console.log('Updated Menu Items:', this.menuItems)
    this.requestUpdate()
    this.dispatchEvent(new CustomEvent('item-selected', { detail: { item } }))
  }

  // Remove the global click event listener
  disconnectedCallback() {
    super.disconnectedCallback()
    document.removeEventListener('click', this.handleDocumentClick.bind(this))
  }

  // Check if the user clicked outside the drawer
  handleDocumentClick(event) {
    if (!this.contains(event.target)) {
      this.isOpen = false
    }
  }

  render() {
    return html`
      <div>
        <div class="menu-header">
          <selia-icon>
            <img
              src="${this.isOpen ? this.header.full_logo : this.header.logo}"
              aria-label="${this.header.aria_label}"
            />
          </selia-icon>
        </div>
        <div class="content">${this.renderMenu(this.isOpen)}</div>
        <div class="footer">
          <span>Selia v${this.seliaVersion}</span>
          <button class="toggle-button" @click="${this.toggleDrawer}">
            <img src=${this.isOpen ? this.toggleIcons[0] : this.toggleIcons[1]} />
          </button>
        </div>
      </div>
    `
  }
}

customElements.define('selia-drawer', SeliaDrawer)
