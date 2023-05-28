import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_SUCCESS,
    categoriesArray
  );

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_FAILED, error);
