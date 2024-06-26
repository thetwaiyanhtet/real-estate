import React from "react";
import Navbar from "../Components/Navbar";
import CurrentPagePath from "../Components/CurrentPagePath";
import SearchFilter from "../Components/SearchFilter";
import Filters from "../Components/Filters";
import SearchResult from "../Components/SearchResult";
import Footer from "../Components/Footer";
import AdvancedSearch from "../Components/AdvancedSearch";


const PropertyListingPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <CurrentPagePath />
        <SearchFilter />
        <AdvancedSearch />
        <div className=" flex md:space-x-16">
          <div className=" md:flex hidden">
            <Filters />
          </div>
          <SearchResult />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PropertyListingPage;
