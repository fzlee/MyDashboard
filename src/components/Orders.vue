<template>
  <div class="orders">
    <table class="table">
      <thead>
        <th>用户名</th>
        <th>订单号</th>
        <th>价格</th>
        <th>状态</th>
      </thead>
      <tbody>
        <tr v-for="order in orders">
          <td>{{ order.nickname }}</td>
          <td>{{ order.orderNo }}</td>
          <td>{{ order.price }}元</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      orders: [{
        nickname: '小明',
        orderNo: '订单1',
        price: 12,
        status: '已经支付'
      },
      {
        nickname: '小方',
        orderNo: '订单2',
        price: 12,
        status: '未支付'
      },
      {
        nickname: '小明',
        orderNo: '订单3',
        price: 12,
        status: '已发货'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
