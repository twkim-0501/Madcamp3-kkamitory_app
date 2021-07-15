const express = require("express");
const db = require("../../database/postdb");
const router = express.Router();

router.get("/", (req, res) => {
    db.getAll(
        (posts)=> {
        res.json(posts);
    })
});
router.post("/add", (req,res) => {
    db.add(
        req.body,
        () => {
            res.status(200).send();
        }
    );
})

module.exports = router;