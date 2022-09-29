const faker = require("@faker-js/faker").faker
const express = require('express')
const app = express()
const port = 3000

const color = ["cinnamon", "brown", "black", "sorrel", "ginger", "grey", "calico", "colourpoint", "white"]
const gender = ["male", "female"]
const weight = ["8 lbs", "11 lbs", "15 lbs", "17 lbs", "6 lbs"]
const age = ["2 years old", "11 years old", "5 years old", "8 years old", "3 years old"]
const shelter = [{"id":"c7d2f722-83ef-4eb4-acf2-4cc2da2aa0af","nameShelter":"Elmira","address":"Buford Mills North Melynatown"},
{"id":"a9ddb7cc-bd06-4ce6-b4c8-6ff39b22b438","nameShelter":"Jerad","address":"Bartell Glens Stoltenbergburgh"},
{"id":"297fb93c-675f-41b5-9ff4-e51277c792c0","nameShelter":"Helga","address":"Maximillia Street North Rosarioworth"},
{"id":"a2d98d24-c276-4d68-b161-34ed83b36868","nameShelter":"Marguerite","address":"Cyril Meadows Cathyport"},
{"id":"2cf70c3b-34dd-4485-bc05-d14f638dff12","nameShelter":"Alexandra","address":"Quitzon Ferry East Bert"},{"id":"26b8a81a-dd81-4a90-8813-31699bdb92e0","nameShelter":"Thelma","address":"Greenfelder Isle Hillltown"},{"id":"30c75f8b-8153-46ad-8aed-c7fea89cf202","nameShelter":"Kristian","address":"Jamison Centers O'Connerland"},{"id":"2e28dbdf-e32c-4d38-9feb-d99696e23a84","nameShelter":"Baylee","address":"Gwen Cliff Indio"},{"id":"0af17138-8006-4c73-85ea-382a717c1e1d","nameShelter":"Jose","address":"Mosciski Wells Mistyville"},{"id":"6facdf8c-dba3-41a0-a437-8ac998c29319","nameShelter":"Marlon","address":"Carroll Ville Lake Aglae"},{"id":"6b789b82-7495-43e4-a7bc-9417a427cd85","nameShelter":"Jannie","address":"Parker Plain Billyfield"},{"id":"c44196e8-1df7-4d5c-9f83-71d0a4a99f93","nameShelter":"Juanita","address":"Jaida Forest Gwenburgh"},{"id":"cfbf51af-8066-4578-a069-4b33fd2954bf","nameShelter":"Adelia","address":"Mark Road East Angie"},{"id":"2a7f5c03-d8b8-4885-aa17-7bcca83bbadf","nameShelter":"Stanley","address":"Yost Ferry Steuberbury"},{"id":"257296cb-d387-48b3-8b63-8bb508d467f4","nameShelter":"Odie","address":"Gislason Spur West Carmela"},{"id":"37c3101f-de96-43e0-8f97-748cd8182ab7","nameShelter":"Robbie","address":"Cummings Burgs West Carletonfield"},{"id":"19ff6b32-a3a8-4a58-a310-592223f2e130","nameShelter":"Elyssa","address":"Claudie Walk Grand Island"},{"id":"db845cf2-ecf5-4ee3-baa1-f37a9f499076","nameShelter":"Helmer","address":"Sasha Ferry Lucindaburgh"},{"id":"e5e01902-a67b-42cc-a823-28e054b97ae0","nameShelter":"Immanuel","address":"Ramona Trace Myrtleborough"},{"id":"12079ed5-286f-49d6-8481-496b92debda9","nameShelter":"Cathryn","address":"Jaclyn Rest North Jaylan"}]

app.get('/cat', (req, res) => {

    const cats = []
    for (let i = 0; i < 20; i++) {
        cats.push({
            id: faker.datatype.uuid(),
            name: faker.name.firstName(),
            image: faker.image.cats(),
            adjective: faker.word.adjective(),
            color: color[Math.floor(Math.random() * color.length)],
            gender: gender[Math.floor(Math.random() * gender.length)],
            weight: weight[Math.floor(Math.random() * weight.length)],
            age: age[Math.floor(Math.random() * age.length)],
            shelterId: shelter[Math.floor(Math.random() * shelter.length)].id
        })
    }
    res.send(cats)
})

app.get("/shelter", (req, res) => {
    res.send(shelter.find(s => s.id === req.query.shelterId))
})

app.get("/number", (req, res) => {
    res.send({randomNumber: faker.phone.number("+32 484 ## ## ##")})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
