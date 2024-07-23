import { listAnimeRepository } from '@/@core/repositories/sample/list-anime.repository';

export const ListAnimeUseCase = async (userData:any) => {
  try {
    const data = await listAnimeRepository(userData);
    return data;
  } catch (error:any) {
    throw new Error(`Error List Anime: ${error.message}`);
  }
};