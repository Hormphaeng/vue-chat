<template>
  <div class="container-fluid h-50">
    <div class="row justify-content-center h-100">
      <div class="col-md-4 col-xl-3 chat">
        <div class="card mb-sm-3 mb-md-0 contacts_card">
          <div class="card-header">
            <div class="input-group">
              <input
                type="text"
                placeholder="Search..."
                name=""
                class="form-control search"
              />
              <div class="input-group-prepend">
                <span class="input-group-text search_btn"
                  ><i class="fas fa-search"></i
                ></span>
              </div>
            </div>
          </div>
          <div class="card-body contacts_body">
            <ul class="contacts">
              <li class="active">
                <div class="d-flex bd-highlight">
                  <div class="img_cont">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                      class="rounded-circle user_img"
                    />
                    <span class="online_icon"></span>
                  </div>
                  <div class="user_info">
                    <span>jassa</span>
                    <p>Kalid is online</p>
                  </div>
                </div>
              </li>
              <!-- <li>
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                <span class="online_icon offline"></span>
              </div>
              <div class="user_info">
                <span>jassa</span>
                <p>Taherah left 7 mins ago</p>
              </div>
            </div>
          </li> -->
              <!-- <li>
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                <span class="online_icon"></span>
              </div>
              <div class="user_info">
                <span>jassa Mann</span>
                <p>Sami is online</p>
              </div>
            </div>
          </li> -->
              <li>
                <div class="d-flex bd-highlight">
                  <div class="img_cont">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                      class="rounded-circle user_img"
                    />
                    <span class="online_icon offline"></span>
                  </div>
                  <div class="user_info">
                    <span>jassa Mann</span>
                    <p>Nargis left 30 mins ago</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex bd-highlight">
                  <div class="img_cont">
                    <img
                      src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                      class="rounded-circle user_img"
                    />
                    <span class="online_icon offline"></span>
                  </div>
                  <div class="user_info">
                    <span>jassa Mann 55555</span>
                    <p>Rashid left 50 mins ago</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-md-8 col-xl-6 chat">
        <div class="card">
          <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img
                  src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                  class="rounded-circle user_img"
                />
                <span class="online_icon"></span>
              </div>
              <div class="user_info">
                <span>Chat with jassa</span>
                <p>1767 Messages</p>
              </div>
              <div class="video_cam">
                <span><i class="fas fa-video"></i></span>
                <span><i class="fas fa-phone"></i></span>
              </div>
            </div>
            <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
            <div class="action_menu">
              <ul>
                <li><i class="fas fa-user-circle"></i> View profile</li>
                <li><i class="fas fa-users"></i> Add to close friends</li>
                <li><i class="fas fa-plus"></i> Add to group</li>
                <li><i class="fas fa-ban"></i> Block</li>
              </ul>
            </div>
          </div>

          <div class="card-body msg_card_body">
            <!-- <div class="d-flex justify-content-start mb-4">
              <div class="img_cont_msg">
                <img
                  src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                  class="rounded-circle user_img_msg"
                />
              </div>
              <div class="msg_cotainer">
                Hi, how are you samim ສະບາີ?
                <span class="msg_time">8:40 AM, Today</span>
              </div>
            </div>
            <div class="d-flex justify-content-end mb-4">
              <div class="msg_cotainer_send">
                Hi jassa i am good tnx how about you?
                <span class="msg_time_send">8:55 AM, Today</span>
              </div>
              <div class="img_cont_msg">
                <img
                  src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
                  class="rounded-circle user_img_msg"
                />
              </div>
            </div> -->

            <div class="chat-room">
              <div
                :class="user_id == 1 ? 'message-youself' : 'message'"
                v-for="item in channelMessage"
                :key="item.key"
              >
                <div :class="user_id == 1 ? 'message-inner' : 'message-curren'">
                  {{ item.content }}
                </div>
              </div>
            </div>
          </div>

          <!-- send message -->
          <div class="card-footer">
            <img class="file-img" v-if="imageUrl" :src="imageUrl" alt="" />
            <!-- <p v-if="fileName">{{this.fileName}}</p> -->

            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text attach_btn"
                  ><input type="file" @change="FileImage" />
                  <i class="fas fa-paperclip"></i
                ></span>
              </div>

              <textarea
                name=""
                ref="ref"
                class="form-control type_msg"
                placeholder="Type your message..."
                v-model="hp"
              ></textarea>
              <div class="input-group-append">
                <span class="input-group-text send_btn" @click="sendMesssage"
                  ><i class="fas fa-location-arrow"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "jquery/dist/jquery.min.js";
import $ from "jquery";

import pubNub from "../src/pubnub";
import domain from "./constant/domain";
import axios from "axios";
// import pubnub from "@/pubnub";

export default {
  data() {
    return {
      getMessage: null,
      hp: null,
      uuid: null,
      user_id: 1,
      isMessage: null,
      channelMessage: this.$pnGetMessage(pubNub.channelForUUID(this.uuid)),
      newMessageChannel: [],
      fileName: null,
      imageUrl: null,
      realTimeMessage: this.$pnGetMessage(pubNub.channelForUUID(this.uuid)),
    };
  },
  //
  mounted() {
    $("#action_menu_btn").click(function () {
      $(".action_menu").toggle();
    });
    this.connectChannel();
  },

  methods: {
    test() {
      alert("hii");
    },

    FileImage: function (e) {
      const file = e.target;
      const name = file.files[0].name;
      this.fileName = e.target.files[0];

      if (file.files && file.files[0]) {
        // this.imageUrl = file.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        //  this.imageUrl = URL.createObjectURL(file.files[0]);
        reader.readAsDataURL(file.files[0]);
      }
    },
    async sendMesssage() {
      // console.log("Image=>",this.fileName.name);
      let domainUrl = `${domain.url}/api/chat`;
      // console.log(domainUrl, "<=My Domain");
      let payload = {
        message: this.hp,
      };

      let dataRes = await axios.post(domainUrl, payload);
      this.uuid = dataRes.data.data.channel1;

      // console.log(dataRes.data.data.channel1);
      // console.log(this.uuid);

      // call function

      // alert(this.hp);

      this.connectChannel();

      this.hp = "";
    },

    connectChannel() {
      console.log("this UUID is " + this.uuid);
      const channel = pubNub.channelForUUID(this.uuid);
      console.log("this", channel);
      this.$pnSubscribe({
        channels: [channel],
        timetoken: pubNub.lastToken(),
      });
      pubNub.listeningAndSubScribe(this.onPaid, () => {
        console.log(1);
        this.$pnSubscribe({
          channels: [channel],
          timetoken: pubNub.lastToken(),
        });
      });
    },
    onPaid(res) {
      if (res) {
        console.log("Have event");
      } else {
        console.log("Not have event");
      }

      console.log("this on paid", res);
      this.channelMessage.push(res);
      // this.getMessage = res.content.message;
      // console.log("get MSG", this.getMessage);
      // this.channelMessage.push(this.getMessage);

      // // remove duplicates
      // this.newMessageChannel = [...new Set(this.channelMessage)];

      console.log("This old channel Message:", this.channelMessage);
      // console.log("This new message channel:", this.newMessageChannel);
    },

    async sendFileChannel() {
      // pubNub.listeningAndSubScribe(this.onPaid, () => {
      //   const result = await pubnub.sendFile({
      //     channel: "my_channel",
      //     file: file,
      //   });
      // });
      // const result = await pubNub.sendFile({
      //   channel: "channel_1",
      //   file: this.fileName,
      // });
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}

/* .chat-room {
  height: 600px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
} */

.message-inner {
  width: fit-content;
  padding: 10px 20px;
  background-color: lightgrey;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
}
.message-curren {
  width: fit-content;
  padding: 10px 20px;
  background-color: rgb(114, 209, 114);
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  color: white;
}

.message {
  width: 100%;
  padding: 10px;
}

.message-youself {
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 10px;
}

.file-img {
  width: 85px;
  height: 85px;
  padding-bottom: 10px;
}
</style>