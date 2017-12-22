import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import RestaurantsReducer from './restaurants_reducer';
import CitiesReducer from './cities_reducer';
import SearchReducer from './search_reducer';
import ReservationsReducer from './reservations_reducer';
import ReviewsReducer from './reviews_reducer';
import ModalReducer from './modal_reducer';
import FavoritesReducer from './favorites_reducer';
import ManagerReducer from './manager_reducer';
import SeatingsReducer from './seatings_reducer';

export default combineReducers({
  session: SessionReducer,
  restaurants: RestaurantsReducer,
  cities: CitiesReducer,
  search: SearchReducer,
  reservations: ReservationsReducer,
  reviews: ReviewsReducer,
  modal: ModalReducer,
  favorites: FavoritesReducer,
  manager: ManagerReducer,
  seatings: SeatingsReducer,
});
