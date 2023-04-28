import { IMusic } from '@components/CarouselMusic/types';

export const filterSortMusicsByNameAndCreator = (
  musics: IMusic[],
  search: string,
) =>
  musics
    .filter(
      (music) =>
        music.musicName
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase()) ||
        music.creator.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    )
    .sort(function (a, b) {
      if (
        (a.musicName.startsWith(search) && !b.musicName.startsWith(search)) ||
        (a.creator.startsWith(search) && !b.creator.startsWith(search))
      ) {
        return -1;
      }
      if (
        (!a.musicName.startsWith(search) && b.musicName.startsWith(search)) ||
        (!a.creator.startsWith(search) && b.creator.startsWith(search))
      ) {
        return 1;
      }
      return 0;
    });
