<template>
  <div>
    <selia-drawer :menuItems="menuItems" isOpen @item-selected="onItemSelected"></selia-drawer>
  </div>
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: 'Home', icon: '🏠', section: 'main', selected: true },
        { label: 'Citas', icon: '📅', section: 'main' },
        { label: 'Buscar', icon: '🔍', section: 'main' },
        { label: 'Para ti', icon: '😊', section: 'main' },
        { label: 'Soporte', icon: '🎧', section: 'main' },
        { label: 'Cambiar contraseña', icon: '👁️', section: 'Seguridad' },
        { label: 'Bloqueo de PIN', icon: '🔒', section: 'Seguridad' },
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
