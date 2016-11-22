defmodule Sentire.VerseControllerTest do
  use Sentire.ConnCase

  import Sentire.Factory

  test "#index renders a list of quotes" do
      conn = build_conn()
      # inspect on how insert does things
      verse = insert(:verse)
  
      conn = get conn, verse_path(conn, :index)
  
      assert json_response(conn, 200) == %{
        "verses" => [%{
          "verse" => verse.verse
        }]
      }
  end
end
