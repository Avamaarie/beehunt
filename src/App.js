// src/App.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// ✅ Import all images from assets/images
import cherrytree from "./assets/images/cherrytree.jpg";
import coneflower from "./assets/images/coneflower.jpg";
import easternwhitepine from "./assets/images/easternwhitepine.jpg";
import goldenrod from "./assets/images/goldenrod.jpg";
import mapletree from "./assets/images/mapletree.jpg";
import milkweed from "./assets/images/milkweed.jpg";
import oaktree from "./assets/images/oaktree.jpg";
import queensann from "./assets/images/queensann.jpg";
import sycamore from "./assets/images/sycamore.jpg";
import woodanemone from "./assets/images/woodanemone.jpg";
import Beesticker from "./assets/images/Beesticker.png";

export default function App() {
  const [foundItems, setFoundItems] = useState([]);
  const [completed, setCompleted] = useState(false);

  // ✅ Use imported images instead of string paths
  const items = [
    {
      id: "c1",
      name: "Cherry Tree",
      img: cherrytree,
      fact: "Cherry blossoms are an early nectar source for pollinators.",
    },
    {
      id: "c2",
      name: "Coneflower",
      img: coneflower,
      fact: "Coneflowers are loved by butterflies and bees.",
    },
    {
      id: "c3",
      name: "Eastern White Pine",
      img: easternwhitepine,
      fact: "One of the tallest trees in the northeast, it shelters wildlife. Feathery, soft bundles of 5 needles.",
    },
    {
      id: "c4",
      name: "Goldenrod",
      img: goldenrod,
      fact: "Goldenrod is a key late-season nectar source for bees.",
    },
    {
      id: "c5",
      name: "Maple Tree",
      img: mapletree,
      fact: "Maple blossoms provide nectar in early spring.",
    },
    {
      id: "c6",
      name: "Milkweed",
      img: milkweed,
      fact: "Milkweed is essential for monarch butterflies.",
    },
    {
      id: "c7",
      name: "Oak Tree",
      img: oaktree,
      fact: "Oaks support more wildlife species than any other native tree.",
    },
    {
      id: "c8",
      name: "Queen Anne’s Lace",
      img: queensann,
      fact: "This flower attracts pollinators with its umbrella-like clusters.",
    },
    {
      id: "c9",
      name: "Sycamore",
      img: sycamore,
      fact: "Sycamores provide shade and habitat for many animals.",
    },
    {
      id: "c10",
      name: "Wood Anemone",
      img: woodanemone,
      fact: "A delicate woodland wildflower that signals spring.",
    },
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
      <p>
        Find all 10 plants & trees around New Buffalo! Tap each when you’ve
        spotted it to win a sticker!
      </p>

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

      <div className="container">
        <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
          Have you joined the New Buffalo Bee Committee? Become a member and
          join the fb group{" "}
          <a
            href="https://www.facebook.com/groups/658408933470993"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
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
          <a href={Beesticker} download="BeeHuntPrize.jpg">
            <button className="download-btn">
              View and Download Your Sticker
            </button>
          </a>
        </motion.div>
      )}
    </div>
  );
}
