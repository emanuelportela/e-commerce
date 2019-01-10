<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
       <div class="container">
         <router-link class="navbar-brand" to="/">BeerProject</router-link>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
               <li class="nav-item">
                  <router-link to="/basket" class="nav-link">Accéder à votre panier 
                  
                     <span v-if="$store.state.basket.length > 0">({{$store.state.basket.length}} articles - {{getTotal()}} €)</span>
                  
                     <span v-else>(vide)</span>

                  </router-link>
               </li>
            </ul>
      </div>
   </nav>
</template>


<script>
export default {
   data() {
      return {
         panier: this.$store.state.basket,
      }
   },
   computed: {
      getTotal() {
         var total = 0;
         for (var i = 0; i < this.panier.length; i++) {
            total += this.panier[i].price   
         }
         return total.toFixed(2)
      }
   }
}
</script>


<style scoped>

</style>