import path from "path";
import express from "express";
import compression from "compression";
const app = express();
const port = 4444;
const __dirname = path.resolve();
app.use(compression());

const staticOptions = {
  maxAge: "1d",
};

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
