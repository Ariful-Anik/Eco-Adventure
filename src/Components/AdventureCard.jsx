import React, { useContext, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import categoryData from "../../public/category.json"; // Update the path to your category.json file

const AdventureCard = () => {
  const { user } = useContext(AuthContext);
  const allAdventures = useLoaderData(); // Load all adventures
  const [filteredAdventures, setFilteredAdventures] = useState(allAdventures);

  // Handle category filter
  const handleCategoryClick = (category) => {
    if (category === "All Category") {
      setFilteredAdventures(allAdventures); // Show all adventures
    } else {
      const filtered = allAdventures.filter(
        (adventure) => adventure.categoryName === category
      );
      setFilteredAdventures(filtered); // Show filtered adventures
    }
  };

  return (
    <section className="py-8 px-2  xl:w-10/12 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-[#3C4858] text-center mb-12 animate__lightSpeedInLeft animate__heartBeat">
        Adventure Experiences Let's Go
      </h2>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-8 p-6  flex-wrap">
        {categoryData.categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="px-4 py-2 rounded-md bg-[#007B99] text-white hover:bg-[#005F73] shadow-md transition duration-200"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Adventure Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAdventures.map((adventure) => (
          <div
            key={adventure.id}
            className="border rounded-lg p-4 bg-[#D6F1F9] shadow-md"
          >
            <img
              src={adventure.image}
              alt={adventure.adventureTitle}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">
              {adventure.adventureTitle}
            </h3>
            <ul className="mt-2 text-sm text-gray-600">
              {adventure.ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>- {feature}</li>
              ))}
            </ul>

            <NavLink to={`/adventuredetails/${adventure.id}`}>
              <button className="bg-[#007B99] text-white px-4 py-2 mt-4 rounded-md hover:bg-[#005F73]">
                Explore Now
              </button>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdventureCard;
