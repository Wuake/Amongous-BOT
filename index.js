//imports of the needed files
const {Client, Intents} = require('discord.js')
const config = require('./config.json')
const {command} = require('./commands/command.js')
const getPeople = require('./commands/get-people')
const give = require('./commands/give-role.js')
const ungive = require('./commands/ungive-role.js')
const giveRole = require('./commands/give-role.js')
const startGame = require('./commands/startGame')
//Discord Client (bot)
//adding intents since discordjs v13
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
})

//call-back function
client.on('ready', () => {
    console.log('The BOT is ready')

    const clientDetails = {
        users: client.users.cache.size,
        channels: client.channels.cache.size,
    }
    //to call a function : file.function(parameters)
    getPeople(client)
    giveRole(client)
    startGame(client)
})

client.login(config.token)