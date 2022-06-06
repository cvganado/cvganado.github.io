var hook = true;

window.onbeforeunload = function() {
  if (hook) {

    return "Did you save your stuff?"
  }
}

function unhook() {
  hook=false;
}