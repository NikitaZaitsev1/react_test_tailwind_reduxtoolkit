import React from 'react';
import {Route, Routes} from "react-router-dom";
import FavouritesPages from "./pages/FavouritesPages";
import Navigation from "./components/Navigation";
import {HomePage} from "./pages/HomePage";
import useDarkSide from "./hooks/useDarkSide";


function App() {

    return (
        <>
            <div className="dark:bg-gray-900 transition duration-500">
                <Navigation/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favourites" element={<FavouritesPages/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
