const models = require("../models");
const TicketModel = models.Ticket;

exports.getAll = (req, res) => {
    // return un instance de tickets
    TicketModel.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tickets."
            });
        });
};
exports.AddTicket = (req, res) => {
    console.log(req.body);
    TicketModel.create({
        contenus: req.body.contenus,
        document: req.body.document
    }).then(rep => res.send(rep))
        .catch(err => {
            //   console.log(err);
            res.status(500).send({ message: err.message });
        });
};
exports.DeleteTicket = (req, res) => {
    TicketModel.destroy(
        { where: { id: req.params.id } }
    )
        .then(result => {
            res.send({ result })
        }
        )
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}
exports.UpdateTicket = (req, res) => {
    // console.log(req.params);
    //   console.log(req.body.StatutId);
    TicketModel.update(
        {
            document: req.body.document,
            contenus: req.body.contenus
        },
        { where: { id: req.params.id } }
    )
        .then(res.send({ message: "Ticket was update successfully!" }))
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
    // exports.TacheByProjet = (req, res) => {
//   console.log("================================");
//   TacheModel.findAll({ where: { ProjetId: req.params.id_projet } }).then(data => {
//     // res.send(data);
//     let todo = [];
//     let inProgress = [];
//     let doing = [];
//     let retard = [];
//     let avancementAndNumber = [];

//     data.map(tache => {
//       if (tache.dataValues.StatutId === 1) {
//         todo.push(tache.dataValues)
//         if (tache.dataValues.debut <= new Date()) {
//           retard.push(tache.dataValues);
//         }
//       };
//       if (tache.dataValues.StatutId === 2)
//         inProgress.push(tache.dataValues);
//       if (tache.dataValues.StatutId === 3) doing.push(tache.dataValues);
//     })

//     let dataFormater = { retard, todo, inProgress, doing }
//     res.send(dataFormater);


//   })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tasks."
//       });
//     });
// };


// exports.UpdateTacheWeb = (req, res) => {
//   // console.log(req.params);
//   // console.log('ilay nandrasan', req.body.PrioriteId);
//   TacheModel.update(
//     {
//       StatutId: req.body.StatutId,
//       debut: req.body.debut,
//       fin: req.body.fin,
//       description: req.body.description,
//       output: req.body.output,
//       estAlerteur: req.body.estAlerteur,
//       PrioriteId: req.body.PrioriteId
//     },
//     { where: { id: req.body.id } }
//   )
//     .then(rep => res.send(rep))
//     .catch(err => {
//       // console.log('------------', err)
//       console.log(err)
//       // res.status(500).send({ message: err.message });
//     });
// };




