import React, { useState, createContext } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorite] = useState([])
  const updateFavorites = (recipe) => {
    if (favorites.find((favorite) => favorite.id === recipe.id)) {
      setFavorite(favorites.filter((favorite) => favorite.id !== recipe.id))
    } else {
      setFavorite(favorites.push(recipe))
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
