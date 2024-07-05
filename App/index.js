// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, View, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const stories = [
  { id: '1', title: 'Cinderella' },
  { id: '2', title: 'Snow White' },
  { id: '3', title: 'Sleeping Beauty' },
];

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={homeStyles.container}>
      <Text style={homeStyles.title}>Fairy Tales</Text>
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={homeStyles.button}
            onPress={() => navigation.navigate('Story', { title: item.title })}
          >
            <Text style={homeStyles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={homeStyles.list}
      />
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#CE8ABD',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  list: {
    paddingBottom: 20,
  },
});

const storyTexts = {
  Cinderella: `Once upon a time... (full text of Cinderella)`,
  'Snow White': `Once upon a time... (full text of Snow White)`,
  'Sleeping Beauty': `Once upon a time... (full text of Sleeping Beauty)`,
};

function StoryScreen({ route }) {
  const { title } = route.params;
  const storyText = storyTexts[title];

  return (
    <SafeAreaView style={storyStyles.container}>
      <ScrollView contentContainerStyle={storyStyles.scrollContainer}>
        <Text style={storyStyles.title}>{title}</Text>
        <Text style={storyStyles.storyText}>{storyText}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const storyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 50,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}