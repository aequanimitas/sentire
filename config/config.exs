# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :sentire,
  ecto_repos: [Sentire.Repo]

# Configures the endpoint
config :sentire, Sentire.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "03N/hy6OwiZ4cpmdUBV1ep39Qhv7qzj/V9mednlpM+v2otdpvqQDoRvXtHuxQKbr",
  render_errors: [view: Sentire.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Sentire.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
