import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
        {/* Today's Task */}
        <View Styles={styles.tasksWrapper}>
          <Text styles={styles.sectionTitle}>Today's tasks</Text>
          
          <View style={styles.items}>
            {/* This is where the task will go! */}
            <Task text={'Task 1'} />
            <Task text={'Task 2'} />
            <Task />
            <Task />
            <Task />
            <Task />
          </View>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});
