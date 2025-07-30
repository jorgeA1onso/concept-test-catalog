<template>
  <div class="navbar-fixed d-flex">
    <Logo />
    <NuxtLink
      :to="link.Link"
      v-for="(link, idx) in navLinks"
      :id="idx"
      :key="idx"
      class="nav-link"
    >
      {{ link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Logo from './Logo.vue';

const navLinks = [
  {
    name: 'Products',
    Link: '/'
  },
  {
    name: 'Contact',
    Link: '/contact'
  }
];
</script>

<style scoped>
.navbar-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  margin-right: 1rem;
  text-decoration: none;
  color: #333;
}
</style>
