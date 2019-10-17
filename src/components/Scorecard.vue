<template>
  <div class="scorecard-wrapper">
    <h2>Scorecard</h2>
    <div class="indv-scores">
      <div class="scorecard" v-for="num in this.keepCount" :key="num.key">
        <h3>{{num.key}}</h3>
        <p>{{num.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
const scores = new Map();

import { EventBus } from "./event-bus.js";

export default {
  data() {
    return {
      keepCount: [
        {
          key: 1,
          value: 0
        },
        {
          key: 2,
          value: 0
        },
        {
          key: 3,
          value: 0
        },
        {
          key: 4,
          value: 0
        },
        {
          key: 5,
          value: 0
        },
        {
          key: 6,
          value: 0
        }
      ]
    };
  },
  computed: {},
  methods: {
    resetScore() {
      scores.set(1, 0);
      scores.set(2, 0);
      scores.set(3, 0);
      scores.set(4, 0);
      scores.set(5, 0);
      scores.set(6, 0);

      this.keepCount = [
        {
          key: 1,
          value: 0
        },
        {
          key: 2,
          value: 0
        },
        {
          key: 3,
          value: 0
        },
        {
          key: 4,
          value: 0
        },
        {
          key: 5,
          value: 0
        },
        {
          key: 6,
          value: 0
        }
      ];
    }
  },
  created() {
    this.resetScore();
    EventBus.$on("update-score", score => {
      let current = scores.get(score);
      let newScore = current + 1;
      scores.set(score, newScore);
      this.keepCount[score - 1].value = newScore;

      if (newScore === 5) {
        EventBus.$emit("winner", true);
        this.$router.push("winner");
      }
    });

    EventBus.$on("reset", score => {
      this.resetScore();
    });
  }
};
</script>

<style lang="scss" scoped>
.scorecard-wrapper {
  width: 100%;
}
.scorecard {
  display: grid;
  grid-template-rows: 50% 50%;
}

.indv-scores {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
}
</style>