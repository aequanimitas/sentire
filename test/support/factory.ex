defmodule Sentire.Factory do
  use ExMachina.Ecto, repo: Sentire.Repo



  def verse_factory do
    %Sentire.Verse{
      verse: "Men are disturbed, not by things, but by the principles and "
    }
  end
      
  #      notions which they form concerning things. Death, for instance, is not terrible, else it would have appeared so to Socrates. But the terror consists in our notion of death that it is terrible. When therefore we are hindered, or disturbed, or grieved, let us never attribute it to others, but to ourselves; that is, to our own principles. An uninstructed person will lay the fault of his own bad condition upon others. Someone just starting instruction will lay the fault on himself. Some who is perfectly instructed will place blame neither on others nor on himself." 
  #    }
  #  end
end
