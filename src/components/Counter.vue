<template>
  <div class="counter" id="counter">
    <div>{{name}}</div>
    Count : <span class="tip">{{count}}</span>
    <div>
      <button @click="increment">+5</button>
      <button @click="decrement">-3</button>
      <button @click="incrementSync">+10</button>
      <button @click="decrementSync">-6</button>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      count(){
        return this.$store.state.count
      },
      name () {
        return this.$store.getters.getName;
      }
    },
    methods:{
      increment () {
        this.$store.commit('increment',5)
      },
      decrement () {
        this.$store.commit('decrement',3)
      },
      incrementSync () {
        this.$store.dispatch('incrementSync',10)
      },
      decrementSync () {
        this.$store.dispatch('decrementSync',6)
      }
    }
  }
</script>
<style lang="less" scoped>
html,body{
  margin:0;
  padding:0;
}
.counter{
  text-align: center;
  font-size:24px;
  .tip{
    color:#399;
    font-weight: bold;
  }
}
</style>
