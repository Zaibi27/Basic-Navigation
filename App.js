import * as React from 'react';
import { View, Text , Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { SimpleLineIcons } from '@expo/vector-icons';
import {Ionicons , MaterialIcons , MaterialCommunityIcons} from "@expo/vector-icons" ;
// import { SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    activeColor="white"
    inactiveColor="black"
    barStyle={{ backgroundColor: 'darkgray'  }}
    shifting = {true}
    
    
    
  >
    <Tab.Screen name = "Home" component = {DashboardScreen} 
    options = {{
      tabBarIcon: ({color}) =>  <Ionicons name="md-home" size={24} color= {color} />  
      
     
    }}/>
      
    <Tab.Screen name = "Explore" component = {ExploreScreen} 
    options = {{
      tabBarIcon: ({color}) => <MaterialIcons name="explore" size={24} color= {color}  
     
      />,
        
      
    }} />
    <Tab.Screen name = "Subscriptions" component = {SubscriptionScreen} 
    options = {{
      tabBarIcon: ({color}) => <MaterialIcons name="subscriptions" size={24} color= {color} />
    }} />
    <Tab.Screen name = "Inbox" component = {InboxScreen} 
    options = {{
      tabBarIcon: ({color}) => <MaterialIcons name="inbox" size={24} color= {color} />
    }} />
    <Tab.Screen name = "Library" component = {LibraryScreen} 
    options = {{
      tabBarIcon: ({color}) => <MaterialIcons name="library-music" size={24} color={color}/>
    }} />



    </Tab.Navigator>
  );
}

const DashboardScreen = () => {
  return (
  <View style={styles.container}>
    <Text style= {{color: "red", padding:  20}}> Welcome to the App </Text>
    
  </View>
  

) ;
}
const ExploreScreen = () =>  {
  return (
  <View style={styles.container}>
    <Text>Explore data shown here </Text>
    
    </View>
  );
}
const InboxScreen= () =>  {
  return (
  <View style={styles.container}>
    <Text>No data to show in inbox</Text>
    
    </View>
  );
}
const LibraryScreen = () =>  {
  return (
  <View style={styles.container}>
    <Text>Library data </Text>
    
    </View>
  );
}
const SubscriptionScreen = () =>  {
  return (
  <View style={styles.container}>
    <Text> Your Subscriptions</Text>
    
    </View>
  );
}



function MyDrawer() {
  return (
    <Drawer.Navigator
    openByDeafult = {true}
    drawerType = "slide"
   
    drawerStyle = {{
      backgroundColor : "coral" ,
      headerTintColor : "black" ,
      width : 200 ,
            

    }}
    >
      <Drawer.Screen name="Home" component={StackNavigator} 
      options = {{
      drawerLabel: "go to Home" ,
      drawerIcon: () => <SimpleLineIcons name="home" size={30} color="white" />
      
      }}/>
      
    </Drawer.Navigator>
  );
}

function getHeaderTitle(route) {
  // Access the tab navigator's state using `route.state`
  console.log(route);
  const routeName = route.state
    ? // Get the currently active route name in the tab navigator
      route.state.routes[route.state.index].name
    : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
      // In our case, it's "Feed" as that's the first screen inside the navigator
      route.params?.screen || 'Home';

  
  return routeName;
}


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Welcome" 
       component={BottomTabs} 
       options={({route , navigation}) => ({
        headerTitle: getHeaderTitle(route),
        headerTitleAlign: "center",
        headerTintColor: "blue" ,
        headerLeft:  () =>  
        <Ionicons name="md-menu" size={34} color="gray" 
        style = {{paddingLeft: 10}} 
        onPress = { () => navigation.openDrawer()}/>
              })
      }
          
         />
        
        
        
        
      
       </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
    <MyDrawer/>
      
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
