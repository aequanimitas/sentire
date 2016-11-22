defmodule Sentire.Repo.Migrations.CreateVerses do
  use Ecto.Migration

  def change do
    create table(:verses) do
      add :verse, :text
      
      timestamps()
    end
  end
end
