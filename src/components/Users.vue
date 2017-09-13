<template>
  <div class="orders">
    <table class="table">
      <thead>
        <th>姓名</th>
        <th>性别</th>
        <th>年龄</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{ user.nickname }}</td>
          <td>{{ getSexDisplay(user.nickname) }}</td>
          <td>{{ user.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
function getSexDisplay (sex) {
  if (sex === 'M') {
    return '男'
  } else if (sex === 'F') {
    return '女'
  } else {
    return '未知'
  }
}

export default {
  name: 'hello',
  data () {
    return {
      users: [{
        nickname: '小明',
        sex: 'M',
        age: 12
      },
      {
        nickname: '小花',
        sex: 'F',
        age: 13
      },
      {
        nickname: '小方',
        sex: 'S',
        age: 14
      },
      {
        nickname: '小牛',
        sex: 'M',
        age: 15
      }]
    }
  },
  methods: {
    getSexDisplay
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
