var quotes = [
  "We grow fearless when we do the things we fear.",

  "And, when you want something, all the universe conspires in helping you to achieve it.",

  "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us..",

  "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.",

  "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
];
function randomQuotes() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("print").innerHTML = quotes[randomNumber];
  console.log();
}

AOS.init();
