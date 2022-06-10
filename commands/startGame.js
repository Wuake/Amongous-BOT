const command = require('./command')
const data = require('../data.json')

module.exports = client => {

    command(client, 'startGame', async (message) =>{

        let text = ""

        try{
            for (let i = 0; i < data.rules.length; i++) {
                //message embed needed
               text += ("- " + data.rules[i] + "\n" );
            }

            message.author.send({
                embeds : [{
                    title : '📋 Règles',
                    description : text
                }]
            })


        }catch (err){
            console.log(err)
        }
    })
}