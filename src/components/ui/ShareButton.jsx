import { FaShareAlt } from "react-icons/fa";

export default function ShareButton({ pokemons }) {
  const handleShare = async () => {
    if (pokemons.length === 0) {
      alert("Select at least one Pokémon to share");
      return;
    }

    const pokemonNames = pokemons.map((p) => p.name).join(", ");
    const shareText = `My Pokémon Team is: ${pokemonNames}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Pokémon Team",
          text: shareText,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Share error:", err);
        }
      }
    } else {
      alert(shareText);
    }
  };

  return (
    <div>
      <button onClick={handleShare} style={{backgroundColor: 'transparent', border: 'none', color: 'var(--white)' }}>
        <FaShareAlt size={24} title="Share"/>
      </button>
    </div>
  );
}
