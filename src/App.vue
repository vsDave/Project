<template>
  <div>
    <Header></Header>
    <router-view />
    <!-- <calculator></calculator>
    <todo></todo> -->
  </div>
</template>

<script>
// import calculator from './components/calculator.vue'
import Header from './components/header.vue'
// import Todo from './components/todo.vue'
export default {
  components: { Header },
}
</script>

<style></style>
