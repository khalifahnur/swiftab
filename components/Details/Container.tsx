import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import Animated, {
  Extrapolation,
  FadeIn,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import SectionTabs from "./SectionTabs";
import About from "./About";
import Menu from "./Menu";
import Reviews from "./Reviews";
import Info from "./Info";
import { makeShareable } from "react-native-reanimated/lib/typescript/reanimated2/shareables";
import { ScrollView } from "react-native";
import { color } from "@/constants/Colors";

export const { height: sHeight, width: sWidth } = Dimensions.get("screen");

const ImageHeight = 280;
const SECTION_HEIGHT = 300;

const HeaderAnim1 = () => {
  const params = useLocalSearchParams();
  const data = JSON.parse(params.data);
  console.log(data);
  const menu = data.menu;
  const reviews = data.review;
  const navigation = useNavigation();

  const visibleIndex = useSharedValue(0);
  const topTabsRef = useRef(null);
  const sectionRef = useRef(null);

  // Refs for section measurements
  const aboutSectionRef = useRef(null);
  const menuSectionRef = useRef(null);
  const reviewSectionRef = useRef(null);

  // Array holding all the section refs for scrolling
  const sections = [aboutSectionRef, menuSectionRef, reviewSectionRef];

  const heights = Array.isArray(data) ? data.map(() => SECTION_HEIGHT) : [];
  // heights => [350,350,350]

  const scrollY = useSharedValue(0);

  const getOffsetStarts = () => {
    "worklet"; // Mark this function as a worklet
    return heights.map((v, i) =>
      heights.slice(0, i).reduce((x, acc) => x + acc, 0)
    );
  };

  const handleOffset = (offset) => {
    const distancesFromTop = getOffsetStarts().map((v) => Math.abs(v - offset));
    const newIndex = distancesFromTop.indexOf(
      Math.min.apply(null, distancesFromTop)
    );

    if (visibleIndex.value !== newIndex) {
      topTabsRef.current?.scrollToIndex({
        index: newIndex,
        animated: true,
      });
    }
    visibleIndex.value = newIndex;
  };

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
    const offset = event.contentOffset?.y;

    if (offset !== undefined) {
      runOnJS(handleOffset)(offset);
    }
  });

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const scrollAnimatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 320],
      [0, -ImageHeight - 40],
      Extrapolation.CLAMP
    );
    return { transform: [{ translateY }] };
  });

  const headerViewAnimatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, 320],
      ["transparent", color.green]
    );
    return { backgroundColor };
  });

  const titleAnimatedStyles = (fadeIn: boolean) =>
    useAnimatedStyle(() => {
      const outputRange = fadeIn ? [0, 0, 1] : [1, 0, 0];
      const opacity = interpolate(scrollY.value, [0, 120, 320], outputRange);
      return { opacity };
    });

  const animatedImageStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 320], [1.4, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    });
    return { transform: [{ scale }] };
  });

  //const exampleData = Array.from({ length: 1000 }, (_, i) => i + 1);
  return (
    <>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={"transparent"} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heartButton}
        >
          <AntDesign name="hearto" size={20} color="#fff" />
        </TouchableOpacity>
        
        <Animated.View style={[styles.headerImage, animatedImageStyles]}>
          <Image
            source={data.image}
            resizeMode="contain"
            style={{ width: sWidth, zIndex: -1 }}
          />
          <LinearGradient
            colors={["transparent", "transparent", "#112233"]}
            style={styles.imageOverlay}
          />
        </Animated.View>

        <Animated.View style={scrollAnimatedStyles}>
          <Animated.View style={[styles.headerView, headerViewAnimatedStyles]}>
            <View>
              <Animated.Text style={[styles.title, titleAnimatedStyles(false)]}>
                {data.restaurantName}
              </Animated.Text>
              <Animated.Text style={[styles.title2, titleAnimatedStyles(true)]}>
                {data.restaurantName}
              </Animated.Text>
            </View>
          </Animated.View>

          <Animated.ScrollView
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
            style={{ backgroundColor: color.gray, zIndex: 99 }}
          >
            <View style={styles.innerContainer}>
              {/* info */}
              <Info data={data} />
              <View
                style={{
                  width: "100%",
                  borderWidth: 1,
                  marginTop: 20,
                  borderColor: "#999",
                }}
              />
              
              {/* Top Tabs */}
              {/* <SectionTabs
                visibleIndex={visibleIndex}
                sectionRef={sectionRef}
                topTabRef={topTabsRef}
                sections={sections}
              /> */}
              
              {/* Section Content */}
              <ScrollView ref={sectionRef}>
                {/* About Section */}
                <View ref={aboutSectionRef}>
                  <About data={data} />
                </View>

                {/* Menu Section */}
                <View ref={menuSectionRef}>
                  <Menu menu={menu} />
                </View>

                {/* Reviews Section */}
                <View ref={reviewSectionRef}>
                  <Reviews reviews={reviews} />
                </View>
              </ScrollView>
            </View>
          </Animated.ScrollView>
        </Animated.View>
      </View>
      {/* footer */}
      <View style={{ backgroundColor: color.gray, padding: 10 }}>
        <TouchableOpacity
          style={{ padding: 20, backgroundColor: color.green, borderRadius: 10 }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Reserve Now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#112233",
  },
  headerImage: {
    width: "100%",
    height: ImageHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1e1e1e" + "30",
    zIndex: 9999,
    position: "absolute",
    top: 5,
    left: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1e1e1e" + "30",
    zIndex: 9999,
    position: "absolute",
    top: 5,
    right: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 15,
  },
  title: {
    fontSize: 38,
    fontWeight: "600",
    color: "orange",
    marginHorizontal: 20,
    position: "absolute",
  },
  title2: {
    fontSize: 18,
    fontWeight: "500",
    color: "orange",
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 35,
  },
  innerContainer: {
    margin: 20,
  },
  listItem: {
    width: 100,
    height: 100,
    borderRadius: 14,
    backgroundColor: "#eee",
    marginRight: 16,
  },
  text: {
    fontSize: 20,
    color: "#eee",
    fontWeight: "600",
  },
  text2: {
    fontSize: 16,
    color: "#112233",
    marginTop: 10,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "justify",
  },
  imageOverlay: {
    height: ImageHeight + 50,
    ...StyleSheet.absoluteFillObject,
  },
});

export default HeaderAnim1;
