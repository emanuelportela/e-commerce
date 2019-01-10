<template>
   <div class="container">
      <h3 class="mt-2">Contenu du panier</h3>
      <ul class="list-group mt-5">
         <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in panier" :key="item.id">
            {{item.label | majuscule}}
            <span class="badge badge-primary badge-pill">{{item.price | signe}}</span>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   data() {
      return {
         panier: this.$store.state.basket,
      }
   }
}
</script>

<style scoped>

</style>
