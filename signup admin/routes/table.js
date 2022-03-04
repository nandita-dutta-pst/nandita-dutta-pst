const { query } = require("express");
const express = require("express");
const router = express.Router();
const db = require("../conn");

//for fetching
router.get("/", (req, res) => {
  let query = 'SELECT * FROM pst.signup WHERE Role = "user"';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data Fetched successfully!");
      res.render("table", { data: result });
    }
  });
});

/// for delete

router.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  let query = "DELETE FROM pst.signup WHERE ID=?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data deleted successfully");
      res.redirect("/table");
    }
  });
});

//For Update

router
  .get("/update/:id", (req, res) => {
    var id = req.params.id;
    var sql = "select * from pst.signup where ID=?";
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("demo", { data: result });
      }
    });
  })
  .post("/update/:id", (req, res) => {
    var id = req.params.id;
    var sql = `UPDATE pst.signup set Name="${req.body.name}", Email="${req.body.email}", Phone="${req.body.phone}",Country="${req.body.country}",Gender="${req.body.gender}",About="${req.body.about}" WHERE ID=?`;
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        //  res.render("demo",{data:result});
        res.redirect("table");
      }
    });
  });

module.exports = router;
