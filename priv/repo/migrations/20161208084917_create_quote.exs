defmodule Sentire.Repo.Migrations.CreateQuote do
  use Ecto.Migration

  def change do
    create table(:qoutes) do
      add :text, :string

      timestamps()
    end

  end
end
