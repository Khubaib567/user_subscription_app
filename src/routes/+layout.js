import { citiesList } from "../stores/store";

import { CITIES_LIST_EXTENDED } from "../assets/data/constants";


export const load = (async () => {
  citiesList.set(CITIES_LIST_EXTENDED);
  return {
    cities: CITIES_LIST_EXTENDED,
  };
});
