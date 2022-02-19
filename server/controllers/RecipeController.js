const Recipe = require('../models/RecipeModel.js');
const axios = require('axios');

const recipeController = {};

recipeController.createRecipe = async (req, res, next) => {
    const { name, query } = req.body;
    try {
        const response = await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients',
        {query: `${query}`},
        {headers: {"Content-Type": "application/json", 
        "x-app-id": "f43d105a",
        "x-app-key": "6f1d8394c2d77eeed3d184af182d1c61"}});
        const newRecipe = await Recipe.create({
                name: name,
                query: query,
                data: JSON.stringify(response.data.foods)
            })
        console.log('Created new recipe in database successfully')
        res.locals.newRecipe = newRecipe;
        return next();
    } catch (err) {
        console.log(err)
        return next({
            log: `recipeController.createRecipe: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            message: { err: 'Error occurred in recipeController.createRecipe. Check server logs for more details.' },
          })
    }
}

recipeController.getRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find({});
        res.locals.recipes = recipes;
        return next();
    } catch (err) {
        console.log(err)
        return next({
            log: `recipeController.getRecipes: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            message: { err: 'Error occurred in recipeController.getRecipes. Check server logs for more details.' },
          })
    }
}

recipeController.editRecipe = async (req, res, next) => {
    // only updates name for now; if we want to update query, need to another call to API to update nutritional info
    try {
        const updatedRecipe = await Recipe.findOneAndUpdate({
            _id: req.params.id,
          }, {
            name: req.body.name,
          }, {new: true});
        res.locals.updatedRecipe = updatedRecipe;
        return next();
    } catch (err) {
        console.log(err)
        return next({
            log: `recipeController.editRecipe: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            message: { err: 'Error occurred in recipeController.editRecipe. Check server logs for more details.' },
          })
    }
}

recipeController.deleteRecipe = async (req, res, next) => {
    try {
        const deletedRecipe = await Recipe.findOneAndDelete({
            _id: req.params.id,
        });
        return next();
    } catch (err) {
        console.log(err)
        return next({
            log: `recipeController.deleteRecipe: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
            message: { err: 'Error occurred in recipeController.deleteRecipes. Check server logs for more details.' },
          })
    }
}

module.exports = recipeController;