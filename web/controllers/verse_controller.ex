defmodule Sentire.VerseController do
  use Sentire.Web, :controller

  alias Sentire.Verse

  def index(conn, _params) do
    verses = Repo.all(Verse)
    render(conn, "index.json", verses: verses)
  end

  def create(conn, %{"verse" => verse_params}) do
    changeset = Verse.changeset(%Verse{}, verse_params)

    case Repo.insert(changeset) do
      {:ok, verse} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", verse_path(conn, :show, verse))
        |> render("show.json", verse: verse)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sentire.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    verse = Repo.get!(Verse, id)
    render(conn, "show.json", verse: verse)
  end

  def update(conn, %{"id" => id, "verse" => verse_params}) do
    verse = Repo.get!(Verse, id)
    changeset = Verse.changeset(verse, verse_params)

    case Repo.update(changeset) do
      {:ok, verse} ->
        render(conn, "show.json", verse: verse)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sentire.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    verse = Repo.get!(Verse, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(verse)

    send_resp(conn, :no_content, "")
  end
end
