import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here is users.");
});

export default router;
