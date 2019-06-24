//Express is framework for Node that allows us to create a server
const express = require('express')
const app = express()
const port = 3001
const controllers = require('./controllers/messages_controllers')
//Sets up body parser so we have access to req.body in our endpoints. 
app.use(express.json())

app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', controllers.read)

app.post('/api/messages', controllers.create)

app.put('/api/messages/:id', controllers.update)

app.delete('/api/messages/:id', controllers.delete)




app.listen(port, () => {
    console.log('Server is listening on', port)
})
