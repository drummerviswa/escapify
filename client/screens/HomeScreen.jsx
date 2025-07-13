import { useColorScheme } from "nativewind";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Switch } from "react-native-switch";
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NavBar from "../components/NavBar";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import StatsCards from "../components/StatsCards";
import Upcoming from "../components/Upcoming";
import Todays from "../components/Todays";

const THEME_KEY = "theme";

const HomeScreen = ({ navigation }) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [theme, setTheme] = useState(colorScheme || "light");
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem(THEME_KEY);
        if (storedTheme) {
          setTheme(storedTheme);
          setColorScheme(storedTheme);
        }
      } catch (error) {
        console.error("Failed to load theme:", error);
      }
    };

    loadTheme();
  }, []);
  const [upcomingClasses, setUpcomingClasses] = useState([
    {
      title: "Data structure and Algorithms",
      date: "27-07-2024",
      time: 1,
    },
    {
      title: "Computer Architecture",
      date: "27-07-2024",
      time: 3,
    },
    {
      title: "Technical Transforms and Partial Derviatives",
      date: "27-07-2024",
      time: 4,
    },
  ]);
  const snapPoints = useMemo(() => ["50%"], []);
  const bottomSheetRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleThemeChange = async () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setColorScheme(newTheme);

    try {
      await AsyncStorage.setItem(THEME_KEY, newTheme);
    } catch (error) {
      console.error("Failed to save theme:", error);
    }
  };
  const handlePress = () => {
    if (!open) {
      bottomSheetRef.current?.collapse();
    } else {
      bottomSheetRef.current?.close();
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className={colorScheme == "dark" ? "bg-black" : ""}>
        <NavBar opened={open} press={handlePress} />
      </View>
      <GestureHandlerRootView>
        <View className="h-screen w-screen dark:bg-black">
          <View className="h-2/6">
            <StatsCards navigation={navigation} />
          </View>
          <View className="flex dark:bg-black pl-2">
            <Upcoming classes={upcomingClasses} />
          </View>
          <View className="flex dark:bg-black pl-2">
            <Todays classes={upcomingClasses} />
          </View>
        </View>
        <BottomSheet
          backgroundStyle={{
            backgroundColor: colorScheme === "dark" ? "crimson" : "snow",
            borderBlockColor: "white",
          }}
          ref={bottomSheetRef}
          index={-1}
          enableOverDrag
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backdropComponent={(backdropProps) => (
            <BottomSheetBackdrop
              {...backdropProps}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              enableTouchThrough={true}
              style={[
                { backgroundColor: "rgba(0, 0, 0)" },
                StyleSheet.absoluteFillObject,
              ]}
            />
          )}
          onChange={() => setOpen((old) => !old)}
        >
          <View className="flex justify-center pt-3">
            <View className="flex p-2 items-center justify-around flex-row">
              <Text className="text-black text-xl font-bold">Theme</Text>
              <Switch
                value={colorScheme == "dark"}
                onValueChange={handleThemeChange}
                activeText={"dark"}
                inActiveText={"light"}
                activeTextStyle={{ fontSize: 14 }}
                inactiveTextStyle={{ fontSize: 14 }}
                switchWidthMultiplier={2.3}
                circleSize={30}
                circleBorderWidth={0}
                backgroundActive={"black"}
                backgroundInactive={"gray"}
                circleActiveColor={"white"}
                circleInActiveColor={"#000000"}
              />
            </View>
            <View className="flex mt-20 py-6 items-center flex-row justify-evenly">
              <Text className="text-black text-2xl font-bold">Profile</Text>
              <TouchableOpacity
                className="p-4 bg-black rounded-full"
                onPress={() => navigation.navigate("Profile")}
              >
                <Image
                  className="h-8 w-8"
                  source={require("../assets/moon.jpg")}
                />
              </TouchableOpacity>
            </View>
            <View className="flex items-center flex-row justify-evenly">
              <TouchableOpacity
                className="w-4/6 py-6 bg-crimson dark:bg-black rounded-lg"
                onPress={() => console.log("Logout")}
              >
                <Text className="text-center text-xl text-white">Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default HomeScreen;
