process.stdout.write("hello from spinner1.js... \rheyyy\n");

setTimeout(() => {
  process.stdout.write("\r|   1");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   2");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   3");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   4");
}, 700);

setTimeout(() => {
  process.stdout.write("\r|   5");
}, 900);
