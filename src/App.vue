<template>
  <div>
    <selia-drawer
      :header="header"
      :menuItems="menuItems"
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

export default {
  data() {
    return {
      header: {
        logo: seliaLogo,
        full_logo: seliaFullLogo,
        aria_label: 'Selia Logo',
      },
      menuItems: [
        { label: 'Home', icon: homeIcon, section: 'main', selected: true },
        { label: 'Citas', icon: appointmentsIcon, section: 'main' },
        { label: 'Buscar', icon: searchIcon, section: 'main' },
        { label: 'Para ti', icon: smileIcon, section: 'main' },
        { label: 'Soporte', icon: supportIcon, section: 'main' },
        {
          label: 'Cuenta',
          icons: [arrowDownIcon, arrowUpIcon],
          section: 'main',
          submenuItems: [
            {
              label: 'Perfil',
              icon: profileIcon,
            },
          ],
        },
        {
          label: 'Seguridad',
          icons: [arrowDownIcon, arrowUpIcon],
          section: 'main',
          submenuItems: [
            {
              label: 'Cambiar contraseña',
              icon: eyeIcon,
            },
            {
              label: 'Bloqueo de PIN',
              icon: lockIcon,
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
