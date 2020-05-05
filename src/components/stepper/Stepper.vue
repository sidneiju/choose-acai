<template>
  <div class="stepper">
    <div
      v-for="(step, index) of steps"
      :key="index"
      :class="stepperItem(step.isActive)"
    >
      <StepperButton
        :number="index + 1"
        :text="step.text"
        :isActive="step.isActive"
        :selectedValue="selectedValue(index)"
        @click.native="changeStep(index)"
      />
      <!-- <StepperLine v-show="!isLastStep(index)" /> -->
    </div>
  </div>
</template>

<script>
import StepperButton from '@/components/stepper/StepperButton.vue'
// import StepperLine from '@/components/stepper/StepperLine.vue'

export default {
  name: 'Stepper',

  props: {
    steps: Array,
    order: Object
  },

  components: {
    StepperButton
    // StepperLine
  },

  methods: {
    isLastStep(index) {
      let lastStep = this.steps.length - 1
      return lastStep === index
    },

    changeStep(index) {
      this.$emit('update-current-step', index)
    },

    selectedValue(index) {
      switch (this.steps[index].componentName) {
        case 'ChooseSize':
          if (this.order.chosenSize) {
            return this.order.chosenSize.size + 'ml'
          }
          break
        case 'ChooseFlavor':
          return this.order.chosenFlavor?.text
        case 'ChooseAdditionals':
          if (this.order.chosenAdd.length > 0) {
            let additionals = []
            this.order.chosenAdd.forEach(add => {
              additionals.push(add.text)
            })
            return additionals.join(', ')
          }
      }
    },

    stepperItem(isActive) {
      return { 'stepper-item': !isActive }
    }
  }
}
</script>

<style scoped>
.stepper {
  padding: 1em;
  display: flex;
  justify-content: space-around;
  user-select: none;
}

.stepper-item:hover {
  opacity: 0.8;
}

/* .stepper-item {
  display: flex;
  flex: 1;
  align-items: center;
} */
</style>
