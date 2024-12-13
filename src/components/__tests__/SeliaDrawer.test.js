import '../lit/molecules/SeliaDrawer/SeliaDrawer.js'

import { expect, fixture, html, oneEvent } from '@open-wc/testing'

describe('SeliaDrawer Component', () => {
  let element

  beforeEach(async () => {
    element = await fixture(html`
      <selia-drawer
        .header="${{
          full_logo: 'full-logo.png',
          logo: 'logo.png',
          aria_label: 'Selia Logo',
        }}"
        .menuItems="${[
          { label: 'Home', icon: 'home.svg', section: 'main', selected: false, route: '/' },
          {
            label: 'Cuenta',
            icons: ['arrow_down.svg', 'arrow_up.svg'],
            section: 'main',
            submenuItems: [
              { label: 'Perfil', icon: 'profile.svg', selected: false, route: '/profile' },
            ],
          },
        ]}"
        .toggleIcons="${['arrow-left.svg', 'arrow-right.svg']}"
      ></selia-drawer>
    `)
  })

  it('renders with default properties', () => {
    expect(element.isOpen).to.equal(false)
    expect(element.menuItems).to.have.length(2)
    expect(element.seliaVersion).to.exist
  })

  it('toggles drawer state when toggleDrawer is called', async () => {
    expect(element.isOpen).to.equal(false)
    element.toggleDrawer()
    expect(element.isOpen).to.equal(true)
    element.toggleDrawer()
    expect(element.isOpen).to.equal(false)
  })

  it('updates URL when toggling drawer', async () => {
    element.toggleDrawer()
    const updatedUrl = new URL(window.location.href)
    expect(updatedUrl.searchParams.get('drawer')).to.equal('open')
    element.toggleDrawer()
    const finalUrl = new URL(window.location.href)
    expect(finalUrl.searchParams.get('drawer')).to.equal('closed')
  })

  it('renders menu items correctly', async () => {
    const menuButtons = element.shadowRoot.querySelectorAll('selia-menu-button')
    expect(menuButtons).to.have.length(1) // "Item = Home"
    const expandableMenuButtons = element.shadowRoot.querySelectorAll(
      'selia-expandable-menu-button',
    )
    expect(expandableMenuButtons).to.have.length(1) // Item = "Cuenta"
  })

  it('emits item-selected event when a menu item is clicked', async () => {
    const menuItem = element.menuItems[0] // "Home"
    const menuButton = element.shadowRoot.querySelector('selia-menu-button')
    setTimeout(() => menuButton.click())
    const event = await oneEvent(element, 'item-selected')
    expect(event.detail.item).to.deep.equal(menuItem)
  })

  it('handles submenu item selection correctly', async () => {
    const expandableMenuButton = element.shadowRoot.querySelector('selia-expandable-menu-button')
    const submenuItem = element.menuItems[1].submenuItems[0] // "Perfil"
    expandableMenuButton.dispatchEvent(
      new CustomEvent('submenu-item-clicked', { detail: submenuItem }),
    )
    expect(element.menuItems[1].submenuItems[0].selected).to.equal(true) // "Perfil" should be selected
    expect(element.menuItems[1].selected).to.equal(true) // Parent "Cuenta" should be selected
  })

  it('closes the drawer when clicking outside', async () => {
    element.isOpen = true
    document.body.click()
    await element.updateComplete
    expect(element.isOpen).to.equal(false)
  })
})
