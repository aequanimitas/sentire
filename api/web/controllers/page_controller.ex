defmodule Sentire.PageController do
  use Sentire.Web, :controller

  alias Sentire.Verse

  def index(conn, _params) do
    verses = Repo.all(Verse)
    render conn, "index.html", verses: verses
  end
end
