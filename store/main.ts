import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    items: [],
    cartItems: [],
    productInfo: {},
  }),

  actions: {
    async fetchItems() {
      try {
        const res = await axios.get('http://localhost:3000/products')
        this.items = res.data
      } catch (error) {
        console.error('Error al cargar productos:', error)
      }
    },


  },
})
