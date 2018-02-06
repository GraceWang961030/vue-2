<template>
  <div>
    <h3>Hello world This is vuex-demo!</h3>
  <input type="button" value="increase" @click="increase"/>
    <input type="button" value="decrease" @click="decrease" />
    <input type="button" value="increase when it's even " @click="clickEven"/>
    <input type="button" value="async" @click="clickAsync"/>
  <div>
    now the number is:{{count}}
  </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  computed:mapGetters([
    'count'
  ]),
  methods:mapActions([
    'increase',
    'decrease',
    'clickEven',
    'clickAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
