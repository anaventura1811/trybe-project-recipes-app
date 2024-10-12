import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Generics/Button';

function ResetSearchBarFiltersButton({ onClick }) {
  return (
    <Button onClick={ onClick } className="reset-btn">
      Resetar
    </Button>
  );
}

ResetSearchBarFiltersButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetSearchBarFiltersButton;
