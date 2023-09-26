import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Recipe from './pages/Recipe'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipesList from './pages/RecipesList'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipes_list" element={<RecipesList />} />
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
