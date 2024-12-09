import { LitElement, css, html } from 'lit'

class SeliaDrawer extends LitElement {
  static properties = {
    isOpen: {
      type: Boolean,
      reflect: true,
    },
    sections: {
      type: Array,
    },
  }

  static styles = css`
    :host {
      display: block;
      width: var(--drawer-width, 250px);
      background-color: white;
      border-right: 1px solid #ccc;
      transition: transform 0.3s ease;
      transform: translateX(-100%);
    }
    :host([isOpen]) {
      transform: translateX(0);
    }
    .drawer-header {
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid #ccc;
    }
    .drawer-content {
      padding: 1rem;
    }
    .drawer-item {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    .drawer-item:hover {
      background-color: #f0f0f0;
    }
  `

  constructor() {
    super()
    this.isOpen = false
    this.sections = []
  }

  toggleDrawer() {
    this.isOpen = !this.isOpen
    const state = this.isOpen ? 'open' : 'closed'
    const url = new URL(window.location)
    url.searchParams.set('drawer', state)
    window.history.pushState({}, '', url)
  }

  handleItemClick(item) {
    this.dispatchEvent(
      new CustomEvent('item-selected', {
        detail: {
          key: item.key,
          label: item.label,
        },
      }),
    )
  }

  render() {
    return html`
      <div class="drawer-header">
        <span>Drawer</span>
        <button @click=${this.toggleDrawer}>${this.isOpen ? 'Close' : 'Open'}</button>
      </div>
      <div class="drawer-content">
        ${this.sections.map(
          (section) => html`
            <div>
              <h4>${section.title}</h4>
              ${section.items.map(
                (item) => html`
                  <div class="drawer-item" @click=${() => this.handleItemClick(item)}>
                    ${item.icon ? html`<span>${item.icon}</span>` : ''} ${item.label}
                  </div>
                `,
              )}
            </div>
          `,
        )}
      </div>
    `
  }
}

customElements.define('selia-drawer', SeliaDrawer)
