const express = require("express")
const server = express()
const env = require('dotenv')
env.config()
server.use(express.json())

const PORT = process.env.PORT || 3002
server.listen(3000, () => {
    console.log("i'm listening on port", PORT)
})

server.get('/fifa', (req, res) => {
    res.send("Welcome to Fifa world cup")
})

server.get('/fifa/teams', (req, res) => {
res.send("Netherlands", "Senegal", "Qatar", "Ecuador")
})


server.post('/fifa/team', (req,res) => {
    const team = req.body.name
    teams.push(team)
    res.send("team added successfully!")
})


server.post('/fifa/teams', (req, res) => {
    let newTeams
    req.body.forEach(team => {
        newTeams.push(team)
    })
})

server.post('/fifa/teams', (req,res) => {
    const newTeams = req.body.map(b => b.name)
    teams = [... teams, ...newTeams]
    res.send('Team added successfully')
})


let teams = [{"name": "Qatar", "group": "A"}, {"name": "England", "group": "B"}, {"name": "Alaska", "group": "B"}, {"name": "Australia", "group": "B"}, {"name": "New Zealand", "group": "B"}]

server.get('/fifa/teams/group/B', (req,res) => {
   
    res.send(teams.filter(team => team.group === "B"))
})


server.get('/fifa/teams/group/A', (req,res) => {
   
    res.send(teams.filter(team => team.group === "A"))
})

