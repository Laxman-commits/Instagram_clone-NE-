const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/instagram/:username", (req, res) => {
  let { username } = req.params;
  let instaData = require("./data.json");
  if (instaData.companies[username]) {
    let data = instaData.companies[username];
    res.render("instagram", { data });
  } else if (instaData.players[username]) {
    let data = instaData.players[username];
    res.render("instagram", { data });
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
