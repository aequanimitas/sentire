defmodule Sentire.Repo.Migrations.RenameQuoteToVerse do
  use Ecto.Migration

  def change do
    rename table(:qoutes), :text, to: :verses
  end
end
