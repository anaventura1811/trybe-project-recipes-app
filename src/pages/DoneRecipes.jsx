import React, { useState, useEffect } from 'react';
import DoneRecipeCard from '../components/DoneRecipeCard/DoneRecipeCard';
import filterRecipesByType from '../utils/filterRecipesByType';
import Header from '../components/Header/Header';
import logoIcon from '../images/savory-6.svg';
import CardGridContainer, { PageGrid } from '../styles/doneRecipes';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filterByType, setFilterByType] = useState('All');
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  useEffect(() => {
    const doneStorage = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneStorage) setDoneRecipes(doneStorage);
  }, []);

  function handleRemoveRecipe(index) {
    const updatedDoneRecipes = doneRecipes
      .slice(0, index)
      .concat(doneRecipes.slice(index + 1));

    localStorage.setItem('doneRecipes', JSON.stringify(updatedDoneRecipes));
    setDoneRecipes(updatedDoneRecipes);
  }

  if (doneRecipes.length === 0) {
    return (
      <div>
        <Header heading="Receitas Feitas" logoSrc={ logoIcon } />
        <h2>Você não possui receitas feitas!</h2>
      </div>
    );
  }

  return (
    <div>
      <Header heading="Receitas Feitas" logoSrc={ logoIcon } />
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
        { filterRecipesByType(doneRecipes, filterByType).map((recipe, index) => (
          <DoneRecipeCard
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

export default DoneRecipes;
