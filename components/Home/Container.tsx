import React, { useRef, useState } from "react";
import { LayoutChangeEvent, SectionList, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedScrollHandler, withSpring, interpolate, Extrapolation, clamp, withClamp } from "react-native-reanimated";
import Restaurants from "@/components/Home/Restaurants";
import restaurants from "@/components/Data";
import NewSubHeader from "./NewSubHeader";
import Cuisine from "./Cuisine";
import Promotions from "./Promotions";
import Search from "./Search";
import Header from "./Header";
import { color, primary } from "@/constants/Colors";

const exampleData = Array.from({ length: 100 }, (_, i) => i + 1);
const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

export default function Container() {
  const translateY = useSharedValue(0); // Shared value to track header translation
  const scrollY = useSharedValue(0); // Shared value for scroll position
  const previousScrollY = useSharedValue(0); // Track the previous scroll position
  const clampedScrollY = useSharedValue(0); // Clamped scroll value
  const [customHeight, setCustomHeight] = useState({
    stickyHeader: 0,
    promotion: 0,
  });

  const onLayout = (type: "stickyHeader" | "promotion") => 
    (event: LayoutChangeEvent) => {
      const height = event.nativeEvent.layout.height;
      if (customHeight[type] !== height) {
        setCustomHeight(prev => ({ ...prev, [type]: height }));
      }
    };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentScrollY = event.contentOffset.y;
      scrollY.value = currentScrollY;

      // Calculate the scroll direction
      const isScrollingDown = currentScrollY > previousScrollY.value;
      
      // Update the clamped scroll value based on direction
      if (isScrollingDown) {
        // Hide the header when scrolling up (downwards in content)
        clampedScrollY.value = interpolate(currentScrollY, [0, customHeight.stickyHeader ], [0, -50]);
      } else {
        // Show the header when scrolling down (upwards in content)
        clampedScrollY.value = interpolate(currentScrollY, [0, 100], [10, 10]);
      }

      // Update the translation of the header
      translateY.value = -clampedScrollY.value;

      // Update the previous scroll position
      previousScrollY.value = currentScrollY;
    },
  });

  const headerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          translateY.value,
          [0, 100], // Clamp values for the animation range
          [0, -300], // Translate the header upwards by 100px
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <Animated.View style={[styles.header, headerStyle]}>
        <Header headerLayout={onLayout("stickyHeader")} />
      </Animated.View>

      <AnimatedSectionList
        sections={restaurants}
        renderSectionHeader={({ section }) => (
          <View style={styles.subContainer}>
            <NewSubHeader headerTitle={section.Title} btnText="More" />
            <Restaurants data={section.data} />
          </View>
        )}
        renderItem={() => null}
        ListHeaderComponent={() => (
          <View onLayout={onLayout("promotion")} style={[styles.promotion, { marginTop: customHeight.stickyHeader - 45,backgroundColor:color.green }]}>
            {/* <Search /> */}
            <Promotions />
          </View>
        )}
        ListFooterComponent={() => (
          <>
            <Cuisine />
            {exampleData.map(num => (
              <View key={num}>
                <Text>{num}</Text>
              </View>
            ))}
          </>
        )}
        ListFooterComponentStyle={{backgroundColor:color.white,}}
        onScroll={scrollHandler} // Reanimated scroll handler
        scrollEventThrottle={16} // For smoother animation
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary.white,
  },
  subContainer:{
    backgroundColor:color.white,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#003366',
    shadowColor: "#fff",
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 1,
    elevation: 5,
    zIndex: 999,
    height: 100,
  },
  promotion: {
    width: '100%',
    paddingHorizontal: 20,
    shadowColor: "#fff",
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
});
