defmodule Sentire.Repo.Migrations.CreateVerse do
  use Ecto.Migration

  def change do
    create table(:verses) do
      add :verse, :text
      add :verse_number, :integer

      timestamps()
    end

  end
end
