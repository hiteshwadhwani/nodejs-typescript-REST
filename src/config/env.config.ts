import dotenv from 'dotenv'

dotenv.config()

const environmentConfig = {
    PORT: process.env.PORT_NUMBER
}

export default environmentConfig