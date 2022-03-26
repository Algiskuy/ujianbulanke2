var n = 9;
var $ = "";

for (x = 1; x <= n; x++) {
  for (y = 1; y <= n; y++) {
    if (x == y) {
      $ += `${x * 2 - 1}`;
    } else if (n - x + 1 == y) {
      $ += `${y * 2 - 2}`;
    } else {
      $ += "🙄";
    }
  }
  $ += "<br>";
}

document.write($);
