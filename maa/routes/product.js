const express = require("express");
const { findById } = require("../model/model");
const productModal = require("../model/model");

const productsroute = express.Router();

productsroute.get("/", async (req, res) => {
  let data = await productModal.find();

  res.send(data);
});

productsroute.get("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let push = await productModal.find({ id });
    if (push) {
      res.send(push);
    } else {
      res.send(`Item not found on the data base`);
    }
  } catch (error) {
    res.status(400).send(`your Lokking for the id ${id}not there in dataBase`);
  }
});
productsroute.post("/", async (req, res) => {
  let data = req.body;
  try {
    await productModal.create(data);
    res.send(`product created Sucessfully`);
  } catch (error) {
    res.status(400).send(error.massage);
  }
});

productsroute.patch("/:id", async (req, res) => {
  let { id } = req.params;
  const data = req.body;

  try {
    const reqiredid = productModal.findOne({ id });

    res.send(data);
  } catch (error) {
    res.send(`id not Found`);
  }
});

productsroute.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await productModal.deleteOne({ id });
    res.send(`item Deleted Sucessfully`);
  } catch (error) {
    res.send(`Item not Found on th database`);
  }
});

module.exports = productsroute;
