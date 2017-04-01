defmodule Sentire.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string, null: false
      add :password_hashed, :string, null: false
      timestamps()
    end

  end
end
