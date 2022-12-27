import { ExchangeRate } from '../entities/exchange_rate'


const resolvers = {
  Query: {
    getExchangeRate: async (parent, args, context, info) => {
      return ExchangeRate.findOne(args)
    },
  },
  Mutation: {
    postExchangeRate: (parent, { exchangeRateInfo }, context, info) => {
      const exchangeRate = new ExchangeRate(exchangeRateInfo)
      return exchangeRate.save()
    },
    deleteExchangeRate: (parent, { exchangeRateInfo }, context, info) => {
      return ExchangeRate.findOneAndDelete(exchangeRateInfo)
    },
  },
}

export default resolvers
