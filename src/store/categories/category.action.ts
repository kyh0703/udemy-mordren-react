import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoryItem,
} from './category.types';

import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/reducer.utils';

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesStart
  | FetchCategoriesSuccess
  | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_SUCCESS,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGOREIS_FAILED, error)
);
