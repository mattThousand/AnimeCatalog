export type TopAnimeQuery = {
  page: number;
};
export type TopAnimeResponse = {
  Page: {
    media: {
      id: number;
      bannerImage: string;
      title: {
        userPreferred: string;
      };
    }[];
    pageInfo: {
      currentPage: number;
    };
  };
};
