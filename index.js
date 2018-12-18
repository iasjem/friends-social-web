let express = require("express");
let app = express();
const PORT = process.env.PORT || 3000;
let bodyParser = require("body-parser");
let engines = require('consolidate');
var hello = "hello world";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'html');
app.set("view options", { layout: false }); 
app.engine('.html', engines.handlebars);

app.use(express.static("views"));
app.use(express.static("src"));

app.get("/", (req, res) => res.render("index", hello));
app.get("/login", (req, res) => res.render("login"));

app.get("/home", (req, res) => res.render("self/home"));
app.get("/profile", (req, res) => res.render("self/profile"));
app.get("/chat", (req, res) => res.render("self/chat"));
app.get("/settings", (req, res) => res.render("self/settings"));

app.get("/user/profile/:id", (req, res) => res.render("user/profile"));
app.get("/user/search", (req, res) => res.render("user/search"));

app.get("*", (req, res) => res.render("error404"));

app.listen(PORT, () => console.log("Server has now been started!"));