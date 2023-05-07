import dotenv from 'dotenv'

dotenv.config()

const environmentConfig = {
    PORT: process.env.PORT_NUMBER,
    ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY
}

export default environmentConfig