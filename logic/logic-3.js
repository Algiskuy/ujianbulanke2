var n = 9;
var $ = "";

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x >= y) {
      $ += "😎";
    } else {
      $ += "🙄";
    }
  }
  $ += "<br>";
}

document.write($);
