import { getListUrl } from './url';

export const getListEmployeeApi = () => {
  return fetch(getListUrl)
    .then((response) => response.json())
    .then((data) => console.log('data from api', data));
};
