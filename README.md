# geofancy-node-sample

*A simple node.js App to demonstrate the use of the Geofancy NPM module for authenticating against the Geofancy oAuth v2 API*

To use it just clone the repo and head over to the [Geofancy Developer Portal](https://my.geofancy.com/developer) to create a oAuth 2 App, then copy config.example.json to config.json and open it up

```
cp config.example.json config.json && vim config.json
```

Enter your oAuth 2 App's Client ID and Client Secret, then

```
npm install
```

and run it

```
node app.js
```

Point your browser to

```
http://0.0.0.0:3000
```

That's it!

