<template>
  <div class="container mb-4">
    <ProductsFilterBar @filter-change="filterItems" />

    <div v-if="slicedCards.length !== 0" class="products-scroll-area">

      <ProductsCard class="all-products" :cards="slicedCards" />
      <ProductsMoreButton
        v-if="grid.cards.length > grid.showCards"
        @increment-cards="grid.showCards += 10"
      />
    </div>

    <div v-else class="notification-not-found">
      <Notification>
        <h4><span style="text-decoration: underline;">Sorry, we can't find any product with these features</span></h4>
      </Notification>
    </div>
  </div>
</template>


<script setup>
import { useMainStore } from '@/store/main'
import { reactive, computed, onMounted } from 'vue'

const store = useMainStore()

const grid = reactive({
  cards: [],
  showCards: 10
})

onMounted(async () => {
  await store.fetchItems()
  grid.cards = store.items
})

const filterItems = (term) => {
  if (!term || term.trim() === '') {
    grid.cards = store.items
  } else {
    const lowerTerm = term.toLowerCase()
    grid.cards = store.items.filter(item =>
      item.name.toLowerCase().includes(lowerTerm) ||
      item.description?.toLowerCase().includes(lowerTerm)
    )
  }
}

const slicedCards = computed(() => grid.cards.slice(0, grid.showCards))

</script>

<style scoped>
.all-products {
  margin-top: 30vh;
  overflow-y: auto;
  max-height: calc(100vh - 10rem); /* o lo que necesites */

}

.notification-not-found {
  text-align: center;
  margin-top: 0vh;
  margin-bottom: 50vh;
  text-decoration: underline;
}

.container {
  padding-top: 4rem;
}
</style>
