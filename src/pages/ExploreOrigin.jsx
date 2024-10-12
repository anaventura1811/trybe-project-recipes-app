import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchBarButton from '../components/SearchBar/SearchBarButton';
import useFetchRecipes from '../effects/useFetchRecipes';
import CardList from '../components/CardList/CardList';
import { RecipesContext } from '../context/RecipesContext';
import AreasList from '../components/AreasList/AreasList';
import logoIcon from '../images/savory-6.svg';

function ExploreOrigin() {
  const [isActive, setIsActive] = useState(false);
  const [, setFetchUrl] = useFetchRecipes('meals');
  const { recipesContext } = useContext(RecipesContext);
  const [recipes, setRecipes] = useState([]);

  const handleToggleSearchBar = (ev) => {
    ev.preventDefault();
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    setFetchUrl('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    return () => {
      cancel = true;
    };
  }, [setFetchUrl]);

  useEffect(() => {
    if (recipesContext.meals) setRecipes(recipesContext.meals); // pega do estado global e seta no estado da pg
  }, [recipesContext]);

  return (
    <>
      <Header heading="Explorar Origem" logoSrc={ logoIcon }>
        <SearchBarButton onClick={ handleToggleSearchBar } />
      </Header>
      { isActive ? (<SearchBar />) : ''}
      <AreasList />
      <CardList recipes={ recipes } type="meals" />
      <Footer />
    </>
  );
}

export default ExploreOrigin;
