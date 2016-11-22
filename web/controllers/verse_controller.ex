defmodule Sentire.VerseController do
  use Sentire.Web, :controller

  alias Sentire.Verse

  def index(conn, _params) do
    verses = Repo.all(Verse)
    render conn, "index.json", verses: verses
  end
end
