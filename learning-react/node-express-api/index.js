import express from "express";
// import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use(`/users`, usersRoutes);

app.get("/", (req, res) => {
  res.send(`Hello from Home Page`);
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
