<template>
    <div class="mobileHeader">

        <div class="logoContainer">
            <NuxtLink to="/">
                <img src="/images/logo.png" class="logo">
            </NuxtLink>
            <MobileHeaderBurgerMenu @open-menu="changeMenuState" />
        </div>

        <div class="menuBox" :class="{ slidemenu: reff }">

            <div class="topLinks">
                <NuxtLink to="/web-factory" @click="closeMenu" class="buttons">
                    Web Factory
                </NuxtLink>
                <div class="band"></div>
                <NuxtLink to="/bot-factory" @click="closeMenu" class="buttons">
                    Bot Factory
                </NuxtLink> 
                <div class="band"></div>
                <NuxtLink to="/a-propos" @click="closeMenu" class="buttons">
                    A propos
                </NuxtLink> 
                <div class="band"></div>
                <NuxtLink to="/contact" @click="closeMenu" class="buttons">
                    Nous contacter
                </NuxtLink> 
                <div class="band"></div>
            </div>

            <NuxtLink to="/" @click="closeMenu" class="buttons endButtons">
                Acceuil
            </NuxtLink>

        </div>

    </div>
</template>

<script setup>
let reff = ref(false);

function closeMenu() {
    reff.value = false;
}

function changeMenuState(opened) {
    reff.value = opened;
}

let vh = '100vh';
onMounted(() => {
    vh = (window.innerHeight * 0.01) + 'px';
});

</script>

<style scoped lang="scss">

.topLinks {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.logo {
      width: 200px;
      height: 30px;
}

ul {
    width: 100%;
    height: 100%;
}

.band {
    border: 1px solid #B6B9BF;
}

.buttons {
    display: flex;
    height: 100px;


    font-family: 'Fira Code', monospace;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    text-align: center;
    
    align-items: center;
    justify-content: center;
}
.endButtons {
    width: 100%;
    background-color: #28ACE3;
    color: white;
}

.menuBox {
    display: none;

    align-items: center;
    height: 85%;
}

.slidemenu {
    display: flex;

    justify-content: space-between;
    flex-direction: column;

    top: 0;
    left: 0;
    width: 100vw;
    height: 85%;
    background-color: white;
}

.logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 50px;
    height: 15%;
}

.mobileHeader {
    display: none;
    position: fixed;
    width: 100%;
    height: v-bind(vh);
}

</style>

