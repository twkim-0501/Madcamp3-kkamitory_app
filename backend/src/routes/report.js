const express = require("express");
const db = require("../../database/reportdb");
const router = express.Router();


router.post("/add", (req,res) => {
    db.add(
        req.body,
        () => {
            res.status(200).send();
        }
    );
})

router.post("/deleteone", (req,res) => {
    console.log("check")
    db.removeOne(
        req.body._id,
        () => {
            res.status(200).send();
        }
    )
})

router.get("/", (req, res) => {
    db.getAll(
        (posts)=> {
        res.json(posts);
    })
});



module.exports = router;