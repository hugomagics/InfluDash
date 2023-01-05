<template>
    <div class="mobileHeader">

        <div class="logoContainer">
            <NuxtLink to="/">
                <img src="/images/logo.png" class="logo">
            </NuxtLink>
            <HeaderBurgerMenu @open-menu="changeMenuState" />
        </div>

        <div class="menuBox" :class="{ slidemenu: reff }">
            <div class="menuContent">
                Web Factory <br/>
                Bot Factory <br/>
                A propos <br/>
                Nous contacter
            </div>
        </div>

    </div>
</template>

<script setup>
let reff = ref(false);

function changeMenuState(opened) {
    reff.value = opened;
}

</script>

<style scoped>

.menuBox {
    display: none;
    align-items: center;
}

.slidemenu {
    display: flex;
    position: fixed;

    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;

    margin-top: 10px;
}

.menuContent {
    display: block;
}

.logoContainer {
    display: flex;
    justify-content: space-between;
}
.mobileHeader {
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 50px;

    display: none;
}

</style>