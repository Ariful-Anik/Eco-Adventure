import React, { useContext } from "react";
import { AdventureContext } from "../context/AdventureContext";
import AdventureCard from "../Components/AdventureCard";

const Home = () => {
  const { adventures } = useContext(AdventureContext);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-4">Eco-Adventure Experiences</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {adventures.map((adventure) => (
          <AdventureCard key={adventure.id} adventure={adventure} />
        ))}
      </div>
    </div>
  );
};

export default Home;
