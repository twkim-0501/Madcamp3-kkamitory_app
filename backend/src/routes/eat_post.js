const express = require("express");
const db = require("../../database/eat_postdb");
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
router.post("/remove", (req,res) => {
    db.remove(
        req.body._id,
        () =>{
            res.status(200).send();
        });
})
router.get("/deleteAll", (req,res) => {
    db.removeall(
        req.body._id,
        () =>{
            res.status(200).send();
        });
})
router.post("/update", (req,res) => {
    db.update(
        req.body._id,
        req.body,
        (a) =>{
            res.send(a);
            //res.sendStatus();
        }
    );
})
module.exports = router;