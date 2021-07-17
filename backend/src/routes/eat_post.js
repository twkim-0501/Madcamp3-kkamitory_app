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
    console.log("db add");
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
        (msg) =>{
            if(msg == 200){
                res.status(200).send();
            }
            else{
                res.status(400).send();
            }
        }
    );
})
router.post("/update", (req,res) => {
    db.update(
        req.body._id,
        req.body,
        () =>{
            res.status(200).send();
        }
    );
})
module.exports = router;