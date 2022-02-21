const Recipe = require('../models/RecipeModel.js');
const axios = require('axios');

// requiring in dotenv so we can use environment variables from .env file
// reminder: i listed .env in .gitignore file to avoid pushing secrets to github repo, so might have to have everyone set one up locally???
require('dotenv').config();

const recipeController = {};

recipeController.createRecipe = async (req, res, next) => {
    const { name, query } = req.body;
    try {
        const response = await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients',
            {query: `${query}`},
            {headers: {"Content-Type": "application/json", 
            // using environment variables from .env file
            "x-app-id": process.env.X_APP_ID,
            "x-app-key": process.env.X_APP_KEY}});
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

// ORIGINAL EDIT RECIPE CONTROLLER - ONLY UPDATES NAME
// recipeController.editRecipe = async (req, res, next) => {
//     // only updates name for now; if we want to update query, need to another call to API to update nutritional info
//     // At bottom of page I updated this method to account for editing query too
//     try {
//         const updatedRecipe = await Recipe.findOneAndUpdate({
//             _id: req.params.id,
//           }, {
//             name: req.body.name,
//           }, {new: true});
//         res.locals.updatedRecipe = updatedRecipe;
//         return next();
//     } catch (err) {
//         console.log(err)
//         return next({
//             log: `recipeController.editRecipe: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
//             message: { err: 'Error occurred in recipeController.editRecipe. Check server logs for more details.' },
//           })
//     }
// }

// UPDATED EDIT RECIPE CONTROLLER - EDITS NAME, QUERY, OR BOTH
recipeController.editRecipe = async (req, res, next) => {
    // destructure out name and query, if one is not defined that's fine, its value will be "undefined" and falsy
    const { query, name } = req.body;
    // user will either update just the query, just the name, or both
    // create an object to pass into the findOneAndUpdate method and we will populate it with only what is necessary based on conditional statements
    const dbUpdateObj = {};
    try {
        // if the user is editing the query it will be defined and truthy
        if (query) {
            // first we fetch request the API
            const dbResponse = await axios.post('https://trackapi.nutritionix.com/v2/natural/nutrients',
                {query: `${query}`},
                {headers: {"Content-Type": "application/json", 
                 "x-app-id": process.env.X_APP_ID,
                 "x-app-key": process.env.X_APP_KEY}});
            // then add query and data keys to dbUpdateObj and assign them the values of query and dbResponse
            dbUpdateObj.query = query;
            dbUpdateObj.data = JSON.stringify(dbResponse.data.foods);
        // if user is updating name, name will be defined and truthy
        } if (name) {
            // add name key and value to dbUpdateObj
            dbUpdateObj.name = name;
        }
        // find one by id and update exactly like we built when only updating name
        // but now we pass in dbUpdateObj which only contains necessary properties: query & data / name / or all
            const updatedRecipe = await Recipe.findOneAndUpdate({
            _id: req.params.id,
            }, dbUpdateObj, {new: true});
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





