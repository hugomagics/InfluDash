<template>
  <!-- <DesktopHeaderHeader class="Desktop"/>
  <MobileHeaderHeader class="Mobile"/> -->

  <DesktopHomeTopDesktop class="Desktop"/>
</template>

<style scoped>
@media only screen and (min-width: 768px) {
  .Desktop {
    display: block;
  }
}

@media only screen and (max-width: 767px) {
  .Mobile {
    display: block;
  }
}
</style>
