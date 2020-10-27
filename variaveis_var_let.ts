function showWithVar() {
  var text = 'vinicius';
  var text = 'vinicius 02';
  if (true) {
    var text = 'texto';
  }

  console.log(text);
}

function showWithLet() {
  let text = 'vinicius';
  text = 'vinicius 02'
  if (true) {
    let text = 'texto';
  }

  console.log(text);
}

showWithLet();