import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <StatusBar barStyle='light-content' backgroundColor='#312e38' />
    <View style={{ flex: 1, backgroundColor: '#312e38' }} />
  </Container>
);

export default SignUp;
