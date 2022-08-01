# cisco-starter-repo

I created a React app called Sextant through Cisco's Intro to Software Engineering Virtual Experience Program on [theforage.com](https://theforage.com).

## Author

Dar-Ci Calhoun

## Features

This app has four main components:

- **Frontend**:
  - The first section displays the IPv4 address of the user.
  - The second section displays the IPv6 address of the user.
  - The third section displays the latency of packages received from a websocket connection to the Pylon server.
- **Backend**:
  - This is a simple server that, upon a websocket connection being established with a client, will begin sending packages containing a timestamp message to this client at an interval of 100 milliseconds.

## Dependencies

You can find the modules used in creating this application by navigating to [`sextant/package.json`](./sextant/package.json) for the frontend resources and [`pylon/package.json`](./pylon/package.json) for the backend resources.

## To Get Started Using This App

- Clone this repository to your local machine.
- Navigate to the `pylon` directory and run `npm i`. Next, run `node server.js` to get the server going.
- Navigate to the `sextant` directory and run `npm i` **in a separate command line window**. Next, run `npm start`, which should automatically open a new page in your browser at the url `localhost:3000` that displays the frontend app.

## Resources

Below are some helpful documentation that aided me in completing this project.

- Inspiration for Card Wrapper Design: [Material UI](https://mui.com)
- Conditional Rendering when handling GET requests: [reactjs.org](https://reactjs.org/docs/faq-ajax.html)
- Making calls to Ipify API: [ipify.org](https://ipify.org)
- Fetching Data: [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
