import { Outlet } from "react-router-dom";
import AdventureCard from "../Components/AdventureCard";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import TopDestination from "../Components/TopDestination";
import AdventureDetails from "../Pages/AdventureDetails";
import { Helmet } from "react-helmet";
import Snowfall from "react-snowfall";




const HomePageLayout = () => {
  return (
    <div className="w-full  mx-auto bg-[#F9FAFC] overflow-hidden  ">
      <Helmet>
        <title>Eco-Adventure-Home</title>
      </Helmet>
      <Snowfall
        color="white"
        snowflakeCount={200}
        style={{
          position: "fixed", // Ensures it covers the entire page
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 999, // Keep it above other elements
          pointerEvents: "none", // Avoid blocking user interactions
        }}
      />

       

      <header>
        <Navbar></Navbar>
       
        <Banner></Banner>
      </header>

      <main className="min-h-[calc(100vh-300px)] xl:w-11/12 mx-auto mt-12">
        {/* <AdventureCard></AdventureCard> */}
        <Outlet></Outlet>
        <Testimonials></Testimonials>
        <TopDestination></TopDestination>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      {/* <Snowfall
      
        color="white" // Set the snowflake color
        snowflakeCount={300} // Number of snowflakes
        style={{
          zIndex: 999,
          pointerEvents: 'none',
        }}
      /> */}
    </div>
  );
};

export default HomePageLayout;
