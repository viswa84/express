const { default: mongoose} = require("mongoose")

////mongodb+srv://viswa:<password>@cluster0.mtexpu9.mongodb.net/?retryWrites=true&w=majority;
// mongodb+srv://viswa:<password>@cluster0.1dxt0wv.mongodb.net/?retryWrites=true&w=majority
  async function databaseconnect(params) {
    await mongoose.connect(
      "mongodb+srv://viswa:viswa@cluster0.1dxt0wv.mongodb.net/"
    );
    console.log("mangoDb is connected");
  }

  module.exports = databaseconnect