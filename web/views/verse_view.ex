defmodule Sentire.VerseView do
  def render("index.json", %{verses: verses}) do
    %{verses: Enum.map(verses, fn(x) -> %{ verse: x.verse } end )}
  end
end
