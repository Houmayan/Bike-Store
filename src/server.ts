import mongoose from "mongoose";
import app from "./app";
import config from "./config";
// const port = 5000;

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
  } catch (error) {
    console.log(error);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});

server();
