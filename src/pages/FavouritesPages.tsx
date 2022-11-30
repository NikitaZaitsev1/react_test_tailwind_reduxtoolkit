import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavouritesPages = () => {
    const {favourites} = useAppSelector(state => state.github)

    if (favourites.length === 0) return <p className="text-center">No items!</p>

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen">
            <ul className="list-none">
                {favourites.map(f => (
                    <li className="py-2 px-4 hover: bg-orange-200 hover:text-white transition-colors cursor-pointer" key={f}>
                        <a href={f} target="_blank">{f}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FavouritesPages;