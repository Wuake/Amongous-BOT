//imports of the needed files
const {Client, Intents} = require('discord.js')
const config = require('./config.json')
const {command} = require('./commands/command.js')
const getPeople = require('./commands/get-people')
const giveRole = require('./commands/give-role.js')
const startGame = require('./commands/startGame')
const removeRole = require('./commands/ungive-role')
const meeting = require('./commands/meeting.js')
const vote = require('./commands/vote.js')
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
    removeRole(client)
    startGame(client)
    meeting(client)
    vote(client)
})

client.login(config.token)