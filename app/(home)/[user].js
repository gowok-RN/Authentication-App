import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import moment from "moment";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import axios from "axios";

const User = () => {
  const params = useLocalSearchParams();
  const [currentDate, setCurrentDate] = useState(moment());
  const [attendanceStatus, setAttendanceStatus] = useState("present");

  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };

  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };

  const formatDate = (date) => {
    return date.format("MMMM D, YYYY");
  };

  const submitAttendance = async () => {
    try {
      const attendanceData = {
        employeeId: params?.id,
        employeeName: params?.name,
        date: currentDate.format("MMMM D, YYYY"),
        status: attendanceStatus,
      };
      const response = await axios.post(
        "http://192.168.24.185:8083/attendance",
        attendanceData
      );
      if (response.status === 200) {
        Alert.alert(
          `Attendance submitted successfully for ${params?.name}`
        );
      }
    } catch (error) {
      console.log("error submitting attendance", error);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-center items-center ml-auto mr-auto mx-2 gap-1">
        <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
      </View>
      <Pressable
        style={{
          marginVertical: 10,
          marginHorizontal: 12,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 8,
            padding: 10,
            backgroundColor: "#4b6cb7",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>
            {params?.name.charAt(0)}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {params?.name}
          </Text>
          <Text style={{ color: "gray", marginTop: 5 }}>
            {params?.designation}({params?.id})
          </Text>
        </View>
      </Pressable>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 12 }}>
        Basic Pay: {params?.salary}
      </Text>
      <View style={{ marginHorizontal: 12 }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            letterSpacing: 3,
            marginTop: 7,
          }}
        >
          ATTENDANCE
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => setAttendanceStatus("present")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "present" ? (
              <FontAwesome name="dot-circle-o" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Present</Text>
          </Pressable>
          <Pressable
            onPress={() => setAttendanceStatus("Absent")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "Absent" ? (
              <FontAwesome name="dot-circle-o" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Absent</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => setAttendanceStatus("halfday")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "halfday" ? (
              <FontAwesome name="dot-circle-o" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Half Day</Text>
          </Pressable>
          <Pressable
            onPress={() => setAttendanceStatus("holiday")}
            style={{
              backgroundColor: "#C4E0E5",
              padding: 10,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
            }}
          >
            {attendanceStatus === "holiday" ? (
              <FontAwesome name="dot-circle-o" size={24} color="black" />
            ) : (
              <Entypo name="circle" size={24} color="black" />
            )}
            <Text>Holiday</Text>
          </Pressable>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
          <TextInput
            style={{
              borderRadius: 6,
              marginTop: 10,
              borderWidth: 2,
              borderColor: "#E0E0E0",
              padding: 10,
              flex: 1,
            }}
            placeholder="Advance/Loans"
            placeholderTextColor="black"
          />
          <TextInput
            style={{
              borderRadius: 6,
              marginTop: 10,
              borderWidth: 2,
              borderColor: "#E0E0E0",
              padding: 10,
              flex: 1,
            }}
            placeholder="Extra Bonus"
            placeholderTextColor="black"
          />
        </View>
        <Pressable
          onPress={submitAttendance}
          style={{
            padding: 15,
            backgroundColor: "#00c6ff",
            width: 200,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 6,
          }}
        >
          <Text
            style={{ textAlign: "center", fontWeight: "500", color: "white" }}
          >
            Submit Attendance
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
