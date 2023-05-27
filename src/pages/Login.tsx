
import {View, Text, Image, ScrollView, TextInput} from 'react-native';


const Login = () => {
    
    let inputUser = "";
    let inputPassword = "";
    
  return (
    <ScrollView>
      <Text>{inputUser}----</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
      onChange={(e) => {
        inputUser = e.nativeEvent.text;
        console.log(inputUser);
      }}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default Login;