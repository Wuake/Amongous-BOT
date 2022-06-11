const command = require('./command')
const data = require('../data.json')
const { Guild, GuildEmoji, Intents } = require('discord.js')

module.exports = client => {

    command(client, 'startGame', async (message) =>{

        let text = ""

        try{

            await message.guild.members.fetch()//cache everyone
            //const role = 984864019821232150 //check every people with the eveyone role
            //const role = message.mentions.roles.first(); //the role mentionned
            const role = message.guild.roles.everyone //check every people with the eveyone role
            const members = role.members // array of GuildMembers
            const clefs = members.keys() //get the ids of the users
            const values = members.values()
            
            /*for (const key of values) {
                console.log(key.id, key.nickname);
            }*/

            for (let key of values) {
                //console.log(key._roles, key.id,  key.nickname);
                for (let i = 0 ; i < key._roles.length ; i++){
                    
                    if(key._roles[i] === "984864019821232150"){
                        await client.users.fetch(key.id, false).then((user) => {
                            user.send('salut');
                        });
                        console.log("saloute")
                    }
                }

            }

            for (let i = 0 ; i < data.rules.length ; i++) {
                text += ("- " + data.rules[i] + "\n" );
            }
            for (let member in members){
                
                message.member.send({
                    embeds : [{
                        title : '📋 Règles',
                        description : text
                    }]
                })
            }



        }catch (err){
            console.log(err)
        }
    })
}