defmodule EnchiridionSeed do
  @nums 1..10 |> Enum.to_list |> Enum.map(&Integer.to_string/1)

  def start do
    "./epicench.1b.txt"
    |> File.stream!
    |> Stream.filter(fn x -> !String.contains?(x, "<") end)
    |> Stream.map(&String.strip/1)
    |> Stream.filter(fn x -> byte_size(x) > 0 end)
    |> Enum.slice(6, 1000)
    |> remap
    |> Enum.map(fn x -> 
      {verse_number, txt} = Integer.parse(x)
      # removing ". " from text
      base = byte_size(". ")
      <<_::binary-size(base), rest::binary>> = txt
      {verse_number, rest}
    end)
  end

  def remap([h | t]) do
    remap(t, [], [h | []])
  end

  def remap([], acc, _), do: acc
  def remap([_ | []], acc, _), do: acc
  def remap([h | t], acc, verse_acc) do
    if verse_start?(hd(t)) do
      v = generate_quote(h, verse_acc)
      remap(t, [v | acc], [])
    else
      remap(t, acc, [h | verse_acc])
    end
  end

  def verse_start?(str) do
    String.starts_with?(str, @nums)
  end

  def generate_quote(h, t) do
    [h | t] |> Enum.reverse |> Enum.join(" ")
  end
end
