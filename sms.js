/* SMS can only be a maximum of 160 characters.
   If the user wants to send a message bigger than that, we need to break it up.
   We want a multi-part message to have this added to each message:
   " - Part 1 of 2"
*/

// You need to fix this method, currently it will crash with > 160 char messages.
function sendSmsMessage(text, to,form) {
  var messageLength = 160;
  var prefix = '-part ';

  if (text.length === 0) {
    console.log('message is empty, please enter a message');
    return false;
  }
  if (text.length < messageLength + 1) {
    deliverMessageViaCarrier(text.substr(0, messageLength))
  } else {
    var maximumNoOfMsgs = getMaximumNumberOfMessages(text, messageLength, prefix);
    var i = 1;
    while (i <= maximumNoOfMsgs) {
      text = prefix + i + ' of ' + maximumNoOfMsgs + ' ' + text;
      if (text.length <= messageLength) {
        deliverMessageViaCarrier(text);
        iterate = false;
      } else {
        deliverMessageViaCarrier(text.substr(0, messageLength));
        text = text.substr(messageLength);
      }
      i++;
    }
  }
}
// This method actually sends the message via an already existing SMS carrier
// This method works, you don't change it,
function deliverMessageViaCarrier (text, to, from) {
/**
as i don't have smsCarrier variable i got error so i commit it to can show my idea
**/
  console.log(text);
 // SmsCarrier.deliverMessage(text, to, from)
}
//this function to get total number of messages 
function getMaximumNumberOfMessages(messageText, messageLength, prefix) {
  var counter = 1;
  var iterate = true;
  var totalLetters = 0;
  while (iterate) {
    messageText = prefix + counter + ' of 1 ' + messageText;
    if (messageText.length <= messageLength) {
      iterate = false;
      totalLetters += messageText.length;
      totalLetters += (counter.toString().length * counter) - counter;
    } else {
      totalLetters += messageLength;
      messageText = messageText.substr(messageLength);
    }

    counter++;
  }
  var maximumNoOfMsgs = Math.ceil(totalLetters / messageLength);
  return maximumNoOfMsgs;
}
var string='All trademark rights, copyright, database rights and other intellectual property rights to the contents of the Lufthansa website, (as well as the organisation and layout of the website), together with the underlying software code, rest either with Deutsche Lufthansa AG or with its licensors. You may not, either in whole or in part, copy, modify, distribute or use or reproduce in other form contents of the Lufthansa website, or the underlying software code, without the prior written consent of Deutsche Lufthansa AG.';
sendSmsMessage(string);
