import React from 'react';
import {Button} from 'react-native';
import {createAccount} from '../api/mock';
import EmailForm from '../forms/EmailForm';

const CreateAccount = ({navigation}) => {
  return (
    <EmailForm
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}>
      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </EmailForm>
  );
};

export default CreateAccount;
