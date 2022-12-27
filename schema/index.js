const typeDefs = `
  type Query {
    getExchangeRate(src:String!, tgt:String!): ExchangeInfo
  }
  
  type Mutation {
    postExchangeRate(exchangeRateInfo: InputUpdateExchangeInfo): ExchangeInfo
    
    deleteExchangeRate(exchangeRateInfo: InputDeleteExchangeInfo): ExchangeInfo
  }
  
  input InputUpdateExchangeInfo {
    src: String!
    tgt: String!
    rate: Float!
    date: String
  }
  
  input InputDeleteExchangeInfo {
    src: String!
    tgt: String!
    date: String!
  }
  
  type ExchangeInfo {
    src: String!
    tgt: String!
    rate: Float!
    date: String!
  }
`

export default typeDefs
