// src/App.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [foundItems, setFoundItems] = useState([]);
  const [completed, setCompleted] = useState(false);

  const items = [
    { id: "c1", name: "Cherry Tree", img: "/images/cherrytree.jpg", fact: "Cherry blossoms are an early nectar source for pollinators." },
    { id: "c2", name: "Coneflower", img: "/images/coneflower.jpg", fact: "Coneflowers are loved by butterflies and bees." },
    { id: "c3", name: "Eastern White Pine", img: "/images/easternwhitepine.jpg", fact: "One of the tallest trees in the northeast, it shelters wildlife. Feathery, soft bundles of 5 needles." },
    { id: "c4", name: "Goldenrod", img: "/images/goldenrod.jpg", fact: "Goldenrod is a key late-season nectar source for bees." },
    { id: "c5", name: "Maple Tree", img: "/images/mapletree.jpg", fact: "Maple blossoms provide nectar in early spring." },
    { id: "c6", name: "Milkweed", img: "/images/milkweed.jpg", fact: "Milkweed is essential for monarch butterflies." },
    { id: "c7", name: "Oak Tree", img: "/images/oaktree.jpg", fact: "Oaks support more wildlife species than any other native tree." },
    { id: "c8", name: "Queen Anne’s Lace", img: "/images/queensann.jpg", fact: "This flower attracts pollinators with its umbrella-like clusters." },
    { id: "c9", name: "Sycamore", img: "/images/sycamore.jpg", fact: "Sycamores provide shade and habitat for many animals." },
    { id: "c10", name: "Wood Anemone", img: "/images/woodanemone.jpg", fact: "A delicate woodland wildflower that signals spring." },
  ];

  const toggleFound = (id) => {
    setFoundItems((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      setCompleted(updated.length === items.length);
      return updated;
    });
  };

  return (
    <div className="container">
      <h1>🐝 Bee Friendly Scavenger Hunt </h1>
      <p>Find all 10 plants & trees around New Buffalo! Tap each when you’ve spotted it to win a sticker!</p>

      <div className="grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`card ${foundItems.includes(item.id) ? "found" : ""}`}
            onClick={() => toggleFound(item.id)}
          >
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="fact">{item.fact}</p>
            {foundItems.includes(item.id) && <p className="check">✅ Found!</p>}
          </div>
        ))}
      </div>

      {completed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="congrats"
        >
          <h2>🎉 Congratulations! 🎉</h2>
          <p>You found them all! Bees thank you 🐝💛</p>
          <a href="/images/Beesticker.png" download="BeeHuntPrize.jpg">
  <button className="download-btn">View andDownload Your Sticker</button>
</a>

        </motion.div>
      )}
    </div>
  );
}
