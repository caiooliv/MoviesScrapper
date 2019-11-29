
'use strict';
require('dotenv/config')

function main(
  projectId = `${process.env.PROJECT_ID}` // Your GCP Project Id
) {
    const {Translate} = require('@google-cloud/translate').v2;

  // Instantiates a client
  const translate = new Translate({projectId});

  async function quickStart() {
    // The text to translate
    const text = 'Hello, world!';

    // The target language
    const target = 'pt-br';

    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  }
  console.log("teste")
  quickStart();
  // [END translate_quickstart]
}

main()