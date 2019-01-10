import Vuex from 'vuex'

const store = new Vuex.Store({
   state: {
      basket: [],
   },
   mutations: {
      CreateBasket(state, basket) {
         state.basket = basket
      },
      AddToBasket(state, beer) {
         state.basket.push(beer)
      }
   }
})

export default store