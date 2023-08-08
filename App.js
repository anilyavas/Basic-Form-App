import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  Pressable,
  Switch,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [shouldKeepInformation, setShouldKeepInformation] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <TextInput
          style={{borderWidth: 1, padding: 10, borderRadius: 4}}
          value={name}
          placeholder="Enter your name please"
          onChangeText={value => {
            setName(value);
          }}
          autoFocus={true}></TextInput>
        <TextInput
          style={{borderWidth: 1, padding: 10, borderRadius: 4}}
          value={age}
          placeholder="Enter your age please"
          onChangeText={value => {
            setAge(value);
          }}></TextInput>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Switch
            value={shouldKeepInformation}
            onValueChange={value => {
              setShouldKeepInformation(value);
            }}></Switch>
          <Text>Keep my information</Text>
        </View>
        <Pressable style={{backgroundColor: 'black'}}>
          <Text
            style={{color: 'white', textAlign: 'center', padding: 10}}
            onPress={() => {
              console.log(name, age);
            }}>
            Submit
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
