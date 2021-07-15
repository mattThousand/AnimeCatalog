import {gql} from '@apollo/client';

export const TOP_ANIME = gql(`query ($page: Int!) {
  Page(page: $page, perPage: 100) {
    media(sort: SCORE_DESC) {
      id
			bannerImage
      title {
        userPreferred
      }
    }
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
  }
}`);
