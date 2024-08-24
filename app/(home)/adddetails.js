import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const addDetails = () => {
  const [name, setName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [designation, setDesignation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [dob, setDob] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAdress] = useState("");
  const handleRegister = () => {
    const employeeData = {
      employeeName:name,
      employeeId: employeeId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      activeEmployee: true,
      salary: salary,
      address: address,
    };
    console.log("Sending employee data:", employeeData); // Add this line
    axios
      .post("http://192.168.24.185:8083/addEmployee",employeeData)
      .then((response) => {
        Alert.alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setName("");
        setEmployeeId("");
        setDesignation("");
        setMobileNo("");
        setDob("");
        setjoiningDate("");
        setSalary("");
        setAdress("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Fail",
          "An error occurred during registration"
        );
        console.log("Registration has failed", error);
      });
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-10 ">
        <Text className="font-bold text-lg">Add a New Employee</Text>
        <TextInput
          style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
          placeholder="Nigeria"
          placeholderTextColor={"black"}
          className="p-1 mt-1 rounded-lg"
        />
        <View className="my-1">
          <Text className="font-bold text-lg">
            Full Name(First and last Name)
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="enter your name"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View>
          <Text className="font-bold text-lg">Employee Id</Text>
          <TextInput
            value={employeeId}
            onChangeText={(text) => setEmployeeId(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Employee Id"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View className="my-1">
          <Text className="font-bold text-lg">Designation</Text>
          <TextInput
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Designation"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View>
          <Text className="font-bold text-lg">Mobile Number</Text>
          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Mobile No"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View className="my-1">
          <Text className="font-bold text-lg">Date of Birth</Text>
          <TextInput
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Enter Date of Birth"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View>
          <Text className="font-bold text-lg">Joining Date</Text>
          <TextInput
            value={joiningDate}
            onChangeText={(text) => setjoiningDate(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Joining Date"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View className="flex-row items-center justify-between mt-1">
          <Text>Active Employee</Text>
          <Text>True</Text>
        </View>
        <View className="my-1">
          <Text className="font-bold text-lg">Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Enter Salary"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <View>
          <Text className="font-bold text-lg">Address</Text>
          <TextInput
            value={address}
            onChangeText={(text) => setAdress(text)}
            style={{ borderColor: "#D0D0D0", borderWidth: 1 }}
            placeholder="Enter Address"
            placeholderTextColor={"black"}
            className="p-1 mt-1 rounded-lg"
          />
        </View>
        <Pressable
          onPress={handleRegister}
          style={{ backgroundColor: "#ABCABA", borderRadius: 5 }}
          className="mt-2 p-2 justify-center items-center"
        >
          <Text className="font-bold text-white">Add Employee</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default addDetails;

const styles = StyleSheet.create({});
