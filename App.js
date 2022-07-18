import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, DynamicColorIOS } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const windowwIDHeight = Dimensions.get('window').height;

export default function App() {
  const [city, setCity] = useState("도시 불러오는 중");
  const [days, setDays] = useState([]);
  const API = "5cf405a74a9e4d1a795b2aaeaffa9264";
  const [ok, setOk] = useState(true);
  const getWeaather = async () => {
   
    const { granted } = await Location.requestForegroundPermissionsAsync(); //사용자 위치정보 물어보는 함수
    if (granted == false) {
      //유저가 사용자 위치정보 거절함
      setOk(false);
    } else {
      console.log("허락함");
    };
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy: 5}) ; //사용자의 현위치를 가져옴 
    // console.log(location);
    const currentCity = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps: false}); //위도 경도로 내 위치 알아버리기~
    setCity(currentCity[0].city);
    setLocation();
  };

  useEffect(() => {
    getWeaather();
  }, []);

  return (
    //view의 기본값 flex container, flex-direction의 기본값: column, row가 아님
    //리액트 네이티브에선 반응형 디자인을 고려해야함, width와 height는 사용 x
    //따라서 비율적으로 사용
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityText}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        co={styles.weather}
        indicatorStyle="white" //하단 스크롤바 color 안드로이드느 ㄴ안됨
        pagingEnabled //스크롤 쫀쫀하게
        contentContainerStyle={styles.weather}
      >
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
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center", //세로
    alignItems: "center", //가로
  },
  cityText: {
    fontSize: 68,
    fontWeight: "600",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH, //스크린 크기로
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
  },
  temp: {
    fontSize: 178,
    marginTop: 50,
  },
  sunny: {
    marginTop: -20,
    fontSize: 60,
  },
});
