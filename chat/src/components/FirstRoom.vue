<template>
  <div class="app ">
    <div class="columns">
      <div class="column is-2 usersColumn">
        <div class=" section columns is-mobile is-half is-vcentered userWelcome">
          <div class="column has-text-centered has-text-light ">
            <h2 class="box">Olá {{ name }}</h2>
          </div>
        </div>
        <div class="onlineUsers">
          <div class=" section columns is-mobile is-half is-vcentered onlineText">
            <div class="column has-text-centered has-text-light">
              <h2>Online</h2>
            </div>
          </div>
          <div class="section is-mobile is-half is-vcentered usersOnline">
            <div class=" is-mobile is-half has-text-centered">
              <div class="userOnline">
                <p class="">user 1</p>
              </div>
              <div class="userOnline">
                <p class="">user 1</p>
              </div>
              <div class="userOnline">
                <p class="">user 1</p>
              </div>
            </div>
          </div>
        </div>
        <div class="avalibleRooms">
          <div class=" section columns is-mobile is-half is-vcentered roomText">
            <div class="column has-text-centered has-text-light ">
              <h2>Salas</h2>
            </div>
          </div>
          <div class="section is-mobile is-half is-vcentered usersOnline">
            <div class=" is-mobile is-half has-text-centered">
              <div class="userOnline">
                <p class="">Sala 1</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="column is-10 chatColum">
        <div class=" section columns is-mobile is-half is-vcentered">
          <div class="column has-text-centered box ">
            <h2>Sala1</h2>
          </div>
        </div>

        <div class=" section columns is-mobile is-half is-vcentered">
          <div class=" is-mobile is-half messagesSection">
            <div class="box singleMessage" v-for="message in allMessages">
              <p class="">{{ message }}<br></p>
            </div>
          </div>
        </div>
        <div class=" section columns is-mobile  is-half is-vcentered">
          <div class=" is-mobile is-half has-text-left messagesSection">
            <div class="box singleMessage" v-for="message in allMessages">
              <p class="">{{ message }}<br></p>
            </div>
          </div>
        </div>

        <div class="columns is-mobile is-centered is-vcentered footer-chat">
          <div class="columns is-mobile is-half ">
            <div class="columns is-vcentered ">
              <input v-model="userMessage" class="input is-rounded write-message" type="text">
              <button @click="sendMsg(userMessage)" class="button is-rounded">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

const socket = io('127.0.0.1:3000');

export default {
  name: 'FirstRoom',
  data() {
    return {
      userMessage: '',
      userSendMessage: [],
      allMessages: [],
      name: '',
    }
  },
  mounted() {
    socket.on('messageForAll', (messages) => {
      this.allMessages = messages;
    });
  },
  created() {
    socket.emit('getUserName');
    socket.on('reciveUserName', (userName) => {
      this.name = userName;
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
.usersColumn {
  background-color: hsl(250.2, 52.083333333333336%, -29.647058823529413%);
  height: 100vh;
}

.userWelcome {
  padding: 24px 48px 0 48px;
}

.onlineText {
  padding: 0 48px 0 48px;
  border-top: white solid 2px ;
  border-bottom: white solid 2px ;
}

.usersOnline {
  padding: 10px;
  margin-bottom: 10px;
}

.userOnline {
  padding: 10px;
  border: white solid 2px;
  border-radius: 20px;
}

.roomText {
  padding: 0 48px 0 48px;
  border-top: white solid 2px ;
  border-bottom: white solid 2px ;
}

.chatColum {
  background-image: url('../assets/download.png');
  height: 100vh;
}

.messagesSection {
  max-height: 600px;
  max-width: 1000px;
  overflow: scroll;
  padding-right: 900px;
}

.singleMessage {
  padding-right: 200px;
  overflow: clip;
  white-space: nowrap;
}

.footer-chat {
  margin-bottom: 20px;
  width: calc(65% - 66px);
  height: 70px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  background-color: transparent;
  border-top: 2px solid #EEE;
}
</style>