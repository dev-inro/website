<template>
  <div class="burger-menu" :class="{ active: isOpen }" @click="toggleMenu">
    <button class="burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script setup>
const isOpen = ref(false);
const emit = defineEmits(['toggle'])

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  emit('toggle', isOpen.value);
};
</script>

<style lang="scss">
.burger-menu {
  position: relative;
  width: 48px;
  height: 48px;
  background-color: $light-grey;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.burger-menu .burger {
  display: block;
  background-color: transparent;
  border: none;
  width: 18px;
  height: 2px;
  position: relative;
}

.burger-menu .burger span {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: $grey;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.burger-menu .burger span:first-child {
  transform: translateY(-5px);
}

.burger-menu .burger span:last-child {
  transform: translateY(5px);
}

.burger-menu.active .burger span:first-child {
  transform: translateY(0) rotate(45deg);
}

.burger-menu.active .burger span:last-child {
  transform: translateY(0) rotate(-45deg);
}

.burger-menu.active .burger span:nth-child(2) {
  opacity: 0;
}
</style>
