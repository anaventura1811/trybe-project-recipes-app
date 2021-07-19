import React, { useState, useEffect } from 'react';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard/FavoriteRecipeCard';
import filterRecipesByType from '../utils/filterRecipesByType';
import Header from '../components/Header/Header';
import logoIcon from '../images/logoPaginasExplorar.svg';
import CardGridContainer from '../styles/favRecipes';
import { PageGrid } from '../styles/doneRecipes';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filterByType, setFilterByType] = useState('All');
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteStorage) setFavoriteRecipes(favoriteStorage);
  }, []);

  function handleRemoveRecipe(index) {
    const updatedFavoriteRecipes = favoriteRecipes
      .slice(0, index)
      .concat(favoriteRecipes.slice(index + 1));

    localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavoriteRecipes));
    setFavoriteRecipes(updatedFavoriteRecipes);
  }

  if (favoriteRecipes.length === 0) {
    return (
      <div>
        <Header heading="Receitas Favoritas" logoSrc={ logoIcon } />
        <h2>Você não possui receitas favoritas!</h2>
      </div>
    );
  }

  return (
    <div>
      <Header heading="Receitas Favoritas" logoSrc={ logoIcon } />
      { copiedToClipboard && 'Link copiado!' }
      <PageGrid>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilterByType('Food') }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilterByType('Drinks') }
        >
          Drinks
        </button>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilterByType('All') }
        >
          All
        </button>
      </PageGrid>
      <CardGridContainer>
        { filterRecipesByType(favoriteRecipes, filterByType).map((recipe, index) => (
          <FavoriteRecipeCard
            recipe={ recipe }
            index={ index }
            key={ index }
            handleRemoveRecipe={ handleRemoveRecipe }
            setCopiedToClipboard={ setCopiedToClipboard }
          />
        )) }
      </CardGridContainer>
    </div>
  );
}

export default FavoriteRecipes;
