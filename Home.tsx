import {useQuery} from '@apollo/react-hooks';
import React, {FunctionComponent} from 'react';
import {Dimensions, FlatList, Image, Text, View} from 'react-native';
import {TopAnimeQuery, TopAnimeResponse} from './models';
import {TOP_ANIME} from './queries';

export const Home: FunctionComponent = () => {
  const {data, fetchMore, loading} = useQuery<TopAnimeResponse, TopAnimeQuery>(
    TOP_ANIME,
    {
      variables: {page: 1},
    },
  );

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={data?.Page.media}
          renderItem={({item}) => {
            return (
              <View>
                <Image
                  style={{width: Dimensions.get('screen').width, height: 200}}
                  source={{uri: item.bannerImage}}
                />
                <Text>{item.title.userPreferred}</Text>
              </View>
            );
          }}
          onEndReached={() =>
            fetchMore({
              variables: {page: (data?.Page.pageInfo.currentPage ?? 0) + 1},
            })
          }
        />
      )}
    </>
  );
};
