import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here is rooms.");
});

export default router;
