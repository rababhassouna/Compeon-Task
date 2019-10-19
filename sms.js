function prepareMessage(messageText, messageLength = 15, prefix = 'part') {
    var iterate = true;
    if(messageText.length === 0){
        console.log('message is empty, please enter a message');
        return false;
    }
    if (messageText.length < messageLength + 1) {
        logSMS(messageText.substr(0, messageLength))
    } else {
        var counter = 1;

        while (iterate) {

            if (counter === 1) {
                counter++;
                logSMS(messageText.substr(0, messageLength));
                messageText = messageText.substr(messageLength);
                continue;
            }

            messageText = prefix + counter + ' ' + messageText;

            if (messageText.length <= messageLength) {
                logSMS(messageText);
                iterate = false;
            } else {
                logSMS(messageText.substr(0, messageLength));
                messageText = messageText.substr(messageLength);
            }

            counter++;
        }
    }
}

function logSMS(text, to = '', from = '') {
    console.log(text);
}

var string = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd';

prepareMessage(string);

