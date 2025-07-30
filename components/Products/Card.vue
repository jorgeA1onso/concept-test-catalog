<template>
  <div></div>
    <div class="cards-wrapper">
      <div class="cards-grid">
        <div v-for="item in cards" :key="item.id" class="card">
          <img class="card-img-top" :src="item.image" alt="Card image" loading="lazy" />
          <div class="overlay">
            <NuxtLink :to="`/details/${item.id}`">
              <button type="button" class="btn btn-light btn-lg">Info</button>
            </NuxtLink>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">${{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Product } from '../types'
useMainStore()

defineProps<{
  cards: Product[]
}>()
</script>

<style lang="scss">
.cards-wrapper {
  margin-top: 5rem; // espacio que antes daba el h1
  height: 50vh;
  overflow-y: auto;
  max-width: 100vw;
  padding-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.card {
  transition: 300ms;
  position: relative;
  background: #fff;
  border-radius: 8px;
  overflow-y: hidden;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  button {
    width: 140px;
    margin-bottom: 10px;
  }

  &:hover img {
    filter: blur(4px);
  }

  &:hover .overlay {
    opacity: 0.4;
  }

  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    background-color: #232b34;
    opacity: 0;
    z-index: 100;
    transition: all 0.3s ease-in;
    top: 0;
    left: 0;
  }

  &:hover,
  &:active {
    transform: scale(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25), 0 0px 40px rgba(0, 0, 0, 0.22);
  }

  .card-body {
    padding: 1rem;
    text-align: center;
  }
}

/* Utilidad accesible opcional */
.visually-hidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
