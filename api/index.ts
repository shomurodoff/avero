import { request } from '../services/api';
import { URLS } from '../constants/urls';

// export const getPost = (slug: string, params: object) => {
//   const result = request.get(slug ? `${URLS.post}/${slug}` : URLS.post, { params });
//   return result.then((response) => response.data);
// };
export const getMenu = (params: object) => {
  const result = request.get(URLS.menu, { params });
  return result.then((response) => response.data);
};
