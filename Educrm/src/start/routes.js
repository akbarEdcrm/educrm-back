const winston = require("winston");
winston.add(new winston.transports.Console());
const cors = require("cors");
const lids = require('../api/lid').router;

module.exports = function (app) {
    app.use(function (err, req, res, next) {
        winston.error(err.message, err);
        res.status(500).send("Serverda kutilmagan xato ro'y berdi");
    });
    app.use(cors());
    app.use("/lids", lids);
}