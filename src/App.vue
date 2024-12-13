<template>
  <div>
    <selia-drawer
      :header="header"
      :menuItems="menuItems"
      :toggleIcons="toggleIcons"
      isOpen
      @item-selected="onItemSelected"
    ></selia-drawer>
  </div>
  <RouterView />
</template>

<script>
import seliaLogo from './assets/icons/selia-logo.svg'
import seliaFullLogo from './assets/icons/selia-full-logo.svg'
import homeIcon from './assets/icons/icon-home.svg'
import appointmentsIcon from './assets/icons/icon-appointment.svg'
import searchIcon from './assets/icons/icon-search.svg'
import smileIcon from './assets/icons/icon-smile.svg'
import supportIcon from './assets/icons/icon-support.svg'
import profileIcon from './assets/icons/icon-profile.svg'
import eyeIcon from './assets/icons/icon-eye.svg'
import lockIcon from './assets/icons/icon-lock.svg'
import arrowUpIcon from './assets/icons/icon-arrow-up.svg'
import arrowDownIcon from './assets/icons/icon-arrow-down.svg'
import arrowUpLeft from './assets/icons/arrow-left-icon.svg'
import arrowDownRight from './assets/icons/arrow-right-icon.svg'

export default {
  data() {
    return {
      header: {
        logo: seliaLogo,
        full_logo: seliaFullLogo,
        aria_label: 'Selia Logo',
      },
      toggleIcons: [arrowUpLeft, arrowDownRight],
      menuItems: [
        { label: 'Home', icon: homeIcon, section: 'main', selected: true, active: true },
        { label: 'Citas', icon: appointmentsIcon, section: 'main', active: true },
        { label: 'Buscar', icon: searchIcon, section: 'main', active: true },
        { label: 'Para ti', icon: smileIcon, section: 'main', active: true },
        { label: 'Soporte', icon: supportIcon, section: 'main', active: true },
        {
          label: 'Cuenta',
          icons: [arrowDownIcon, arrowUpIcon],
          section: 'main',
          active: true,
          submenuItems: [
            {
              label: 'Perfil',
              icon: profileIcon,
              active: true,
            },
          ],
        },
        {
          label: 'Seguridad',
          icons: [arrowDownIcon, arrowUpIcon],
          section: 'main',
          active: true,
          submenuItems: [
            {
              label: 'Cambiar contraseña',
              icon: eyeIcon,
              active: true,
            },
            {
              label: 'Bloqueo de PIN',
              icon: lockIcon,
              active: false,
            },
          ],
        },
      ],
    }
  },
  methods: {
    onItemSelected(event) {
      console.log('Selected item:', event.detail)
    },
  },
}
</script>

<style scoped></style>
