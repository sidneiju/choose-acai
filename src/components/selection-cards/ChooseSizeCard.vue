<template>
  <div class="card" :style="{ backgroundColor }" @click="handleChoose">
    <img
      src="../../assets/acai_bowl.svg"
      alt="acai_pote"
      :width="acaiBowlSize"
      :height="acaiBowlSize"
    />
    <span class="text">{{ text }}</span>
    <span class="small-text">Preço: {{ acai.price | toCurrency }}</span>
    <span class="small-text">Tempo de preparo: {{ acai.time }} minutos</span>
  </div>
</template>

<script>
export default {
  name: 'ChooseSizeCard',

  props: {
    backgroundColor: String,
    acai: Object
  },

  computed: {
    text() {
      return `${this.acai.text} - ${this.acai.size}ml`
    },
    acaiBowlSize() {
      return `${this.acai.size / 4}em`
    }
  },

  methods: {
    handleChoose() {
      this.$emit('handle-choose', this.acai)
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
