const express = require("express");
const db = require("../../database/reservedb");
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

router.get("/myreserve/:kakaoID", (req,res) => {
    db.getReserves(
        req.params.kakaoID,
        (item) => {res.send(item)}
    )
})

router.get("/deleteAll", (req,res) => {
    db.deleteAll(
        () => {
            res.status(200).send();
        }
    );
})

module.exports = router;