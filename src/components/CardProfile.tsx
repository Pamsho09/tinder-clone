import React from 'react';
import {Text, View, Image} from 'react-native';

import styled from 'styled-components/native';

const ContainerCardProfile = styled.View`
  width: 333px;
  height: 500px;
  background-color: #fff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
  border-radius: 13px;
`;

function CardProfile(props: any) {
  console.log(props.data.picture.large);
  return (
    <ContainerCardProfile>
      <Image
        style={{
          width: 333,
          height: 500,
          resizeMode: 'cover',
        }}
        source={{
          uri: props.data.picture.large,
        }}
      />
    </ContainerCardProfile>
  );
}

export default CardProfile;
