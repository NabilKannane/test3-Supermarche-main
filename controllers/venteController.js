const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const VENTE = require("../models/VenteModel");
require("dotenv").config();

async function readInsertData(req, res) {
  fs.createReadStream(process.env.pathFileCSV) //fonction qui permet de lire un fichier csv
    .pipe(csv())  // convertir les données en format csv
    .on("data", (row) => {
      console.log(row);
      //insertion des données sur la base de donnée ligne par ligne
      new VENTE({
        InvoiceID: row["InvoiceID"],
        Branch: row["Branch"],
        City: row["City"],
        CustomerType: row["Customer type"],
        Gender: row["Gender"],
        ProductLine: row["Product line"],
        UnitPrice: row["Unit price"],
        Quantity: row["Quantity"],
        Tax: row["Tax 5%"],
        Total: row["Total"],
        date: row["Date"],
        time: row["Time"],
        Payment: row["Payment"],
        cogs: row["cogs"],
        grossMarginPercentage: row["gross margin percentage"],
        grossqIncome: row["gross income"],
        Rating: row["Rating"],
      }).save((err) => {
        console.error(err);
      });
    })
    .on("end", () => {
      console.log("CSV file succefully processed");
    });
    res.end()
}

//fct qui récupérer des données BD 
async function getData(req, res) {
  const data = await VENTE.find(); 
  console.log(data);
  res.send(data);
}

//fct qui renvoie le moyenne de rating par sexe
function getRating(req, res) {
  //regrouper les données par genre et calculer la note moyenne pour chaque groupe. 
  VENTE.aggregate([
    {
      $group: {
        _id: "$Gender",
        avgrating: { $avg: "$Rating" },
      },
    },
  ])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

//fct qui envoie le nombre total des achats par type de client
function getAchats(req, res) {
//regrouper les données par type de client et genre, et compter le nombre dans chaque groupe.
  VENTE.aggregate([
    {
      $group: {
        _id: { customerType: "$CustomerType" , gender: "$Gender"},
        count : {$sum : 1}
      },
    },
  ])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

//fct qui envoie le Revenue brut par categorie
function getRevenueBrut(req, res){
  //regrouper les données par ProductLine et compter le nombre dans chaque groupe
  VENTE.aggregate([
    {
      $group: {
        _id: {ProductLine : "$ProductLine"},
        count : {$sum : 1}
      },
    },
  ]).then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = { readInsertData, getData, getRating, getAchats ,getRevenueBrut};