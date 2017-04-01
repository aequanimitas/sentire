defmodule Sentire.Verse do
  use Sentire.Web, :model

  schema "verses" do
    field :verse, :string
    field :verse_number, :integer

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:verse, :verse_number])
    |> validate_required([:verse, :verse_number])
  end
end
