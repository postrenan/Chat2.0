<template>
<div>
  <div class="section columns is-mobile is-half">
    <div class="column has-text-center">
      <h2 class="title">Digite seu nome de usuario</h2>
      <input v-model="username" type="text" class="input">
      <button @click="login" class="button is-rounded">Entrar</button>
      <p v-if="error != null">{{error}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default{
  name:"login",
  data(){
    return{
      username: "",
      error: null,
    }
  },
  method:{
    login(){

    }
  }
}
</script>
