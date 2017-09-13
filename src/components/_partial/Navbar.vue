<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{{ brand_name }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item"><router-link to="/users" class="nav-link" active-class="active"><i class="fa fa fa-user"></i>  用户</router-link></li>
          <li class="nav-item"><router-link to="/orders" class="nav-link" active-class="active"><i class="fa fa fa-shopping-cart"></i> 订单</router-link></li>
        </ul>
      </div>
    </div>
  </nav> 
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      brand_name: '管理后台'
    }
  },
  methods: {
  }
}
</script>