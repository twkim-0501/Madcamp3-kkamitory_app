const express = require("express");
const db = require("../../database/userdb");
const router = express.Router();
//User json들의 배열 반환
router.get("/", (req,res) => {
    db.getAll((item) => {res.json(item)});
});
//kakaoID에 맞는 User json 하나 반환
router.get("/:kakaoID", (req,res) => {
    db.getUser(
        req.params.kakaoID,
        (item) => {
            res.json(item)
        }
    );
});

//body에 kakaoID, nickname, profile, dormitory 담아서 보내면
//중복체크하고 추가(로그인시)
router.post("/login", (req,res) => {
    db.add(req.body, () => {res.status(200).send();
    });
});
module.exports = router;