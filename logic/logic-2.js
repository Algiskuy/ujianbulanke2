var n = 9;
var $ = "";

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x === 1 || x === 5 || x === 9) {
      $ += "😎";
    } else if (y === 1 || y === 5 || y === 9) {
      $ += "😎";
    } else {
      $ += "🙄";
    }
  }
  $ += "<br>";
}

document.write($);
