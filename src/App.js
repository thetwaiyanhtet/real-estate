// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PropertyListingPage from "./Pages/PropertyListingPage";
import PropertyDetail from "./Pages/PropertyDetail";
import AgentPage from "./Pages/AgentPage";
import AgentDetailPage from "./Pages/AgentDetailPage";
import CompanyDetailPage from "./Pages/CompanyDetailPage";
import PropertyResourcePage from "./Pages/PropertyResourcePage";
import MortagePage from "./Pages/MortagePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/propertyListing" element={<PropertyListingPage />} />
          <Route path="/propertyListing/propertyDetail" element={<PropertyDetail />}></Route>
          <Route path="/agent" element={<AgentPage />}></Route>
          <Route path="/agent/agent:id" element={<AgentDetailPage />}></Route>
          <Route path="/agent/companyDetail" element={<CompanyDetailPage />}></Route>
          <Route path="/propertyGuide" element={<PropertyResourcePage />}></Route>
          <Route path="/propertyGuide/mortage" element={<MortagePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
