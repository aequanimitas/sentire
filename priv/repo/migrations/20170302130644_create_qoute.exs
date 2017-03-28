defmodule Sentire.Repo.Migrations.CreateQoute do
  use Ecto.Migration

  def change do
    create table(:qoutes) do

      timestamps()
    end

  end
end
