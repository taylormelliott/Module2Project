const { SSL_OP_CRYPTOPRO_TLSEXT_BUG } = require("constants");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  " Welcome to the Password Validator Tool! Please enter your password to validate:",

  function (input) {
    if (input.length === 10) {
      console.log("Success. That is correct!");
    } else {
      console.log("I'm sorry. That is not correct. Please try again.");
    }

    // This line closes the connection to the command line interface.
    reader.close();
  }
);
