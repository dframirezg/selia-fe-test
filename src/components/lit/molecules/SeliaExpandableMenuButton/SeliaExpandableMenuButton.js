import '../../atoms/SeliaMenuButton/SeliaMenuButton.js'
import '../../atoms/SeliaIcon/SeliaIcon.js'

import { LitElement, html } from 'lit'

import { seliaExpandableMenuButtonStyles } from './SeliaExpandableMenuButtonStyles.js'

class SeliaExpandableMenuButton extends LitElement {
  static styles = [seliaExpandableMenuButtonStyles]

  static properties = {
    label: { type: String },
    icons: { type: Array },
    size: { type: String, reflect: true },
    color: { type: String },
    expanded: { type: Boolean },
    submenuItems: { type: Array },
    hide_label: { type: Boolean },
  }

  constructor() {
    super()
    this.label = ''
    this.icons = []
    this.size = 24
    this.color = 'var(--selia-grey)'
    this.expanded = false
    this.submenuItems = []
    this.hide_label = false
  }

  toggleExpand() {
    this.expanded = !this.expanded
  }

  handleSubmenuClick(item) {
    this.dispatchEvent(new CustomEvent('submenu-item-clicked', { detail: item }))
  }

  render() {
    return html`
      <div class="expandable-menu-button">
        <selia-menu-button
          .icon="${this.expanded ? this.icons[0] : this.icons[1]}"
          .label="${this.label}"
          .size="${this.size}"
          .color="${this.color}"
          .isExpandable="${true}"
          .hide_label="${this.hide_label}"
          @click="${this.toggleExpand}"
        ></selia-menu-button>
        <div class="submenu" style="display: ${this.expanded ? 'block' : 'none'};">
          ${this.submenuItems.map(
            (item) => html`
              <selia-menu-button
                class="subitem"
                .icon="${item.icon}"
                .label="${item.label}"
                .size="${this.size}"
                .active="${item.active}"
                .isExpandable="${false}"
                .hide_label="${this.hide_label}"
                @click="${() => this.handleSubmenuClick(item)}"
              ></selia-menu-button>
            `,
          )}
        </div>
      </div>
    `
  }
}

customElements.define('selia-expandable-menu-button', SeliaExpandableMenuButton)
