import { SHOW_INFO, initialState } from './BookActions';
import searchTitleAuthApi from '../../services/bookApi/searchTitleAuthApi';

export const BookReducer = async (state = initialState, action) => {
  if (action.type == SHOW_INFO) {
    console.log('showing Info');
    return {
      ...state,
      infos: data,
    };
  }
};
