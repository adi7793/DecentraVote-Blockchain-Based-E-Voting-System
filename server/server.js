const express = require("express");
const cors = require("cors");

const candidateRoutes = require("./routes/candidateRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/candidates", candidateRoutes);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});