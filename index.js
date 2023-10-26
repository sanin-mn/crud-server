// 1. import json server library
const jsonServer = require('json-server')

// 2. create our own server to run json file
const mpServer = jsonServer.create()

// 3. generate a middleware to use in json server
const middleware = jsonServer.defaults()

// 4. set up path for db.json
const router = jsonServer.router("db.json")

// 5. set up port for server
const port = 4000 || process.env.PORT

// 6. use middleware, router, to server
mpServer.use(middleware)
mpServer.use(router)

// 7. server listen or run to request
mpServer.listen(port,()=>{
    console.log("Media Player Server Started at Port : "+port);
})