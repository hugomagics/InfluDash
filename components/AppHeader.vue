<template>
    <div class="header">
        <NuxtLink to="/" class="logo">
            <img src="/images/logo.png" alt="logo">
        </NuxtLink>
        <BurgerMenu />
    </div>
</template>

<style>
    .header {
        display: flex;
        margin-top: 40px;
    }
    .logo {
        position: fixed;
        width: 15%;
        right: 80%;
        cursor: pointer;
    }
</style>
