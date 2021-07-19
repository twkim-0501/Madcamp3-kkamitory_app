const express = require("express");
const db = require("../../database/userdb");
const router = express.Router();


router.get("/", (req,res) => {
    db.getAll((item) => {res.json(item)});
});

router.get("/a", (req,res) => {
    db.getAll((item) => {res.json(item)});
});

router.get("/deleteAll", (req,res)=> {
    console.log("here!");
    db.deleteAll(
        (a) => {
            res.status(200).send(a);
        }
    );
});

router.get("/:kakaoID", (req,res) => {
    db.getUser(
        req.params.kakaoID,
        (item) => {
            res.json(item)
        }
    );
});


/*
router.get("/apple", (req,res) => {
    console.log("ggere!");
});

router.get("/deleteAll", (req,res)=> {
    console.log("here!");
    db.deleteAll(
        (a) => {
            res.status(200).send(a);
        }
    );
});*/


router.post("/login", (req,res) => {
    db.add(req.body, () => {res.status(200).send();
    });
});

module.exports = router;