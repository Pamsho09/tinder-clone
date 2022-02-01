import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from 'react-query';
import CardProfile from './CardProfile';

const fetchRandomUser = async () => {
  return await fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.results[0];
    })
    .catch(error => {
      console.error(error);
    });
};
function SwipeCards() {
  const {data, isLoading} = useQuery('randomUser', fetchRandomUser);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return <View>{data && <CardProfile data={data} />}</View>;
}

export default SwipeCards;
