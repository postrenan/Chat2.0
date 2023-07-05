<template>
  <div class="app">
    <div class="section columns is-mobile is-half is-centered is-vcentered">
      <div class="columns is-mobile is-half is-vcentered">
        <div class="column is-vcentered box">
          <h2 class="title">Olá {{name}} escolha a sua sala</h2>
        </div>
      </div>
    </div>
    <div class="section">
      <div class=" has-text-centered ">
        <div class=" columns is-multiline is-centered">
          <article @click="redirectToRoom" class="column is-one-third box mosaicService">
            <i class=""></i>
            <p class="title">Sala 1</p>
            <p class="subtitle">Participantes = </p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
const socket = io('127.0.0.1:3000');

export default {
  name: 'RoomSelect',
  data() {
    return {
      name:'',
    }
  },

  methods: {
    redirectToRoom() {
      this.$router.push('/sala1');
    }
  }
}
</script>

<style scoped>

</style>