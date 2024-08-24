import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {useRouter } from "expo-router";
import SearchResults from "../../components/SearchResults";
const employees = () => {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();
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
  console.log(employees);
  return (
    <View className="flex-1 bg-white ">
      <View className="flex-row items-center bg-white">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Pressable
          style={{
            marginHorizontal: 7,
            borderRadius: 4,
            height: 40,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
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
            <Pressable onPress={() => router.push("/(home)/adddetails")}>
              <AntDesign name="pluscircle" size={24} color="black" />
            </Pressable>
          </View>
        )}
      </View>
      {employees.length > 0 ? (
        <SearchResults data={employees} input={input} setInput={setInput} />
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign
              className="mt-3"
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default employees;

const styles = StyleSheet.create({});
