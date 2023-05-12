(function (window) {
  var names = ["Yashpal", "Jeevan", "Jeet", "Jamshed", "Pawan", "Fareed", "Lakhan", "Puneet", "Lateek", "Jatin"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

