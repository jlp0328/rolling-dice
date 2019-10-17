<template>
  <div class="main-dice">
    <div id="dieSelected" v-bind:class="{rolling: rolling}">
      <div v-if="this.diceFace === 0" class="dice initial">
        <span>Get the party started!</span>
      </div>

      <div v-if="this.diceFace === 6" class="dice six">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <div v-if="this.diceFace === 5" class="dice five">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <div v-if="this.diceFace === 4" class="dice four">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <div v-if="this.diceFace === 3" class="dice three">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <div v-if="this.diceFace === 2" class="dice two">
        <span class="dot"></span>
        <span class="dot"></span>
      </div>

      <div v-if="this.diceFace === 1" class="dice one">
        <span class="dot"></span>
      </div>
    </div>

    <button @click="rollTheDice()" class="roll">Roll Em'!</button>

    <p
      v-bind:class="{blinking: blinking}"
      v-if="this.diceFace !== 0"
    >You rolled a {{this.diceFace}}!!</p>
    <Scorecard />
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
import Scorecard from "./Scorecard";

export default {
  components: {
    Scorecard
  },
  data() {
    return {
      diceFace: 0,
      rolling: false,
      blinking: false
    };
  },
  created() {
    EventBus.$on("reset", active => {
      this.diceFace = 0;
    });
  },
  methods: {
    generateFaceOfDie() {
      let displayNum = Math.floor(Math.random() * 6) + 1;
      return displayNum;
    },
    rollTheDice() {
      this.rolling = true;
      setTimeout(() => {
        this.diceFace = this.generateFaceOfDie();
        EventBus.$emit("update-score", this.diceFace);
        this.rolling = false;
        this.blinking = true;
        this.flashingText();
      }, 2000);
    },
    flashingText() {
      setTimeout(() => {
        this.blinking = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.main-dice {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dice {
  height: 100px;
  width: 100px;
  border-radius: 10px;
  background-color: salmon;
  padding: 8px;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: transform 2s cubic-bezier(0.47, 0, 0.745, 0.715);
  animation: easeIn 1.5s;
}

.six {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.five {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  :nth-child(3) {
    grid-row: 2;
    grid-column: span 2;
  }
}

.four {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.three {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  :nth-child(2) {
    grid-row: 2;
    grid-column: 2;
  }
  :nth-child(3) {
    grid-row: 3;
    grid-column: 3;
  }
}

.two {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  :nth-child(2) {
    grid-row: 2;
    grid-column: 2;
  }
}

.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}

.roll {
  margin: 20px auto;
  border-radius: 10px;
  width: 150px;
  height: 50px;
}

.rolling {
  transform: translate3d(0, 0, 0) rotate(720deg);
  transition: transform 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  animation: easeIn 2s;
}

.blinking {
  animation: blinkingText 0.7s infinite;
}

@keyframes easeIn {
  0% {
    opacity: 0.3;
  }

  25% {
    opacity: 0.5;
  }

  50% {
    opacity: 0.65;
  }

  75% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
}

@keyframes blinkingText {
  0% {
    color: #000;
  }
  49% {
    color: transparent;
  }
  50% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
  100% {
    color: #000;
  }
}
</style>