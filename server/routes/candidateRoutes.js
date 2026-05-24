const express = require("express");

const router = express.Router();

const candidates = [
  {
    id: 1,
    name: "Candidate 1",
    party: "Blockchain Party",
  },
  {
    id: 2,
    name: "Candidate 2",
    party: "Decentralized Alliance",
  },
];

router.get("/", (req, res) => {
  res.json(candidates);
});

module.exports = router;