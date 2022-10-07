import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import EventCalendar from 'react-native-events-calendar';
let { width } = Dimensions.get('window');

const App = () => {
  const [events, setEvents] = useState([
    {
      start: '',
      end: '',
      title: '',
      summary: '',
    },
  ]);

  const [tasks, setTasks] = useState('');

  const [start, setStart] = useState('');

  const [end, setEnd] = useState('');

  const [title, setTitle] = useState('');

  const [summary, setSummary] = useState('');

  const addTasks = () => {
    setEvents((events) => [
      ...events,
      { tasks: tasks, start: start, end: end, title: title, summary: summary },
    ]);
    console.log(tasks);
  };

  const eventClicked = (event) => {
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Birthday</Text>
      <TextInput
        placeholder="Starting date"
        style={styles.input}
        onChangeText={(task) => setStart(task)}
      />

      <TextInput
        placeholder=" Ending date"
        style={styles.input}
        onChangeText={(task) => setEnd(task)}
      />
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        onChangeText={(task) => setTitle(task)}
      />

      <TextInput
        placeholder="Enter summary"
        style={styles.input}
        onChangeText={(task) => setSummary(task)}
      />

      <TouchableOpacity style={styles.btn} onPress={addTasks}>
        <Text> Add</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          events={events}
          width={width}
          size={60}
          scrollToFirst
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 290,
    height: 50,
    backgroundColor: 'gray',
    padding: 25,
    borderRadius: 25,
    margin: 10,
    marginLeft: 20,
  },

  btn: {
    backgroundColor: 'red',
    width: 150,
    height: 40,
    marginLeft: 30,
    paddingLeft: 50,
    paddingTop: 10,
    borderRadius: 25,
  },
});
