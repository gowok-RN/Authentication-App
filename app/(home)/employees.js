import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
const employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get("http://192.168.93.185:8082/employees");
        
        setEmployees(response.data);
      } catch (error) {
        console.log("error fetching the employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);
  console.log(employees);
  return (
    <View className="flex-1 bg-white ">
      <View className="flex-row items-center bg-white">
        <Ionicons className="ml-10" name="arrow-back" size={24} color="black" />
        <Pressable
          className="flex-row items-center gap-1 bg-white h-40 rounded-sm flex-1"
          style={{ marginHorizontal: 7 }}
        >
          <AntDesign name="search1" size={20} color="black" />
        </Pressable>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          className="flex-1"
          placeholder="Search"
        />
        {employees.length > 0 && (
          <View>
            <Pressable>
              <AntDesign name="pluscircle" size={24} color="black" />
            </Pressable>
          </View>
        )}
      </View>
      <Pressable onPress={() => router.push("/(home)/adddetails")}>
        <AntDesign name="pluscircle" size={24} color="#0072b1" />
      </Pressable>
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
