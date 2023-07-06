<template>
  <div class="app">
    <div v-if="openChat !== true" class="section columns is-mobile is-half is-centered is-vcentered">
      <div class="columns is-mobile is-half is-vcentered">
        <div class="column is-vcentered box">
          <h2 class="title">Digite um apelido</h2>
          <input class="input is-rounded" v-model="nickname" type="text"/>
          <button class="button is-rounded" @click="login(nickname)">Entrar</button>
          <p class="subtitle" v-if="erro !== null">{{ erro }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <RoomsComponent/>
    </div>

  </div>
</template>

<script>
import io from "socket.io-client";
const socket = io('127.0.0.1:3000');
import RoomsComponent from "@/components/RoomsComponent.vue";

export default {
  name: 'Login',
  components: {RoomsComponent},
  data() {
    return {
      nickname: '',
      erro: null,
      openChat: false
    }
  },
  created() {
    this.openChat = false;
  },
  methods: {
    login(nickname) {
      if (nickname !== '') {
        socket.emit('userLogin', nickname);
      }
      socket.on('userValidation', (validation) => {
        if (validation) {
          document.cookie = `${nickname}`
          this.openChat = true;
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