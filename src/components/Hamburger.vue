<template>
  <div class="hamburger">
    <svg-icon icon="hamburger-opened"></svg-icon>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.hamburger {
  width: 50px;
  height: 50px;
  // background: pink;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.hamburger:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
