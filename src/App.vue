<template>
  <div id="app">
    <Stepper
      :steps="steps"
      :order="order"
      @update-current-step="updateCurrentStep"
    />
    <keep-alive>
      <component :is="currentStep" :order="order" @update-order="updateOrder">
      </component>
    </keep-alive>
    <button class="button-next" @click="proceedButton(currentStepIndex)">
      {{ nextStepText }}
    </button>
  </div>
</template>

<script>
import Stepper from '@/components/stepper/Stepper.vue'
import ChooseSize from '@/views/ChooseSize.vue'
import ChooseFlavor from '@/views/ChooseFlavor.vue'
import ChooseAdditionals from '@/views/ChooseAdditionals.vue'
import ReviewOrder from '@/views/ReviewOrder.vue'

/* API
 * Aqui eu importo o objeto axios que foi previamente configurado
 * sob o nome Api para utilizá-lo depois.
 */
// eslint-disable-next-line no-unused-vars
import Api from '@/services/Api.js'

const steps = [
  {
    componentName: 'ChooseSize',
    text: 'ESCOLHA UM TAMANHO',
    isActive: true
  },
  {
    componentName: 'ChooseFlavor',
    text: 'ESCOLHA UM SABOR',
    isActive: false
  },
  {
    componentName: 'ChooseAdditionals',
    text: 'ESCOLHA OS ADICIONAIS',
    isActive: false
  },
  {
    componentName: 'ReviewOrder',
    text: 'REVISE O PEDIDO',
    isActive: false
  }
]

export default {
  name: 'App',
  data() {
    return {
      steps,
      currentStepIndex: 0,
      order: {
        chosenSize: null,
        chosenFlavor: null,
        chosenAdd: [],
        totalPrice: 0,
        totalTime: 0
      },
      aprendendoWatcher: {}
    }
  },

  components: {
    Stepper,
    ChooseSize,
    ChooseFlavor,
    ChooseAdditionals,
    ReviewOrder
  },

  methods: {
    updateCurrentStep(index) {
      if (this.canChangeStep(index)) {
        this.steps[this.currentStepIndex].isActive = false
        this.steps[index].isActive = true
        this.currentStepIndex = index
      }
    },

    proceedButton(index) {
      if (!this.isLastStep()) {
        this.updateCurrentStep(index + 1)
      } else {
        /* API
         * Envia o pedido com as informações necessárias para a Api
        Api.post('ordered', this.order)
          .then(response => {
            // Mensagem de sucesso
          })
          .catch(error => console.log(error))
        */
      }
    },

    canChangeStep(index) {
      let canChange = false
      switch (this.steps[index].componentName) {
        case 'ChooseSize':
          canChange = true
          break
        case 'ChooseFlavor':
          if (this.order.chosenSize) {
            canChange = true
          }
          break
        case 'ChooseAdditionals':
          if (this.order.chosenFlavor) {
            canChange = true
          }
          break
        case 'ReviewOrder':
          if (this.order.chosenSize && this.order.chosenFlavor) {
            canChange = true
          }
          break
      }
      return canChange
    },

    updateOrder(choice) {
      switch (this.steps[this.currentStepIndex].componentName) {
        case 'ChooseSize':
          this.order.chosenSize = choice
          break
        case 'ChooseFlavor':
          this.order.chosenFlavor = choice
          break
        case 'ChooseAdditionals':
          this.order.chosenAdd = choice
          break
      }
    },

    isLastStep() {
      let lastStep = this.steps.length - 1
      return this.currentStepIndex === lastStep
    }
  },

  computed: {
    currentStep() {
      return this.steps[this.currentStepIndex].componentName
    },
    nextStepText() {
      return !this.isLastStep() ? 'Próximo passo' : 'Concluir pedido'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

body {
  margin: 0;
}

#app {
  font-family: 'Quicksand', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
}

.button-next {
  /* outline: 2px solid #8338ec; */
  margin: 2em;
  padding: 2em;
  box-shadow: none;
  align-self: flex-end;
}
</style>
