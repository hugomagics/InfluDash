<template>
    <div class="burgerMenu">
        <div class="BurgerMenuLine first"></div>
        <div class="BurgerMenuLine second"></div>
        <div class="BurgerMenuLine third"></div>
    </div>
</template>

<script>

</script>

<style lang="scss">
    .burgerMenu {
        position: fixed;
        top: 45px;
        left: 93.5%;
        width: 60px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        cursor: pointer;

        color: #000000;
    }

    .BurgerMenuLine {
        display: block;
        background-color: black;
        height: 2px;
    }

    .first {
        width: 60px;
    }

    .second {
        width: 75px;
        margin-top: 5px;
    }

    .third {
        width: 40px;
        margin-top: 5px;
    }

</style>
