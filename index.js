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

app.use(express.static(path.join(__dirname, "dist"), staticOptions));

app.get(
  [
    "/",
    "/about",
    "/hardware",
    "/software",
    "/events",
    "/guidelines",
    "/judges",
  ],
  (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "dist", "index.html"));
  }
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
