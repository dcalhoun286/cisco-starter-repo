import React, { useEffect, useState } from 'react';

import WebSocket from 'websocket';

const W3CWebsocket = WebSocket.w3cwebsocket;

const client = new W3CWebsocket('ws://localhost:55455');

const Pylon = (props) => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    client.onerror = function () {
      console.log('websocket connection error');
    };

    client.onopen = function () {
      console.log('websocket client connected');
    };

    client.onmessage = function (message) {
      console.log('message: ', message);
      const currentTime = new Date().getTime();
      const packageTimestamp = decodeURIComponent(parseInt(message.data));

      const latencyTime = currentTime - packageTimestamp;

      setLatency(latencyTime);
    };
  }, [latency]);

  return (
    <React.Fragment>
      <p>{latency} ms</p>
    </React.Fragment>
  );
};

export default Pylon;
