<template>
    <div>
      <h1>WebWeMade</h1>
      {{count}}
    </div>
</template>
  
<script setup>
const runtimeConfig = useRuntimeConfig()
let test = runtimeConfig.token;

let { data: count } = await useFetch('/api/hello')
</script>
