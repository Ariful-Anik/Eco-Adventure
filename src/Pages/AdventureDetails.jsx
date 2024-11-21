import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AdventureContext } from "../context/AdventureContext";
import { AuthContext } from "../context/AuthProvider";
import ErrorPage from "./Errorpage";
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2'
const AdventureDetails = () => {
  const adventures = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(adventures);
  const { id } = useParams();
  const adventure = adventures.find((adv) => adv.id == id);

  
 
  if (!adventure) return <div><ErrorPage></ErrorPage></div>;

  const handleTalkWithExpert = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 14 && currentTime <= 20) {
      window.open("https://meet.google.com", "_blank");
    } else {
      // alert("Consultation available from 10:00 AM to 8:00 PM.");
      Swal.fire({
        title: 'Hello Dear,',
        text: 'Consultation available from 10:00 AM to 8:00 PM.',
        icon: 'info',
        confirmButtonText: 'Okay'
      })
    }
  };

  return (
    <div className="md:max-w-6xl mx-auto animate__animated   animate__zoomInLeft">
      <Helmet>
        <title>Adventure-Details</title>
      </Helmet>
      

      <div className="px-4 py-8 border space-y-8 rounded-lg text-[#3C4858]  bg-[#CBF1F5] shadow-lg ">
        {/* Title */}
        <h2 className="text-3xl text-center font-bold mb-4">
          {adventure.adventureTitle}
        </h2>
        <div className="divider divider-neutral mb-5"></div>

        {/* Image */}
        <img
          src={adventure.image}
          alt={adventure.adventureTitle}
          className="w-full h-96 object-cover mb-6 rounded-lg"
        />

        {/* Short Description */}
        <p className="font-semibold text-xl text-center text-gray-700">
          {adventure.shortDescription}
        </p>

        {/* Adventure Details */}
        <ul className="mt-4 space-y-2 text-gray-600 text-center">
          <li>
            <strong>Cost:</strong> ${adventure.adventureCost}
          </li>
          <li>
            <strong>Duration:</strong> {adventure.duration}
          </li>
          <li>
            <strong>Location:</strong> {adventure.location}
          </li>
          <li>
            <strong>Level:</strong> {adventure.adventureLevel}
          </li>
          <li>
            <strong>Max Group Size:</strong> {adventure.maxGroupSize}
          </li>
          <li>
            <strong>Booking Status:</strong> {adventure.bookingAvailability}
          </li>
        </ul>

        <div className="flex justify-around">
          {/* Eco-Friendly Features */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">
              Eco-Friendly Features
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {adventure.ecoFriendlyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Special Instructions */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Special Instructions</h3>
            <ul className="list-disc list-inside text-gray-700">
              {adventure.specialInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Talk with Expert Button */}
        {user && (
          <button
            onClick={handleTalkWithExpert}
            className="btn btn-primary w-full mt-6 py-2 px-4 border-none bg-[#007B99] text-white rounded-lg hover:bg-[#005F73] transition"
          >
            Talk with Expert
          </button>
        )}
      </div>
    </div>
  );
};

export default AdventureDetails;
