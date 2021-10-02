const Game = require('./../models/Game.model');

const getGames = async(req, res, next) => {
    try {
        const games = await Game.find();
        res.status(200).send(games);
    } catch (error) {
        res.status(500).send(error);
    }
};

const addGames = async(req, res, next) => {
    try {
        const game = new Game ({
            title : req.body.title,
            genre : req.body.genre,
            multiplayer : req.body.multiplayer,
            developedBy : req.body.developedBy,
            publisher  : req.body.publisher,
            price : req.body.price,
            releaseDate : req.body.releaseDate
        })
        await game.save();
        res.status(200).send("Game saved successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

const findGames = async(req, res, next) => {
    try {
        const id = req.params.id;
        const game = await Game.findById({_id: id});
        res.status(200).send(game);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateGame = async(req, res, next) => {
    try {
        const id = req.params.id;
        const game = {
            title : req.body.title,
            genre : req.body.genre,
            multiplayer : req.body.multiplayer,
            developedBy : req.body.developedBy,
            publisher : req.body.publisher,
            price : req.body.price,
            releaseDate : req.body.releaseDate
        }
        await Game.findByIdAndUpdate(id, game)
        res.status(200).send("Game with the id: "+id+ "is updated successfully")
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteOneGame = async(req, res, next) => {
    try {
        const id = req.params.id;
        await Game.findByIdAndDelete({_id: id});
        res.status(200).send("Game with the id: "+id+ "is deleted successfully")
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteAllGames = async(req, res, next) => {
    try {
        await Game.deleteMany();
        res.status(200).send("all Games deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getGames, 
    addGames,
    findGames,
    updateGame,
    deleteOneGame,
    deleteAllGames
}