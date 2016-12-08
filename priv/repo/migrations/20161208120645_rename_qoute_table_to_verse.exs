defmodule Sentire.Repo.Migrations.RenameQouteTableToVerse do
  use Ecto.Migration

  def change do
    rename table(:qoutes), to: table(:verses)
    rename table(:verses), :verses, to: :text
  end

end
