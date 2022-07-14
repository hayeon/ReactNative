import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'react-native-web';

export default function App() {
  return ( //view의 기본값 flex container, flex-direction의 기본값: column, row가 아님 
  //리액트 네이티브에선 반응형 디자인을 고려해야함, width와 height는 사용 x
  //따라서 비율적으로 사용 
   <View style={styles.container}>
    <StatusBar style="dark"></StatusBar>
    <View style={styles.city}>
      <Text style={styles.cityText}>인천광역시</Text>
    </View>
    <ScrollView horizontal co={styles.weather}> 
    {/* ScrollView는 style props가 아닌 container style */}
    
      <View style={styles.day}>
      <Text style={styles.temp}> 27</Text>
      <Text style={styles.sunny}> SUNNY</Text>
      </View>
      <View style={styles.day}>
      <Text style={styles.temp}> 27</Text>
      <Text style={styles.sunny}> SUNNY</Text>
      </View>
    </ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato"
  },
  city: {
    flex: 1,
    justifyContent: "center", //세로
    alignItems: "center", //가로 
  },
  cityText : {
    fontSize: 68,
    fontWeight: "600",
  },
  weather: {
  },
  day : {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
  },
  temp: {
    fontSize:178,
    marginTop: 50,
  },
  sunny : {
    marginTop: -20,
    fontSize: 60,
  }  
});

