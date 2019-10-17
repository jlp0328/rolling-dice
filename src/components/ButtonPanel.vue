<template>
  <div class="btn-container">
    <button @click="resetGame()" type="button">Want to start over?</button>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";

export default {
  data() {
    return {
      started: false
    };
  },
  methods: {
    resetGame() {
      EventBus.$emit("reset", true);
      if (this.$route.path !== "/play") {
        this.$router.push("play");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
}

button {
  width: 200px;
  height: 50px;
}
</style>