<template>
  <div class="review-order">
    <h1>Seu pedido</h1>
    <table>
      <tr>
        <td>Tamanho</td>
        <td>{{ order.chosenSize.size }}ml</td>
        <td>{{ order.chosenSize.price | toCurrency }}</td>
      </tr>

      <tr>
        <td>Sabor</td>
        <td>{{ order.chosenFlavor.text }}</td>
        <td>{{ order.chosenFlavor.price | toCurrency }}</td>
      </tr>

      <tr v-for="(add, index) of order.chosenAdd" :key="index">
        <td>Personalizações</td>
        <td>{{ add.text }}</td>
        <td>{{ add.price | toCurrency }}</td>
      </tr>

      <tr>
        <td>Tempo de preparo</td>
        <td>-</td>
        <td>{{ totalTime }} minutos</td>
      </tr>

      <tr>
        <td>Valor total:</td>
        <td>-</td>
        <td>{{ totalPrice | toCurrency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReviewOrder',

  props: {
    order: Object
  },

  computed: {
    totalPrice() {
      let total = 0
      total += this.order.chosenSize.price
      total += this.order.chosenFlavor.price
      this.order.chosenAdd.forEach(add => {
        total += add.price
      })
      return total
    },

    totalTime() {
      let total = 0
      total += this.order.chosenSize.time
      total += this.order.chosenFlavor.time
      this.order.chosenAdd.forEach(add => {
        total += add.time
      })
      return total
    }
  }
}
</script>

<style scoped>
.review-order {
  margin: 1em;
  display: flex;
  flex-direction: column;
}

table {
  border-collapse: collapse;
  font-weight: bold;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  color: white;
  background-color: #c186f6;
}
</style>
