import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './Calendar';
import Task from '../components/Task';
import Footer from '../components/footer';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
<View style={styles.tabBarContainer}>
  <Tab.Navigator
    tabBarOptions={{
      style: {
        bottom: 0,
        left: 0,
        right: 0,
      },
    }}
  >
    <Tab.Screen name="Home" component={Task} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 24,
    justifyContent: 'flex-start',
  },
  tabBarContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
