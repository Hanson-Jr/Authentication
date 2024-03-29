const fs = require ("fs")
const path = require ("path")
const Dbpath = path.join(__dirname, "Hansondb", "users.json")
console.log(Dbpath)
function getAllUsers(){
  return new Promise ((resolve, reject)=>{
    fs.readFile(Dbpath, "utf8", (err, users)=>{
      if(err){
        reject(err)
      }
      resolve(JSON.parse(users))
    })
  })
}

function authenticateUser (req, res){
  return new Promise ((resolve, reject)=>{
    const body = []
    req.on ("data", (chunk)=>{
      body.push(chunk)
        })
      req.on ("end", async()=>{
        const ParsedBody = Buffer.concat(body).toString()
        if(!ParsedBody){
          reject("No username or password provided")
        }
       const LoginDetails = JSON.parse(ParsedBody)
       const user = await getAllUsers ()
       const Userfound = user.find((user)=>{
        return user.username === LoginDetails.username && user.password === LoginDetails.password
       })

       if(!Userfound){
        reject("User not found! please Signup!")
       }
       resolve()

       
       
       
      })
  })
}


module.exports = {
  authenticateUser
}