<template>
  <div class="app">
    <div class="section  columns is-mobile is-half is-centered is-vcentered">
      <div class="columns is-mobile is-half is-vcentered">
        <div class="column is-vcentered box">
          <h2 class="title">Sala 1</h2>
        </div>
      </div>
    </div>
    <div class="section  columns is-mobile is-half is-vcentered" v-for="message in allMessages">
      <div class=" is-mobile is-half" >
        <div class="box">
          <p class="">{{ message }}<br></p>
        </div>
      </div>
    </div>
    <InputBox/>
  </div>
</template>

<script>
import io from 'socket.io-client';
import InputBox from "@/components/InputBox.vue";
const socket = io('127.0.0.1:3000');

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