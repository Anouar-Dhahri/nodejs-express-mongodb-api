const express = require('express');
const router = express.Router();

const { getGames, addGames, findGames, updateGame, deleteOneGame, deleteAllGames } = require('./../controllers/Game.controller');

router.get('/get', getGames);
router.post('/create', addGames);
router.get('/find/:id', findGames);
router.put('/update/:id', updateGame);
router.delete('/delete/:id', deleteOneGame);
router.delete('/delete', deleteAllGames);

module.exports = router;