defmodule Sentire.PageController do
  use Sentire.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
