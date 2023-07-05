<template>
  <div class="app">
    <div class="section columns is-mobile is-half is-centered is-vcentered">
      <div class="columns is-mobile is-half is-vcentered">
        <div class="column is-vcentered box">
          <h2 class="title">Digite um apelido</h2>
          <input class="input is-rounded" v-model="nickname" type="text"/>
          <button class="button is-rounded" @click="login(nickname)">Entrar</button>
          <p class="subtitle" v-if="erro !== null">{{ erro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

const socket = io('127.0.0.1:3000');

export default {
  name: 'Login',
  data() {
    return {
      nickname: '',
      erro: null,
    }
  },
  methods: {
    login(nickname) {
      if (nickname !== '') {
        socket.emit('userLogin', nickname);
      }
      socket.on('userValidation', (validation) => {
        if (validation) {
          this.$router.push('/sala');
        } else {
          this.erro = "usuario existente";
        }
      });
    }
  },
}

</script>


<style scoped>

</style>