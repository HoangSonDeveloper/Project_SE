const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const categoryRoute = require('./routes/category');
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true
// })
// const db = mongoose.connection
// db.on('error', (error) => console.log(error))
// db.once('open', () => console.log('Connected to database'))

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use('/category', categoryRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/checkout", stripeRoute);

// app.listen(process.env.PORT || 3000, () => {
//   console.log("Backend server is running!");
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started'))
