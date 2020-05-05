<template>
  <div class="card" :style="{ backgroundColor }" @click="handleChoose">
    <img
      :src="require('../../assets/' + image)"
      :alt="additional.text"
      width="125em"
      height="125em"
    />
    <span class="text">{{ additional.text }}</span>
    <span class="small-text" v-if="additional.price !== 0"
      >Preço adicional: {{ additional.price | toCurrency }}</span
    >
    <span class="small-text" v-if="additional.time !== 0"
      >Tempo adicional: {{ additional.time }} minutos</span
    >
  </div>
</template>

<script>
export default {
  name: 'ChooseAdditionalsCard',
  props: {
    backgroundColor: String,
    image: String,
    additional: Object
  },

  methods: {
    handleChoose() {
      this.additional.selected = !this.additional.selected
      this.$emit('handle-choose')
    }
  }
}
</script>

<style scoped>
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
  transition: opacity 0.2s;
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
  opacity: 0.8;
}
</style>
