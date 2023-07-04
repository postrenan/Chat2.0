<template>
  <div class="section  columns is-mobile is-half is-centered is-vcentered">
    <div class="columns is-mobile is-half">
      <div class="columns is-vcentered ">
        <input v-model="userMessage" class="input is-rounded" type="text">
        <button @click="sendMsg(userMessage)" class="button is-rounded">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstRoom',
  components: {InputBox},
  data() {
    return {
      userMessage: '',
      allMessages: [],
    }
  },
  mounted() {
    socket.on('messageForAll', (messages) => {
      this.allMessages = messages;
    });
  },
  methods: {
    sendMsg(text) {
      socket.emit('userMessage', text);
    },
  }
}
</script>

<style scoped>

</style>