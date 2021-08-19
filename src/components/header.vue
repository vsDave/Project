<template>
  <div>
    <nav class="font-serif text-2xl bg-gray-500">
      <ul class="mx-0 font-semibold text-center text-white">
        <li class="inline-block mx-10 my-5 underline">
          <router-link
            to="/calculator"
            class="rounded-md hover:bg-gray-800"
            exact
            >Calculator</router-link
          >
        </li>
        <li class="inline-block mx-10 my-5 underline">
          <router-link to="/todo" class="rounded-md hover:bg-gray-800" exact
            >To Do list
          </router-link>
        </li>
        <li class="inline-block mx-10 my-5 underline">
          <router-link to="/services" class="rounded-md hover:bg-gray-800" exact
            >Services
          </router-link>
        </li>
        <li class="inline-block mx-10 my-5 underline">
          <router-link to="/tables" class="rounded-md hover:bg-gray-800" exact
            >Tables
          </router-link>
        </li>
        <li class="inline-block mx-10 my-5 underline">
          <router-link to="/quiz" class="rounded-md hover:bg-gray-800" exact
            >quiz
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
