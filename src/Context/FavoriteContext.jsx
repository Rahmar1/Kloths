import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (product) => {
        if (favorites.some(fav => fav.id === product.id)) {
            toast.info("This product is already available", { position: "top-right" });
            return;
        }
        setFavorites([...favorites, product]);
        toast.success("Added To Favorites", { position: "top-right" });
    };

    const removeFromFavorites = (productId) => {
        setFavorites(favorites.filter(item => item.id !== productId));
        toast.info("Deleted Form Favorites", { position: "top-right" });
    };

    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoriteContext.Provider>
    );
};
