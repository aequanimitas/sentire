use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :sentire, Sentire.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :sentire, Sentire.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "sentire_test",
  password: "sentire_test",
  database: "sentire_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
