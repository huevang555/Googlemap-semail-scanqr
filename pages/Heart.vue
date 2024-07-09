<template>
  <div class="heart-container">
    <div class="heart"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Heart Animation'
    }
  }
}
</script>

<style scoped>
.heart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fff;
}

.heart {
  position: relative;
  width: 100px;
  height: 100px;
  background: red;
  transform: rotate(-45deg);
  margin: 50px;
  animation: pulse 1s infinite;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: red;
}

.heart::before {
  width: 100px;
  height: 100px;
  top: -50px;
  left: 0;
}

.heart::after {
  width: 100px;
  height: 100px;
  left: 50px;
  top: 0;
}

@keyframes pulse {
  0% {
    transform: scale(1) rotate(-45deg);
  }
  50% {
    transform: scale(1.1) rotate(-45deg);
  }
  100% {
    transform: scale(1) rotate(-45deg);
  }
}
</style>
