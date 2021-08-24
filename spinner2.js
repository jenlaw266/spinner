const spinnerArray = ["\r|  ", "\r/   2", "\r-   3", "\r\\   4", "\r|   5"];
let i = 0;

const spinner = setInterval(
  (arr) => {
    process.stdout.write(arr[i]);
    i++;
    if (i === spinnerArray.length) clearInterval(spinner);
  },
  200,
  spinnerArray
);

spinner;
