module.exports = {
  client: 'postgresql',
  connection: {
    database: 'sentire_dev',
    user:     'sentire_user',
    password: 'zoom'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations'
  }
}
