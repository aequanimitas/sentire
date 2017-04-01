defmodule Sentire.User do
  use Sentire.Web, :model

  # do not encode private metadata to client, be selective
  @derive {Poison.Encoder, only: [:username, :id]}

  schema "users" do
    field :username, :string
    field :password, :string, virtual: true
    field :password_hashed, :string
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:username, :password])
    |> validate_required([])
    |> generate_hashed_password
  end

  def generate_hashed_password(cs) do
    case cs do
      %Ecto.Changeset{valid?: true, changes: %{password: password}} ->
        put_change(cs, :password_hashed, Comeonin.Bcrypt.hashpwsalt(password))
      _ -> cs
    end
  end
end
