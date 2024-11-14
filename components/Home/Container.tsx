import React, { useState } from "react";
import { LayoutChangeEvent, SectionList, StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import Restaurants from "@/components/Home/Restaurants";
import restaurants from "@/components/Data";
import NewSubHeader from "./NewSubHeader";
import Cuisine from "./Cuisine";
import Promotions from "./Promotions";
import Header from "./Header";
import { color, primary } from "@/constants/Colors";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

export default function Container() {
  const translateY = useSharedValue(0);
  const scrollY = useSharedValue(0);
  const previousScrollY = useSharedValue(0);
  const clampedScrollY = useSharedValue(0);
  const [customHeight, setCustomHeight] = useState({ stickyHeader: 0, promotion: 0 });

  const onLayout =
    (type: "stickyHeader" | "promotion") => (event: LayoutChangeEvent) => {
      const height = event.nativeEvent.layout.height;
      if (customHeight[type] !== height) {
        setCustomHeight((prev) => ({ ...prev, [type]: height }));
      }
    };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentScrollY = event.contentOffset.y;
      scrollY.value = currentScrollY;

      const isScrollingDown = currentScrollY > previousScrollY.value;

      if (isScrollingDown) {
        clampedScrollY.value = interpolate(currentScrollY, [0, customHeight.stickyHeader], [0, -50]);
      } else {
        clampedScrollY.value = interpolate(currentScrollY, [0, 100], [10, 10]);
      }

      translateY.value = -clampedScrollY.value;
      previousScrollY.value = currentScrollY;
    },
  });

  const headerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          translateY.value,
          [0, 100],
          [0, -100],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
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
          <View
            onLayout={onLayout("promotion")}
            style={[
              styles.promotion,
              {
                marginTop: customHeight.stickyHeader,
                backgroundColor: color.green,
              },
            ]}
          >
            <Promotions />
          </View>
        )}
        ListFooterComponent={() => (
          <>
            
            <Cuisine />
          </>
        )}
        ListFooterComponentStyle={{ backgroundColor: color.green,flex:1 }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  subContainer: {
    backgroundColor: color.white,
    marginBottom:5
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#003366",
    shadowColor: "#fff",
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 1,
    elevation: 5,
    zIndex:44
  },
  promotion: {
    width: "100%",
    paddingHorizontal: 20,
    shadowColor: "#fff",
    shadowRadius: 5,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
});
