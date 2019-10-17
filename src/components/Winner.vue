<template>
  <div>
    <h1 class="ease-in">YOU WON!</h1>
    <img src="../assets/winner.gif" />
    <ButtonPanel />
  </div>
</template>

<script>
import ButtonPanel from "./ButtonPanel";
export default {
  components: {
    ButtonPanel
  }
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 10px;
}
.ease-in {
  animation: easeIn 2s ease-in;
}
@keyframes easeIn {
  0% {
    opacity: 0.3;
    transform: translate3d(0, 0, 0);
  }

  25% {
    opacity: 0.5;
    transform: translate3d(-10%, 50%, 0);
  }

  50% {
    opacity: 0.65;
    transform: translate3d(0%, 50%, 0);
  }

  75% {
    opacity: 0.8;
    transform: translate3d(10%, 50%, 0);
  }

  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>