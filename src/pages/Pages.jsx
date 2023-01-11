import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import MainCourses from './MainCourses';
import Desserts from './Desserts';
import Appetisers from './Appetisers';
import Drinks from './Drinks';
import {Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Veggie from '../components/Veggie';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
 <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />}/>
          <Route path="/DishType/MainCourses" element={<MainCourses />} />
          <Route path="/DishType/Desserts" element={<Desserts />} />
          <Route path="/VegetarianRecipes" element={<Veggie />} />
          <Route path="/DishType/Appetisers" element={<Appetisers />} />
          <Route path="/DishType/Drinks" element={<Drinks />} />

      </Routes>

    </AnimatePresence>
     
  )
}

export default Pages