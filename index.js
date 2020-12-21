const jsonfile = require('jsonfile')
const file = process.cwd()+'/data.json'
const obj = {
     name: 'JP',
     age:12,
     sex:'1'
     }
 
jsonfile.writeFile(file, obj, function (err) {
  if (err) console.error(err)
})