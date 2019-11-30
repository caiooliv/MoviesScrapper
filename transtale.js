'use strict';
require('dotenv/config')
const fs = require('fs')

    const projectId = `${process.env.PROJECT_ID}` // Your GCP Project Id

    const {Translate} = require('@google-cloud/translate').v2;

    const translate = new Translate({projectId});

    var rawdata = fs.readFileSync('movies.json');
    var movie = JSON.parse(rawdata);


    async function updateJson() {

        for(let i = 0; i < 99;i++){
            var gener = movie[i].genero;
            var description = movie[i].descricao
            const target = 'pt-br';
            const [generTranslation] = await translate.translate(gener, target);
            const [descriptionTranslation] = await translate.translate(description, target);
            movie[i].genero = generTranslation;
            movie[i].descricao = descriptionTranslation;

        }
        movie = JSON.stringify(movie)

        fs.writeFile("movies.json", movie, function(err, result) {
            if (err) console.log("error", err);
        });

    }
updateJson();

