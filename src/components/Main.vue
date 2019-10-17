<template>
  <div class="main-container">
    <Dice />
    <ButtonPanel />
  </div>
</template>

<script>
import ButtonPanel from "./ButtonPanel";
import Dice from "./Dice";

export default {
  data() {
    return {};
  },
  components: {
    ButtonPanel,
    Dice
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 24px;
}
</style>