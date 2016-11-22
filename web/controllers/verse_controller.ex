defmodule Sentire.VerseController do
  use Sentire.Web, :controller

  def index(conn, _params) do
    render conn, "index.json"
  end
end
