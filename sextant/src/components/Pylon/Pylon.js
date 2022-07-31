import { useEffect } from 'react';

import WebSocket from 'websocket';

const W3CWebsocket = WebSocket.w3cwebsocket;

const Pylon = (props) => {
  useEffect(() => {
    const client = new W3CWebsocket('ws://localhost:55455');

    client.onerror = function () {
      console.log('websocket connection error');
    };

    client.onopen = function () {
      console.log('websocket client connected');
    };

    client.onmessage = function (message) {
      console.log('Timestamp of message from server: ', message.timeStamp);
    };
  }, []);
};

export default Pylon;
