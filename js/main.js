var commandStart = 'Linux-Pro:~ admin$ '
// Find a way to disable the ability to delete the login line stuff


// Add the block character as the text cursor

// Write the logic to verify correct commands
var terminal = document.querySelector('textarea.terminal-content');
// terminal.addEventListener('keyup', function(e) {
terminal.addEventListener('keydown', function(e) {
  var terminalContent = terminal.value;
  // console.dir(e);

  if(e.keyCode === 13) { // enter
    e.preventDefault();
    terminal.value = terminalContent + '\n' + commandStart;
  }
  if(e.keyCode === 67 && e.ctrlKey) { // ctrl+c
    // don't process input, but create new line
    // print ^C
  }
  if(e.keyCode === 8) { // backspace
    e.preventDefault();

    // Split the window on returns
    var terminalLines = terminalContent.split('\n');

    // Look at the last split
    var lastSplit = terminalLines[terminalLines.length - 1];
    if (lastSplit.length > commandStart.length) {
      terminal.value = terminalContent.substring(0, terminalContent.length - 1);
    }
  }
}, false);

// v2 Allow partial correct solutions

// Minify JS to obscure answers
