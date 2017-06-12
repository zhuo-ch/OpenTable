import { RECEIVE_FAVORITE, REMOVE_FAVORITE, RECEIVE_FAVORITES } from '../actions/favorites_actions';
import * as FavoritesSelector from '../selectors/favorites_selector';
import { merge } from 'lodash';

const _nullFavorites = {}

const FavoritesReducer = (state = _nullFavorites, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_FAVORITES:
      const favorites = FavoritesSelector.faves(action.favorites);
      return favorites;
    case RECEIVE_FAVORITE:
      return merge({}, state, [action.favorite]);
    case REMOVE_FAVORITE:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}

export default FavoritesReducer;