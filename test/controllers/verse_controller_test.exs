defmodule Sentire.VerseControllerTest do
  use Sentire.ConnCase

  alias Sentire.Verse
  @valid_attrs %{text: "some content"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, verse_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    verse = Repo.insert! %Verse{}
    conn = get conn, verse_path(conn, :show, verse)
    assert json_response(conn, 200)["data"] == %{"id" => verse.id,
      "text" => verse.text}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, verse_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, verse_path(conn, :create), verse: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Verse, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, verse_path(conn, :create), verse: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    verse = Repo.insert! %Verse{}
    conn = put conn, verse_path(conn, :update, verse), verse: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Verse, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    verse = Repo.insert! %Verse{}
    conn = put conn, verse_path(conn, :update, verse), verse: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    verse = Repo.insert! %Verse{}
    conn = delete conn, verse_path(conn, :delete, verse)
    assert response(conn, 204)
    refute Repo.get(Verse, verse.id)
  end
end
