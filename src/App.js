import { useState, useEffect } from 'react';
import SimpleSwiper from "./SimpleSwiper.js";
import Footer from "./Footer.js";
import "./SimpleSwiper.css";

function App() {
  const [loadedURL, setLoadedURL] = useState(null);

  useEffect(() => {
    handleGetNewCats();
  }, []); // Runs handleGetNewCats() once before the user clicks the button

  async function handleGetNewCats() {
    let response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=3", { 
      headers: {
          'x-api-key': "59913b83-8b00-42ed-8d87-0400c51e8529",
          'Content_Type': "application/json"
      }}
    );

    const data = await response.json();
    setLoadedURL(data);
    }

  return (
    <div className="api-container-main">
      <h2>
        Click the button to request a new selection of cat photos!
      </h2>
      <button className="api-button" onClick={handleGetNewCats}>Show me some new cats!</button>

      {(loadedURL !== null) &&
      <SimpleSwiper content={loadedURL}/>
      } {/* Loads the swiper component to display the images only once the API call has returned the data */}

      <Footer/>
    </div>

    
  );

    
}

export default App;
