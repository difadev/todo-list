import { fetchListAnime } from '@/@core/adapters/sample/list-anime';

const API_ENDPOINT = '/top/anime';

export const listAnimeSource = async (userData: any) => {
  return await fetchListAnime(API_ENDPOINT);
};