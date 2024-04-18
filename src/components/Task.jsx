import { View, Text ,StyleSheet, Pressable, ScrollView, Image} from 'react-native'
import Colors from "../Utils/Colors"
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const index = () => {
    const todos= [];
    var yourPicture = require ('../assets/start.png');
    return(
      <>
        <View style={styles.pressableList}>
            <Pressable
            style={styles.pressable}>
            <Text style={{ color: "white", textAlign: "center" }}>All</Text>
            </Pressable>
            <Pressable
                style={styles.pressable}>
            <Text style={{ color: "white", textAlign: "center" }}>Person</Text>
            </Pressable>
            <Pressable
            style={styles.pressable}>
            <Text style={{ color: "white", textAlign: "center" }}>Work</Text>
            </Pressable>
            <View style= {{flex:1, alignItems:'flex-end'}}>
                <Pressable onPress={() => setModalVisible(!isModalVisible)}>
                 <Ionicons name="add" size={30} color={Colors.WHITE} backgroundColor={Colors.PRIMARY}  />
                </Pressable>
            </View>
        </View>

        
        <ScrollView style={{flex:1}}>
          <View style={{padding:10}}>
            {todos?.length>10 ? (
              <View></View>
            ):(
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
                <Image
                style={{ width: 200, height: 200, resizeMode: "contain" }}
                source={yourPicture}
              />
              <Text style={{fontSize:16, marginTop:10, fontWeight:900, textAlign:'center'}}>Chả có gì</Text>
              </View>
            )}
        </View>
        </ScrollView>
    </>    
)
}
export default index



const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    pressableList: {
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
    },
    pressable:{
        backgroundColor: Colors.PRIMARY,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
      }
  });