defmodule Sentire.Verse do
  use Sentire.Web, :model

  schema "verses" do
    field :text, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:text])
    |> validate_required([:text])
  end
end
