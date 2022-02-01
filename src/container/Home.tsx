import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import SwipeCards from '../components/SwipeCards';

const ContainerView = styled.View`
  width: 100%;
  flex: 1;
  position: relative;
`;

function Home() {
  return (
    <ContainerView>
      <LinearGradient
        colors={['#fd0e42', '#c40f31']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          width: '100%',
          height: 350,
          borderBottomLeftRadius: 39,
          borderBottomRightRadius: 39,
          zIndex: -1,
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 30,

            color: '#fff',
            marginTop: 50,
            marginLeft: 20,
            fontFamily: 'Nunito-ExtraBold',
          }}>
          Discover
        </Text>
        <SwipeCards />
      </View>
    </ContainerView>
  );
}

export default Home;
