import React from "react";

const TopDestination = () => {
  return (
    <div className="py-8 px-4 mb-6 lg:w-7/12 mx-auto bg-[#D6F1F9]">
      <h2 className="text-2xl font-bold text-center text-[#3C4858] mb-6">
        Top Eco-Friendly Destinations
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-60 text-center">
          <img
            src="https://images.unsplash.com/photo-1477322524744-0eece9e79640?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Amazon Rainforest"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">Amazon Rainforest</h3>
        </div>
        <div className="w-60 text-center">
          <img
            src="https://images.unsplash.com/photo-1523044214787-9caaa5ee4d8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sahara Desert"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">Sahara Desert</h3>
        </div>
        <div className="w-60 text-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Great Barrier Reef"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-2">Great Barrier Reef</h3>
        </div>
      </div>
    </div>
  );
};

export default TopDestination;
