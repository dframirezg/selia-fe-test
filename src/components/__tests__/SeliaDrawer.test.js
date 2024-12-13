import '../lit/molecules/SeliaDrawer/SeliaDrawer.js'

import { expect, oneEvent } from '@open-wc/testing'

// tests/components/SeliaDrawer.test.js
import { mount } from '@vue/test-utils'

describe('SeliaDrawer Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount({
      template: `
        <selia-drawer
          :header="{ full_logo: 'full_logo.png', logo: 'logo.png', aria_label: 'Selia Logo' }"
          :menuItems="[
            { label: 'Home', icon: 'home.svg', section: 'main', selected: false },
            {
              label: 'Settings',
              icons: ['settings_open.svg', 'settings_close.svg'],
              section: 'main',
              submenuItems: [
                { label: 'Profile', icon: 'profile.svg' },
                { label: 'Notifications', icon: 'notifications.svg' }
              ]
            }
          ]"
        />
      `,
    })
  })

  it('renders with default props', () => {
    const drawer = wrapper.find('selia-drawer')
    expect(drawer.exists()).toBe(true)
    expect(drawer.vm.isOpen).toBe(false)
  })

  it('toggles drawer state', async () => {
    const toggleButton = wrapper.find('.toggle-button')
    await toggleButton.trigger('click')
    expect(wrapper.vm.$refs.drawer.isOpen).toBe(true)
  })

  it('updates URL when toggling', async () => {
    const initialUrl = new URL(window.location.href)
    const toggleButton = wrapper.find('.toggle-button')
    await toggleButton.trigger('click')
    const updatedUrl = new URL(window.location.href)
    expect(updatedUrl.searchParams.get('drawer')).toBe('open')
    await toggleButton.trigger('click')
    const finalUrl = new URL(window.location.href)
    expect(finalUrl.searchParams.get('drawer')).toBe('closed')
  })

  it('emits item-selected event when menu item is clicked', async () => {
    const menuItem = wrapper.find('selia-menu-button')
    setTimeout(() => menuItem.trigger('click'))
    const event = await oneEvent(wrapper.element, 'item-selected')
    expect(event.detail.item.label).toBe('Home')
  })

  it('closes when clicked outside', async () => {
    document.body.click()
    expect(wrapper.vm.$refs.drawer.isOpen).toBe(false)
  })
})
