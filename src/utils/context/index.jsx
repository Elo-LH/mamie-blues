import React, { useState, createContext, useEffect } from 'react'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
  const savedFavorites = localStorage.getItem('favorites')
  const [favorites, setFavorite] = useState(
    savedFavorites ? JSON.parse(savedFavorites) : []
  )

  const updateFavorites = (recipe) => {
    if (favorites.find((favorite) => favorite.id === recipe.id) !== undefined) {
      setFavorite(favorites.filter((favorite) => favorite.id !== recipe.id))
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('succesfully removed')
    } else {
      setFavorite(favorites.concat(recipe))
      localStorage.setItem('favorites', JSON.stringify(favorites))
      console.log('succesfully added')
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, updateFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
