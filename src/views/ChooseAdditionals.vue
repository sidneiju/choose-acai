<template>
  <div class="base">
    <ChooseAdditionalsCard
      background-color="#D4B5D9"
      image="granola.png"
      :additional="granola"
      :isSelected="isSelected(granola)"
      @handle-choose="handleChoose"
    />
    <ChooseAdditionalsCard
      image="pacoca.png"
      background-color="#EAA982"
      :additional="pacoca"
      :isSelected="isSelected(pacoca)"
      @handle-choose="handleChoose"
    />
    <ChooseAdditionalsCard
      background-color="#84D4CB"
      image="milk_powder.png"
      :additional="milkPowder"
      :isSelected="isSelected(milkPowder)"
      @handle-choose="handleChoose"
    />
  </div>
</template>

<script>
import ChooseAdditionalsCard from '@/components/selection-cards/ChooseAdditionalsCard.vue'

const granola = {
  text: 'Granola',
  price: 0,
  time: 0,
  selected: false
}

const pacoca = {
  text: 'Paçoca',
  price: 3,
  time: 3,
  selected: false
}

const milkPowder = {
  text: 'Leite Ninho',
  price: 3,
  time: 0,
  selected: false
}

const none = {
  text: 'Nenhum',
  price: 0,
  time: 0
}

export default {
  name: 'ChooseAdditionals',
  data() {
    return {
      granola,
      pacoca,
      milkPowder,
      none,
      selectedAdd: []
    }
  },

  components: {
    ChooseAdditionalsCard
  },

  methods: {
    handleChoose() {
      this.selectedAdd = []
      if (this.granola.selected) this.selectedAdd.push(this.granola)
      if (this.pacoca.selected) this.selectedAdd.push(this.pacoca)
      if (this.milkPowder.selected) this.selectedAdd.push(this.milkPowder)
      this.$emit('update-order', this.selectedAdd)
    },

    isSelected(additional) {
      return additional.selected
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
</style>
