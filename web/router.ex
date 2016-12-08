defmodule Sentire.Router do
  use Sentire.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Sentire do
    pipe_through :api
    
    resources "/quotes", QuoteController, except: [:new, :edit]
  end
end
