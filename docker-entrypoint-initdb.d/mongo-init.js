db = db.getSiblingDB('exchange_rate')
db.createUser(
  {
    user: 'user',
    pwd: '1234',
    roles: [{ role: 'dbOwner', db: 'exchange_rate' }],
  },
)
