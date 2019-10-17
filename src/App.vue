<template>
  <div id="app">
    <transition name="welcome">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { EventBus } from "./components/event-bus";

export default {
  name: "app",
  data() {
    return {
      started: false,
      winner: false
    };
  },
  created() {
    EventBus.$on("started", value => {
      this.started = value;
    });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p,
button {
  font-size: 18px;
}

button {
  border-radius: 10px;
}

button:hover {
  opacity: 0.8;
  font-weight: bold;
  box-shadow: 0 14px 26px -12px;
}

.welcome-enter-active {
  animation: coming 2s;
  animation-delay: 0.5s;
  opacity: 0;
}
.welcome-leave-active {
  animation-delay: 0.5s;
  animation: going 2s;
}

@keyframes going {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
}
@keyframes coming {
  0% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
