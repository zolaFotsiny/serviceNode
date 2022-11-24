const controlerTicket = require("../controler/Ticket.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //getAll
    app.get("/api/tickets", controlerTicket.getAll);
    // AddTicket
    app.post("/api/ticket/add", controlerTicket.AddTicket);
    // DeleteTicket
    app.delete("/api/ticket/delete/:id", controlerTicket.DeleteTicket);
    // UpdateTicket
    app.put("/api/ticket/update/:id", controlerTicket.UpdateTicket);

}