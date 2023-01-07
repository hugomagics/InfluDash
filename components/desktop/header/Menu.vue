<template>
    <div class="desktopHeader">
        <div class="logoContainer">
            <NuxtLink to="/" class="logoBox">
                <img src="/images/logo.png" class="logo">
            </NuxtLink>
        </div>

        <div class="buttonsContainer">
            <NuxtLink to="/web-factory" class="webfac" :class="{webfachover : (currentPage == 1)}">
                Web Factory
            </NuxtLink>

            <NuxtLink to="/bot-factory" class="botfac" :class="{botfachover : (currentPage == 2)}">
                Bot Factory
            </NuxtLink>

            <NuxtLink to="/a-propos" class="apropos" :class="{aproposhover : (currentPage == 3)}">
                A propos
            </NuxtLink>

            <NuxtLink to="/contact" class="contact" :class="{contacthover : (currentPage == 4)}">
                Nous contacter
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
let linklist = ref(['/', '/web-factory', '/bot-factory', '/a-propos', '/contact']);
let currentPage = ref(0);
currentPage.value = linklist.value.indexOf(route.path);

watch(() => route.name, () => {
    currentPage.value = linklist.value.indexOf(route.path);
});
</script>

<style scoped>

.logo {
    width: 80%;
    height: 80%;
}

.logoBox {
    border-radius: 30px;

    height: 50px;
    width: 350px;

    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2em grey;

}

.desktopHeader {
    height: 100px;
    margin-left: 50px;
    margin-right: 50px;
    
    align-items: center;
    box-sizing: border-box;
    display: none;
}

.logoContainer {
    position: relative;
    width: 60%;
    height: 100%;

    display: flex;
    align-items: center;
}

.buttonsContainer {
    position: relative;
    width: 40%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;

    color: #000000;
}

.botfac:hover, .botfachover {
    color: #5F43B2;
}

.webfac:hover, .webfachover {
    color: #28ACE3;
}

.apropos:hover, .aproposhover {
    color: grey;
}

.contact:hover, .contacthover {
    color: grey;
}
</style>