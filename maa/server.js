const express = require("express");
const databaseconnect = require("./model/database");
const productsroute = require("./routes/product");

const app = express();
app.use(express.json());
app.use("/product", productsroute);
let PORT = 8000;

app.listen(PORT, () => {
  databaseconnect();
  console.log(`server is running on on port http://localhost:8000`);
});

app.get("/", (req, res) => {
   res.send(`Hallo welcome to mango+Express`)
});
