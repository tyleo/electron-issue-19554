const fs = require("fs");
// Replace this path to test on your local machine.
const path = "C:\\users\\tyleo\\Desktop";
try {
  fs.stat(path, () => console.log("fs.stat try"));
} catch {
  console.log("fs.stat catch");
}
try {
  fs.promises
    .stat(path)
    .then(() => console.log("fs.promises .then"))
    .catch(() => console.log("fs.promises .catch"))
    .finally(() => console.log("fs.promises .finally"));
} catch {
  console.log("fs.promises catch");
}
