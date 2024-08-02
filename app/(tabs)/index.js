import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Feather,
  Octicons,
  MaterialIcons,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient className="flex-1" colors={["#7F7FD5", "#E9E4F0"]}>
        <View className="p-3">
          <View className="flex-row items-center justify-between">
            <Feather name="bar-chart" size={24} color="black" />
            <Text className="text-xl  font-bold">
              Employee Management System
            </Text>
            <MaterialIcons name="lock" size={24} color="black" />
          </View>
          <View className="mt-5">
            <View className="mt-10 flex-row items-center gap-5 ">
              <Pressable
                onPress={() => router.push("/(home)/employees")}
                className=" p-12 justify-center items-center flex-1 "
                style={{ backgroundColor: "#D3CCE3", borderRadius: 6 }}
              >
                <View
                  className=" bg-white items-center justify-center"
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                >
                  <Ionicons name="people-sharp" size={24} color="black" />
                </View>
                <Text className="mt-7 font-semibold">Employee List</Text>
              </Pressable>
              <Pressable
                className="p-12 justify-center items-center flex-1"
                style={{ backgroundColor: "#D3CCE3", borderRadius: 6 }}
              >
                <View
                  className=" bg-white items-center justify-center"
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                >
                  <Ionicons name="people-sharp" size={24} color="black" />
                </View>
                <Text className="mt-7 font-semibold">Mark Attendance</Text>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 7,
              marginTop: 20,
            }}
          >
            <Pressable
              className="flex-row items-center"
              style={{
                borderRadius: 6,
                marginVertical: 10,
                backgroundColor: "#BE93C5",
                padding: 10,
              }}
            >
              <View
                className="p-7 w-45 h-45 bg-white items-center justify-center"
                style={{ borderRadius: 7 }}
              >
                <Ionicons name="newspaper-outline" size={24} color="black" />
              </View>
              <Text className="ml-10 text-base font-semibold flex-1">
                Attendance Report
              </Text>
              <View className="w-35 h-35 rounded-lg items-center justify-center bg-white">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              style={{
                borderRadius: 6,
                marginVertical: 10,
                backgroundColor: "#BE93C5",
                padding: 10,
              }}
            >
              <View
                className="p-7 w-45 h-45 bg-white items-center justify-center"
                style={{ borderRadius: 7 }}
              >
                <Octicons name="repo-pull" size={24} color="black" />
              </View>
              <Text className="ml-10 text-base font-semibold flex-1">
                Summary Report
              </Text>
              <View className="w-35 h-35 rounded-lg items-center justify-center bg-white">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              style={{
                borderRadius: 6,
                marginVertical: 10,
                backgroundColor: "#BE93C5",
                padding: 10,
              }}
            >
              <View
                className="p-7 w-45 h-45 bg-white items-center justify-center"
                style={{ borderRadius: 7 }}
              >
                <Octicons name="report" size={24} color="black" />
              </View>
              <Text className="ml-10 text-base font-semibold flex-1">
                All Generate Reports
              </Text>
              <View className="w-35 h-35 rounded-lg items-center justify-center bg-white">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              style={{
                borderRadius: 6,
                marginVertical: 10,
                backgroundColor: "#BE93C5",
                padding: 10,
              }}
            >
              <View
                className="p-7 w-45 h-45 bg-white items-center justify-center"
                style={{ borderRadius: 7 }}
              >
                <Ionicons name="people" size={24} color="black" />
              </View>
              <Text className="ml-10 text-base font-semibold flex-1">
                Overtime Employees
              </Text>
              <View className="w-35 h-35 rounded-lg items-center justify-center bg-white">
                <Entypo name="chevron-right" size={24} color="black" />
              </View>
            </Pressable>
          </View>
          <View className="mt-3">
            <View>
              <View className="flex-row mt-20 items-center gap-5">
                <View
                  style={{ backgroundColor: "#f79d00", borderRadius: 6 }}
                  className="p-12 items-center justify-center flex-1"
                >
                  <View className="w-35 h-35 bg-white rounded-sm items-center justify-center">
                    <MaterialCommunityIcons
                      name="guy-fawkes-mask"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text className="mt-7 text-base">Attendance Criteria</Text>
                </View>
                <View
                  style={{ backgroundColor: "#ABCABA", borderRadius: 6 }}
                  className=" p-12 items-center justify-center flex-1"
                >
                  <View className="w-35 h-35 bg-white rounded-sm items-center justify-center">
                    <Feather name="bar-chart" size={24} color="black" />
                  </View>
                  <Text className="mt-7 text-base">Increased Workflow</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mt-3">
            <View>
              <View className="flex-row mt-20 items-center gap-5">
                <View
                  style={{ backgroundColor: "#D3CCE3", borderRadius: 6 }}
                  className="p-12 items-center justify-center flex-1"
                >
                  <View className="w-35 h-35 bg-white rounded-sm items-center justify-center">
                    <MaterialCommunityIcons
                      name="guy-fawkes-mask"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text className="mt-7 text-base">Cost Savings</Text>
                </View>
                <View
                  style={{ backgroundColor: "#bdc3c7", borderRadius: 6 }}
                  className=" p-12 items-center justify-center flex-1"
                >
                  <View className="w-35 h-35 bg-white rounded-sm items-center justify-center">
                    <Feather name="bar-chart" size={24} color="black" />
                  </View>
                  <Text className="mt-7 text-base">Employee Performance</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
