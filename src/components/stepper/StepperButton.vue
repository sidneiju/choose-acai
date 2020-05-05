<template>
  <div class="stepper-button" :class="active">
    <div class="circle-number">
      <span>{{ number }}</span>
    </div>
    {{ text }}
    <div class="selected-value" v-if="selectedValue">
      <span>Escolhido: {{ selectedValue }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepperButton',
  props: {
    number: Number,
    text: String,
    isActive: Boolean,
    selectedValue: null
  },

  computed: {
    active() {
      return { active: this.isActive }
    }
  }
}
</script>

<style scoped>
.stepper-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8em;
  color: #2c3e50;
  cursor: pointer;
  transition: color 0.2s;
}

.circle-number {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  margin: 0.75em;
  background-color: #2c3e50;
  color: white;
  transition: background-color 0.2s;
}

.active {
  color: #8338ec;
}

.active .circle-number {
  background-color: #8338ec;
}

.selected-value {
  color: #8b8c8d;
  font-size: 1em;
}
</style>
