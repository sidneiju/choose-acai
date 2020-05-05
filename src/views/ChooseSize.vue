<template>
  <div class="base">
    <ChooseSizeCard
      v-for="(acaiSize, index) of availableSizes"
      :background-color="backgroundColor(index)"
      :key="index"
      :acai="acaiSize"
      :isSelected="isSelected(acaiSize)"
      @handle-choose="handleChoose"
    />
  </div>
</template>

<script>
import ChooseSizeCard from '@/components/selection-cards/ChooseSizeCard.vue'

/* API
 * Aqui eu importo o objeto axios que foi previamente configurado
 * sob o nome Api para utilizá-lo depois.
 */
// eslint-disable-next-line no-unused-vars
import Api from '@/services/Api.js'

/* API
 * Estes dados declarados aqui (smallAcai, mediumAcai e largeAcai) seriam os dados que viriam da API.
 * Veja o código comentado com o hook mounted para um exemplo de como seria uma chamada à API utilizando a biblioteca axios.
 */
const smallAcai = {
  text: 'Pequeno',
  size: 300,
  price: 10,
  time: 2
}

const mediumAcai = {
  text: 'Médio',
  size: 500,
  price: 13,
  time: 7
}

const largeAcai = {
  text: 'Grande',
  size: 700,
  price: 15,
  time: 10
}

export default {
  name: 'ChooseAcai',
  data() {
    return {
      availableSizes: [smallAcai, mediumAcai, largeAcai],
      selectedSize: {
        text: '',
        size: 0,
        price: 0,
        time: 0
      }
      /* API
       * Propriedade 'loading' será usada para fazer o controle de mostrar um componente de loading enquanto os dados são carregados
       loading: true
       */
    }
  },

  /* API
   * Esse método é o responsável por fazer a requisição à Api e
   * atribuir a resposta ao dado utilizado nesse componente.
  mounted() {
    Api.get('sizes')
      .then(response => {
        this.availableSizes = response.data
      })
      .catch(error => console.log(error))
      .finally(() => (this.loading = false))
  },
  */

  components: {
    ChooseSizeCard
  },

  methods: {
    backgroundColor(index) {
      switch (index) {
        case 0:
          return '#FFD429'
        case 1:
          return '#ED7CAD'
        case 2:
          return '#3ECACA'
        default:
          return '#FFD429'
      }
    },

    handleChoose(acai) {
      this.selectedSize = acai
      this.$emit('update-order', acai)
    },

    isSelected(acai) {
      return this.selectedSize === acai
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
