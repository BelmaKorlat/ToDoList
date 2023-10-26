import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var today = [];
var work = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/today", (req, res) => {
    res.render("today.ejs", {
        data: today,
    });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {
        data: work,
    });
});

app.get("/back", (req, res) => {
    res.render("index.ejs");
})

// POST method for adding
app.post("/", (req, res) => {
    const inputToDoId = req.body.todoId;
    const inputToDoTask = req.body.todoTask;

    today.push({
        todoId: inputToDoId,
        todoTask: inputToDoTask
    });

    res.render("today.ejs", {
        data: today,
    });
});

app.post("/submitWork", (req, res) => {
    const inputToDoId = req.body.todoId;
    const inputToDoTask = req.body.todoTask;

    work.push({
        todoId: inputToDoId,
        todoTask: inputToDoTask
    });

    res.render("work.ejs", {
        data: work,
    });
});

// POST method for delete data
app.post("/delete", (req, res) => {
    var requestedtodoId = req.body.todoId;
    var j = 0;
    today.forEach((element) => {
        if (element.todoId === requestedtodoId) {
            today.splice(j, 1);
        }
        j = j + 1;
    });
    res.redirect("/today");
});

app.post("/deleteWork", (req, res) => {
    var requestedtodoId = req.body.todoId;
    var j = 0;
    work.forEach((element) => {
        if (element.todoId === requestedtodoId) {
            work.splice(j, 1);
        }
        j = j + 1;
    });
    res.redirect("/work");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});