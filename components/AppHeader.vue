<template>
    <DesktopHeaderMenu class="desktop"/>
    <MobileHeaderMenu class="mobile"/>
</template>

<style>
@media only screen and (min-width: 768px) {
  .desktop {
    display: flex;
  }
  .mobile {
    display: none;
  }
}

@media only screen and (max-width: 767px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}
</style>