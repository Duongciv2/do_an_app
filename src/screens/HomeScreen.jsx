import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from './Calendar';
import Task from '../components/Task';
import Footer from '../components/footer';
import ProfileScreen from './UpdateProfile'; // Thêm màn hình Profile

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
<View style={styles.tabBarContainer}>
  <Tab.Navigator
    tabBarOptions={{
      style: {
        position: 'absolute', // Thay đổi position thành absolute
        bottom: 0, // Thêm bottom: 0 để đẩy thanh tab xuống dưới cùng
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
