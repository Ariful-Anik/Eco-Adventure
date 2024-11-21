import React, { createContext, useState, useEffect } from "react";

// Create context
export const AdventureContext = createContext();

// Sample JSON Data
const adventureData = [
  {
    id: "1",
    title: "Mountain Trekking",
    image: "/images/mountain.jpg",
    shortDescription: "Explore breathtaking mountain views.",
    ecoFriendlyFeatures: ["Reusable gear", "Low carbon footprint"],
    cost: 250,
    availability: "Available",
    location: "Himalayas",
    duration: "3 days",
    level: "Moderate",
    includedItems: ["Guide", "Meals", "Trekking Equipment"],
    specialInstructions: ["Bring warm clothing", "Stay hydrated"],
    maxGroupSize: 10,
  },
  // Add more adventures as needed
];

// Provider Component
const AdventureProvider = ({ children }) => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    // Simulate data fetch
    setAdventures(adventureData);
  }, []);

  return (
    <AdventureContext.Provider value={{ adventures }}>
      {children}
    </AdventureContext.Provider>
  );
};

export default AdventureProvider;
