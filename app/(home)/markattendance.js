import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const markattendance = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const goToNextDay = () => {
    const nextDate = moment(currentDate).add(1, "days");
    setCurrentDate(nextDate);
  };
  const goToPrevDay = () => {
    const prevDate = moment(currentDate).subtract(1, "days");
    setCurrentDate(prevDate);
  };
  const formatDate = (date) => {
    return date.format("MMMM D,YYYY");
  };
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://192.168.24.185:8083/employees");

        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching the employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);
  const [attendance, setAttendance] = useState([]);
  const fetchAttendanceData = async () => {
    try {
      const response = await axios.get(`http://192.168.24.185:8083/attendance`, {
        params: {
          date: currentDate.format("MMMM D,YYYY"),
        },
      });
      setAttendance(response.data);
    } catch (error) {
      console.log("error fetching attendance data", error);
    }
  };
  useEffect(() => {
    fetchAttendanceData();
  }, [currentDate]);
  const employeeWithAttendance = employees.map((employee) => {
    const attendanceRecord = attendance.find(
      (record) => record.employeeId === employee.employeeId
    );
    return {
      ...employee,
      status: attendanceRecord ? attendanceRecord.status : "",
    };
  });
  return (
    <View className="flex-1 bg-white">
      <Pressable>
        <View className="flex-row justify-center items-center ml-auto mr-auto mx-2 gap-10">
          <AntDesign
            onPress={goToPrevDay}
            name="left"
            size={24}
            color="black"
          />
          <Text>{formatDate(currentDate)}</Text>
          <AntDesign
            onPress={goToNextDay}
            name="right"
            size={24}
            color="black"
          />
        </View>
        <View style={{ marginHorizontal: 12 }}>
          {employeeWithAttendance.map((item, index) => (
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/[user]",
                  params: {
                    name: item.employeeName,
                    id: item.employeeId,
                    salary: item?.salary,
                    designation: item?.designation,
                  },
                });
              }}
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginVertical: 10,
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
                  {item?.employeeName?.charAt(0)}
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item?.employeeName}
                </Text>
                <Text style={{ color: "gray", marginTop: 5 }}>
                  {item?.designation}({item?.employeeId})
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </View>
  );
};

export default markattendance;

const styles = StyleSheet.create({});
