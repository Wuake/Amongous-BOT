const command = require('./command')
const data = require('../data.json')
const { Guild, GuildEmoji, Intents } = require('discord.js')

module.exports = client => {

    command(client, 'vote', async (message) => {

        //take the ppl
        const member = message.mentions.members.first()
        const role = message.guild.roles.everyone //check every people with the eveyone role
        const members = role.members // array of GuildMembers
        const values = members.values()// values of a person
        const json = '../players.json'
        const fs = require('fs')
        const AMONGOUS_ROLE_ID = '984864019821232150'
        let content = JSON.parse(fs.readFileSync('./players.json', 'utf8'));
        var count = 1

        //to get the size of the number of person on json file
        for (let key of values) {
            //console.log(key._roles, key.id,  key.nickname);
            for (let i = 0 ; i < key._roles.length ; i++){
                
                //if the person has the role
                if(key._roles[i] === AMONGOUS_ROLE_ID){

                    count++                  
                }
            }
            
        }

        console.log("Vote contre (id) => " + member)


        //going through all the ppl's id
        function vote(){

            for (let i = 0 ; i < count ; i++){        
                console.log(content.players[i].id)
    
                if (member == content.players[i].id){
    
                    console.log("à voté")
                    content.players[i].vote_against_him_her += 1
                    fs.writeFileSync('./players.json', JSON.stringify(content));
                }
                
            }
            
        }

        vote()//tu sers a rien toi


        
    })
}