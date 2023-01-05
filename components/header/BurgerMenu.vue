<template>

    <div class="menu-wrapper" @click="changeState" :class="{ active: openMenu }">

        <div class="menu-bar first"></div>
        <div class="menu-bar second"></div>
    
    </div>

</template>

<script setup>
let openMenu = ref(false);

// create emit
const emit = defineEmits(['openMenu']);

function changeState() {
    openMenu.value = !openMenu.value;
    emit('openMenu', openMenu.value);
}

</script>

<style scoped>

.menu-wrapper {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;
}

.first {
    width: 50px;
    height: 3px;
    background-color: #28ACE3;
    animation-delay: 0.1s;
    transition: all 0.3s;
}

.second {
    width: 50px;
    margin-top: 5px;
    height: 3px;
    background-color: #28ACE3;
    transition: all 0.3s;
}

@keyframes slideOut {
  0% {
    width: 100%;
    left: 0%;
    right: auto;
  }
  
  50% {
    width: 0%;
    left: 0%;
    right: auto;
  }
  51% {
    width: 0%;
    right: 0%;
    left: auto;
  }

  100% {
    width: 100%;
    right: 0%;
    left: auto;
  }
}

/**/

.menu-wrapper:hover .menu-bar.active {
  animation:none;
}
.active .first {
  top: 50%;
  left: 0%;
  transform: rotate(45deg);
}
.active .second{
  top: 50%;
  left: 0%;
  transform: rotate(-45deg);
}

</style>
