<template>
  <div>
    {{data}}
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
let data = runtimeConfig.token;
</script>
