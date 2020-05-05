<template>
  <div class="base">
    <ChooseFlavorCard
      background-color="#F18BBB"
      image="strawberry.svg"
      :flavor="strawberry"
      :class="isSelected(strawberry)"
      @handle-choose="handleChoose"
    />
    <ChooseFlavorCard
      image="banana.svg"
      background-color="#FFD429"
      :flavor="banana"
      :class="isSelected(banana)"
      @handle-choose="handleChoose"
    />
    <ChooseFlavorCard
      background-color="#BFD159"
      image="kiwi.svg"
      :flavor="kiwi"
      :class="isSelected(kiwi)"
      @handle-choose="handleChoose"
    />
  </div>
</template>

<script>
import ChooseFlavorCard from '@/components/selection-cards/ChooseFlavorCard.vue'

const strawberry = {
  text: 'Morango',
  price: 0,
  time: 0
}

const banana = {
  text: 'Banana',
  price: 0,
  time: 0
}

const kiwi = {
  text: 'Kiwi',
  price: 0,
  time: 5
}

export default {
  name: 'ChooseFlavor',
  data() {
    return {
      strawberry,
      banana,
      kiwi,
      selectedFlavor: {
        text: '',
        price: 0,
        time: 0
      }
    }
  },

  components: {
    ChooseFlavorCard
  },

  methods: {
    handleChoose(flavor) {
      this.selectedFlavor = flavor
      this.$emit('update-order', flavor)
    },

    isSelected(flavor) {
      return { 'card-selected': this.selectedFlavor === flavor }
    }
  }
}
</script>

<style scoped>
.base {
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
}

.card-selected {
  outline: 4px dashed #8338ec;
}
</style>
