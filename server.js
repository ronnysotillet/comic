const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 5000;
const fetch = require("node-fetch");
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
};

const domain = "https://xkcd.com";
const archive = "/info.0.json";

app.get("/api", cors(corsOptions), async (_, res) => {
  try {
    const fetchOptions = {
      method: "GET",
    };
    const requestEndpoint = domain + archive;
    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
  } catch (e) {
    res.json({ error: "No Found" });
  }
});

app.get("/api/:number", cors(corsOptions), async (req, res) => {
  try {
    const fetchOptions = {
      method: "GET",
    };
    const requestEndpoint = domain + "/" + req.params.number + archive;
    const response = await fetch(requestEndpoint, fetchOptions);

    const jsonResponse = await response.json();
    res.json(jsonResponse);
  } catch (e) {
    res.json({ error: "No Found" });
  }
});

app.use("/", express.static(path.join(__dirname, "public/")));
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en puerto ${PORT} acceder a http://localhost:${PORT}`
  );
});
