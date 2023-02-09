import axios from 'axios';
import { AppDispatch } from '../store';
import { MainSlice, Products } from './AppSlise';

export const FetchProducts =
  (category: string, ProductSection: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(MainSlice.actions.adsFetching());
      let response;
      switch (category) {
        case 'all':
          response = await axios.get<Array<Products>>(
            `https://624fd576f0ae10a8ea4fba2f.mockapi.io/${ProductSection}`,
          );
          break;
        case 'increase':
          response = await axios.get<Array<Products>>(
            `https://624fd576f0ae10a8ea4fba2f.mockapi.io/${ProductSection}?sortBy=price&order=desc`,
          );
          break;
        case 'decrease':
          response = await axios.get<Array<Products>>(
            `https://624fd576f0ae10a8ea4fba2f.mockapi.io/${ProductSection}?sortBy=price&order=asc`,
          );
          break;
      }

      dispatch(MainSlice.actions.adsFetchingSuccess(response?.data));
      dispatch(MainSlice.actions.changeCategory(category));
    } catch (e: any) {
      dispatch(MainSlice.actions.adsFetchingError(e.massage));
    }
  };
