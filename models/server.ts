import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from '../routes/usuario'
import db from '../db/connection'

class Server {
  private app: Application
  private port: string
  private apiPaths = {
    usuarios: '/api/usuarios',
  }
  constructor() {
    this.app = express()
    this.port = process.env.PORT || '8000'

    this.dbConnection()
    this.middlewares()
    this.routes()
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log('Server running on Port ' + this.port)
    )
  }

  async dbConnection() {
    try {
      await db.authenticate()
      console.log('Database is connected')
    } catch (error) {
      console.log('Unable to connect to the database', error)
    }
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes)
  }
}

export default Server
