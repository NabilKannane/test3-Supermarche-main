const express = require('express')
const {getData , readInsertData , getRating , getAchats , getRevenueBrut} = require('../controllers/venteController');

const router = express.Router()

router.get('/insert', readInsertData); //pour lire et inserer les données de fichier csv

router.get('/',getData); //pour recevoir les données DB

router.get('/rating',getRating) // pour retourner le Moyenne de rating par sexe

router.get('/achats',getAchats) // pour retourner le nombre total des achats par type de client.

router.get('/revenuebrut',getRevenueBrut) // pour retourner le revenue brut par catégorie .

module.exports = router;