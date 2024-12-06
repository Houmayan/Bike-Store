import express from "express";
import { studentRoutes } from "./app/module/bikes/bikes.router";
import { orderRoutes } from "./app/module/orders/orders.route";
const app = express();
// const port = 3000;
app.use(express.json());
app.use("/api", studentRoutes);
app.use("/api", orderRoutes);
app.get("/", (req, res) => {
  res.send("Hello World! 🎂");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export default app;
