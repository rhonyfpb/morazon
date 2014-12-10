var express = require("express");
var compression = require("compression");
var app = express();

app.set("port", process.env.PORT || 8082);

app.disable("x-powered-by");

app.use(compression());

app.use(express.static(__dirname + "/public"));

// 404 error
app.use(function(req, res) {
	res.type("text/plain");
	res.status(404);
	res.send("404 - Recurso no encontrado");
});

// 500 error
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.type("text/plain");
	res.status(500);
	res.send("500 - Error en el servidor");
});

app.listen(app.get("port"), function() {
	console.log("Aplicacion iniciada en http://127.0.0.1:" + app.get("port") + "/; presione Ctrl-C para terminar.");
});