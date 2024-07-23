import { ListAnimeUseCase } from '@/@core/usecases/sample/list-anime.usecase';

export const listAnimeAction = async (req:any) => {
  const userData = req.body;
  const data = await ListAnimeUseCase(userData);
  return data;
};