import React, { useState, createContext } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  // Get favorites from local storage if it exists
  const savedFavorites = localStorage.getItem('favorites')
  const [favorites, setFavorite] = useState(
    savedFavorites ? JSON.parse(savedFavorites) : []
  )

  const updateFavorites = (recipe) => {
    // If recipe is in favorites, delete it
    if (favorites.find((favorite) => favorite.id === recipe.id) !== undefined) {
      setFavorite(favorites.filter((favorite) => favorite.id !== recipe.id))
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('favorite succesfully removed')
    } else {
      // If recipe is NOT in favorites, add it
      setFavorite(favorites.concat(recipe))
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('favorite succesfully added')
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
