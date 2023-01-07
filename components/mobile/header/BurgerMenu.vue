<template>

    <div class="container">
      <div class="menu-wrapper" @click="changeState" :class="{ active: openMenu }">
  
          <div class="menu-bar first"></div>
          <div class="menu-bar second"></div>
      
      </div>
    </div>

</template>

<script setup>
let openMenu = ref(false);
const emit = defineEmits(['openMenu']);

function changeState() {
    openMenu.value = !openMenu.value;
    emit('openMenu', openMenu.value);
}

</script>

<style scoped>

.container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;

  transform-origin: center;
}

.menu-wrapper {
  width: 40px;
  height: auto;
  cursor: pointer;
  position: relative;
}

.menu-bar {
  position: absolute;
  width: 100%;
  height: 4px;
  background: #fff;
  left: 0%;
}

.first {
    width: 40px;
    height: 3px;

    animation-delay: 0.1s;
    transition: all 0.3s;
    background-color: #28ACE3;
}

.second {
    width: 40px;
    height: 3px;
    margin-top: 6px;

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

.menu-wrapper:hover .menu-bar.active {
  animation:none;
}

.active .first {
  top: 50%;
  left: 0%;
  transform: rotate(45deg) translateY(3px);
}

.active .second{
  top: 50%;
  left: 0%;
  transform: rotate(-45deg) translateY(-3px);
}

</style>
