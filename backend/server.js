import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/products", productRoutes);

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });
// app.get("/messages", (req, res) => {
//   res.send("Hello");
// });

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_Env} mode on http://localhost:${PORT}`
      .yellow.bold
  );
});
