<template>
    <div class="content">
      WebFactory
      BotFactory
    </div>
</template>
  

<style>
  .content {
    margin-top: 100px;
    margin-left: 50px;
    margin-right: 50px;
  }
</style>

<script setup>
const runtimeConfig = useRuntimeConfig()
let test = runtimeConfig.token;

let { data: count } = await useFetch('/api/hello')
</script>