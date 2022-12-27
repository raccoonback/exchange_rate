import * as dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import mongoose from 'mongoose'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './schema'
import resolvers from './resolvers'


dotenv.config()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})


mongoose.connect(process.env.MONGO_CONNECT_URL, { useNewUrlParser: true },
  async () => {
    const { url } = await startStandaloneServer(server)
    console.log(`🚀 Server ready at ${url}`)
  })


