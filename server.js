const express = require('express')
const app = express()
const PORT =  8000
const cors = require('cors')


app.use(cors())

let ghibliFilms = {
    'totoro' : { 
    'birthName': 'Lorem ipsum dolor sit',
    'birthLocation': 'Lorem',
    'age': 22 
    },
    'princess mononoke' : { 
        'birthName': 'Lorem ipsum dolor sit',
        'birthLocation': 'Lorem',
        'age': 22 
        },
        'spirited away' : { 
            'birthName': 'Lorem ipsum dolor sit',
            'birthLocation': 'Lorem',
            'age': 22 
            },
            'unknown' : { 
                'birthName':  'unknown' ,
                'birthLocation':  'unknown' ,
                'age': 0
                }

}




app.get('/', (request, response) => {
     response.sendFile(__dirname + '/index.html')
})




app.get('/api/:name', (request, response) => {
    const ghibliTitle = request.params.name.toLowerCase()
    
    if( ghibliFilms[ghibliTitle] ){
        response.json(ghibliFilms [ghibliTitle])
      } else {
        response.json(ghibliFilms['unknown'])
      }
  })


app.listen(PORT, () => {
console.log(`Your server is running on port ${PORT}`)
})