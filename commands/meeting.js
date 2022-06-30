//imports of the needed files
const { Guild, GuildEmoji } = require('discord.js')
const command = require('./command')

module.exports = client => {

    command(client, 'meeting', async (message) =>{

        await message.guild.members.fetch()//cache everyone
        const role = message.guild.roles.everyone //check every people with the eveyone role
        const members = role.members // array of GuildMembers
        //const clefs = members.keys() //get the ids of the users
        const values = members.values()

        try{

            for (let key of values) {
                //console.log(key._roles, key.id,  key.nickname);
                for (let i = 0 ; i < key._roles.length ; i++){
                    
                    if(key._roles[i] === "984864019821232150"){
                        await client.users.fetch(key.id, false).then((user) => {
                            user.send({files: ["https://m.media-amazon.com/images/M/MV5BMTkyNDQ3NzAxM15BMl5BanBnXkFtZTgwODIwMTQ0NTE@._V1_UY1200_CR84,0,630,1200_AL_.jpg"]})
                        });
                        console.log("j'ai envoyé l'image")
                    }
                }

            }

        }catch (err){

            console.log(err)
        }
        

    })
}
