import { listAnimeSource } from '@/@core/data-access/sample/list-anime.source';

export const listAnimeRepository = async (userData: any) => {
  return await listAnimeSource(userData);
};