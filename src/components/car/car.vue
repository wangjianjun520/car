<template>
  <div>
      car
      <ul>
        <li v-for="(item,index) in cartProducts" :key="index">
           <span>{{item.title}}</span>
           -
           <span>{{item.price}}</span>
           *
        </li>
      </ul>
      {{cartProducts}}
  </div>
</template>

<script>
   import {mapGetters} from 'vuex'
   export default{
     computed:{
       ...mapGetters('car',['cartProducts'])
     }
   }
</script>
<style scoped>

</style>