import app from "./app"
import environmentConfig  from './config/env.config'


const start =  async () => {
  try{
    app?.listen(environmentConfig.PORT, () => {
      console.log(`Listening: http://localhost:${environmentConfig.PORT}`)
    })
  }
  catch(error){
    console.log(error)
  }
}

//establish connection
start()