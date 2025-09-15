const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.render("users/index.ejs", { users });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.redirect("/users");
    }
    res.render("users/show.ejs", { user });
  } catch (error) {
    console.log(error);
    res.redirect("/users");
  }
});

module.exports = router;
