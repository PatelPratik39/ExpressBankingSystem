const express = require("express");
const bodyParser = require("body-parser");
const dotEnv = require("dotenv");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.use((req, res) => {
  try {
    console.log("Server is up and Running");
    res.status(200).json({message: "Welcome to the Express-Bank-App using LinkedList and Binary Tree Structure"});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Something went wrong !!", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// const app = express();
// const port = process.env.PORT || 3000;

// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
