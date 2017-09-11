var anotherPubDemo = new PubNub({
    publishKey: 'YOUR_PUBLISHKEY',
    subscribeKey: 'YOUR_SUBSCRIBEKEY'
})
anotherPubDemo.addListener({
    message: function(message){
        messageReceived = message.message.text
        printChat(message.message.text)
    }
})

anotherPubDemo.subscribe({
    channels: ['chat-app']
});

var queueChat = []
function printChat(message) {
    queueChat.push(message)
    console.log(queueChat)
    if (queueChat.length == 21) {
        queueChat.shift()
    }
    var mostRecent = ""
    for (i = 0; i < queueChat.length; i++) {
        mostRecent += queueChat[i] + "<br>"
    }
    console.log(mostRecent)
    document.getElementById("anotherDemo").innerHTML = mostRecent
}

function publishFunction() {
    var nameInput = document.getElementById("nameInput").value
    var messageForm = document.getElementById("textInput").value
    anotherPubDemo.publish({
        message: { "text" : nameInput + ": "+ messageForm },
        channel: 'chat-app'
    });
    return false;
}
