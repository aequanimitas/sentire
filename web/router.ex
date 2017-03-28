defmodule Sentire.Router do
  use Sentire.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Sentire do
    pipe_through :api

    resources "/verses", VerseController, except: [:new, :edit]
  end
end
