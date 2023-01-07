<template>
    <DesktopHeaderMenu class="desktopHeader"/>
    <MobileHeaderMenu class="mobileHeader"/>
</template>

<style scoped>
@media only screen and (min-width: 768px) {
  .desktopHeader {
    display: flex;
  }
}

@media only screen and (max-width: 767px) {
  .mobileHeader {
    display: block;
  }
}
</style>
