<template>
  <div class="wrapper">
    <h1>Welcome to Dicey McDiceface's Game of Chance</h1>
    <p>All you have to do is roll the die...</p>
    <p>
      When you reach 5 points for any number...
      <strong>YOU WIN!</strong>
    </p>
    <button @click="startGame()" class="start-btn" type="button">Start</button>
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
  created() {},
  methods: {
    startGame() {
      this.started = true;
      EventBus.$emit("started", true);
      this.$router.push("play");
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    width: 150px;
    height: 50px;
    background: salmon;
  }
}
</style>