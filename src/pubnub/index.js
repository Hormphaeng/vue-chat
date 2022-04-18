import Vue from 'vue';
import PubNubVue from 'pubnub-vue';

const debug = true;
export default {
    instance() {
        return PubNubVue.instance();
    },

    register: () => {
        Vue.use(PubNubVue, {
            publichKey: 'pub-c-b5a21f20-962c-4dea-b1f0-6ffc3ee455bf',
            subscribeKey: 'sub-c-0b024b80-acb4-11ec-9ae2-de198fffb17e',
            secretKey: 'sec-c-OTI3YjJiM2YtNmZhNC00NDRmLThmMjQtZjY2ODJmYjUzMTRi',
            ssl: true,
        });
    },

    channelForUUID(uuid) {
        return uuid;
    },

    lastToken() {
        return new Date().getTime() - 30 * 60 * 1000 + "0000";
    },

    lastTokenForMinute(minutes = 1) {
        return new Date().getTime() - minutes * 60 * 1000 + "0000";
    },

    listeningAndSubScribe(messageCallback, subscribeCallback) {
        const instance = PubNubVue.getInstance();
        instance.removeAllListeners();
        instance.addListener({
            message: function (event) {
                messageCallback(event.message);

            },
            status: function (event) {
                if (debug) console.log("PubNub status changed", event);
                try {
                    if (event.category === "PNNetworkUpCategory") {
                        if (typeof subscribeCallback == 'function') {
                            subscribeCallback();
                        }
                    }
                } catch (error) {
                    console.log("This error status subscribeCallback", error);
                }

            },

            // fetMessge: function (event) {
            //     instance.history(
            //         {
            //             channel: 'channel1'
            //         },
            //         function (status, response) {
            //             // log status & response to browser console
            //             console.log("STATUS  : " + status);
            //             console.log("RESPONSE: " + response);
            //         }
            //     )
            // }
        });

        if (typeof subscribeCallback == 'function') {
            subscribeCallback();
        }

        // instance.addEventListener('change', async () => {
        //     const file = input.files[0];

        //     const result = await pubnub.sendFile({
        //       channel: 'my_channel',
        //       file: file,
        //     });
        //   });
    }


}