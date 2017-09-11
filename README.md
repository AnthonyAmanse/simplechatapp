# Simple Chat App using PubNub

Add your own publish and subscribe key in `public/js/pubnub.js`
```js
var anotherPubDemo = new PubNub({
    publishKey: 'YOUR_PUBLISHKEY',
    subscribeKey: 'YOUR_SUBSCRIBEKEY'
})
```


```shell
docker build -t <image-name> .
docker run -p 3000:3000 <image-name>
```

Go to `http://localhost:3000`
