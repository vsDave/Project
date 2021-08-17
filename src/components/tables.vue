<template>
  <div class="flex flex-col justify-center">
    <div class="text-center">
      <h1 class="my-3 text-3xl font-bold text-center">Multiplication Tables</h1>
      <input
        placeholder="  enter number here "
        v-model="inputNumber"
        class="text-2xl border border-black"
        type="number"
      />
    </div>
    <div class="flex justify-center p-6 my-3 text-2xl bg-yellow-200">
      <ul>
        <li class="border-b-2 border-white" :key="index" v-for="index in 10">
          {{ inputNumber }} * {{ index }} ={{ inputNumber * index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNumber: '',
    }
  },
}
</script>
