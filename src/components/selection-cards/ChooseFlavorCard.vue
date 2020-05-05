<template>
  <div class="choose-base">
    <div class="card" :style="{ backgroundColor }" @click="handleChoose">
      <img
        :src="require('../../assets/' + image)"
        :alt="flavor.text"
        width="125em"
        height="125em"
      />
      <span class="text">{{ flavor.text }}</span>
      <span class="small-text" v-if="flavor.price !== 0"
        >Preço adicional: {{ flavor.price | toCurrency }}</span
      >
      <span class="small-text" v-if="flavor.time !== 0"
        >Tempo adicional: {{ flavor.time }} minutos</span
      >
    </div>
    <span v-if="isSelected">Escolhido!</span>
  </div>
</template>

<script>
export default {
  name: 'ChooseFlavorCard',

  props: {
    backgroundColor: String,
    image: String,
    flavor: Object,
    isSelected: Boolean
  },

  methods: {
    handleChoose() {
      this.$emit('handle-choose', this.flavor)
    }
  }
}
</script>

<style scoped>
.choose-base {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card {
  margin: 1em;
  padding: 1em;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  color: #080708;
  border-radius: 4px;
  transition: opacity 0.5s;
}

.text {
  font-size: 2em;
  margin: 2px;
}

.small-text {
  font-size: 1em;
  margin: 2px;
}

.card:hover {
  opacity: 0.6;
}
</style>
