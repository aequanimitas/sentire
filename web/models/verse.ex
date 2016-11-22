defmodule Sentire.Verse do
  use Sentire.Web, :model

  schema "verses" do
    field :verse, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:verse])
    |> validate_required([:verse])
  end
end
