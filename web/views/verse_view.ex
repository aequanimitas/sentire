defmodule Sentire.VerseView do
  use Sentire.Web, :view

  def render("index.json", %{verses: verses}) do
    %{data: render_many(verses, Sentire.VerseView, "verse.json")}
  end

  def render("show.json", %{verse: verse}) do
    %{data: render_one(verse, Sentire.VerseView, "verse.json")}
  end

  def render("verse.json", %{verse: verse}) do
    %{id: verse.id,
      text: verse.text}
  end
end
