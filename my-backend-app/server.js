const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

const port = '8081';

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    pasword: "",
    database: "crud"
});

// get mathod
app.get("/", (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

// post method
app.post("/create", (req, res) => {
    console.log('req.body', req.body);
    const sql = "INSERT INTO students (`Name`, `Email`) VALUES (?, ?)";
    const values = [req.body.name, req.body.email];
    db.query(sql, values, (err, data) => {
       if(err) {
           console.error('Error inserting data:', err);
           return res.json("error");
       }
       return res.json(data);
    });
});

// put method
app.put("/update/:id", (req, res) => {
    console.log('req.body', req.body);
    const sql = "UPDATE students SET Name = ?, Email = ? WHERE ID = ?";
    const values = [req.body.name, req.body.email, req.params.id];
    db.query(sql, values, (err, data) => {
       if(err) {
           console.error('Error updating data:', err);
           return res.json("error");
       }
       return res.json(data);
    });
});

// delete method
app.delete("/student/:id", (req, res) => {
    console.log('req.params.i', req.params.i);
    const sql = "DELETE FROM students WHERE ID = ?";
    const values = [req.params.id];
    db.query(sql, values, (err, data) => {
       if(err) {
           console.error('Error updating data:', err);
           return res.json("error");
       }
       return res.json(data);
    });
});

app.listen(port, () => {
    console.log('listning');
});