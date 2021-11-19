const mongoose = require('mongoose')
main().catch( err => console.log(err))
async function main(){
  await mongoose.connect('mongodb://localhost:27017/contact_list_db')
}
const db = mongoose.connection
db.once('open',function(){
  console.log("Database Connected Successfully")
})