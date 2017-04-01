defmodule Sentire.RegistrationController do
  use Sentire.Web, :controller

  alias Sentire.{Repo, User, RegistrationView}

  plug :scrub_params, "user" when action in [:create]

  def create(conn, %{"user" => params}) do
    cs = User.changeset(%User{}, params)
    case Repo.insert(cs) do
      {:ok, user} ->
        {:ok, jwt, full_claims} = Guardian.encode_and_sign(user, :token)
        conn
        |> put_status(:created)
        |> render(RegistrationView, "show.json", jwt: jwt, user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json", changeset: changeset)
    end
  end
end
