defmodule Sentire.Repo.Migrations.CreateVerse do
  use Ecto.Migration

  def change do
    create table(:verses) do
      add :text, :string

      timestamps()
    end

  end
end
