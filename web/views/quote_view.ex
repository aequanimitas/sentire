defmodule Sentire.QuoteView do
  use Sentire.Web, :view

  def render("index.json", %{qoutes: qoutes}) do
    %{data: render_many(qoutes, Sentire.QuoteView, "quote.json")}
  end

  def render("show.json", %{quote: quote}) do
    %{data: render_one(quote, Sentire.QuoteView, "quote.json")}
  end

  def render("quote.json", %{quote: quote}) do
    %{id: quote.id,
      text: quote.text}
  end
end
