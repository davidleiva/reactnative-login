import React from 'react';
import {Button} from 'react-native';
import {login} from '../api/mock';
import EmailForm from '../forms/EmailForm';

const LoginScreen = ({navigation}) => {
  return (
    <EmailForm
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}>
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </EmailForm>
  );
};

export default LoginScreen;
