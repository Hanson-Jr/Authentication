const http = require ("http")
const fs = require ("fs")
const path = require ("path")
const {authenticateUser} = require ("./password")

const HOSTNAME = "localhost"
const PORT = 7510

const requestHandler = function (req, res){
  res.setHeader ("Content-Type", "Application/json");
  if(req.url === "/books" && req.method === "GET"){
    authenticateUser(req, res)
    .then(()=>{
      res.writeHead(200)
      res.write("Successfully Login")
      res.end()
      console.log("User login  ")
      // getAllBooks (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
  }
  else if(req.url === "/books" && req.method === "POST"){
    authenticateUser(req, res)
    .then(()=>{
      res.writeHead(201)
      res.write("Successfully Create")
      res.end()
      console.log("User login  ")
      // getAllBooks (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })

  }
  else if(req.url === "/books" && req.method === "PUT") {
    authenticateUser(req, res)
    .then(()=>{
            res.end()
      console.log("User login  ")
      // getAllBooks (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
      
  }
  else if(req.url === "/books" && req.method === "PATCH") {
    authenticateUser(req, res)
    .then(()=>{
            res.end()
      console.log("User login  ")
      // getAllBooks (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
      
  }
  else if(req.url === "/books" && req.method === "DELETE") {
    authenticateUser(req, res)
    .then(()=>{
            res.end()
      console.log("User login  ")
      // getAllBooks (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
  }
  if(req.url === "/authors" && req.method === "GET"){
    authenticateUser(req, res)
    .then(()=>{
      res.writeHead(200)
      res.write("Successfully Login")
      res.end()
      console.log("User login  ")
      // getAllauthors (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
  }
  else if(req.url === "/authors" && req.method === "POST"){
    authenticateUser(req, res)
    .then(()=>{
      res.writeHead(201)
      res.write("Successfully Create")
      res.end()
      console.log("User login  ")
      // getAllauthors (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })

  }
  else if(req.url === "/authors" && req.method === "PUT") {
    authenticateUser(req, res)
    .then(()=>{
            res.end()
      console.log("User login  ")
      // getAllauthors (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
      
  }
  else if(req.url === "/authors" && req.method === "PATCH") {
    authenticateUser(req, res)
    .then(()=>{
            res.end()
      console.log("User login  ")
      // getAllauthors (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
      
  }
  else if(req.url === "/authors" && req.method === "DELETE") {
    authenticateUser(req, res)
    .then(()=>{
      res.writeHead(204)
            res.end()
      console.log("User deleted  ")
      // getAllauthors (req, res);
    })
    .catch((error)=>{
      res.writeHead(400)
      res.end(JSON.stringify({
        message: error
      }))
      console.log("Wrong Login")
    })
  }
     
}    

  
 





const server = http.createServer (requestHandler)

server.listen(PORT,()=>{
  console.log(`Server is currently http://${HOSTNAME}:${PORT}`)
})