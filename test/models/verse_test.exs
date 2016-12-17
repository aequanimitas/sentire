defmodule Sentire.VerseTest do
  use Sentire.ModelCase

  alias Sentire.Verse

  @valid_attrs %{verse: "some content", verse_number: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Verse.changeset(%Verse{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Verse.changeset(%Verse{}, @invalid_attrs)
    refute changeset.valid?
  end
end
