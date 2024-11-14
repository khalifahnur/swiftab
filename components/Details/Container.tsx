import React from "react";
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
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import About from "./About";
import Menu from "./Menu";
import Reviews from "./Reviews";
import Info from "./Info";
import { color } from "@/constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeToWishlist } from "@/redux/WishlistSlice";
import { RootState } from "@/redux/store/Store";

const { height: sHeight, width: sWidth } = Dimensions.get("screen");
const ImageHeight = 300;

const Container = () => {
  const params = useLocalSearchParams();
  const data = JSON.parse(params.data);
  console.log("data","=>",data)
  const menu = data.menu;
  console.log("menu","=>",menu)
  const reviews = data.review;
  console.log("review","=>",reviews)

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishlistCart = useSelector((state: RootState) => state.wishlist.wishlist);
  const dataIndex = wishlistCart.some((item) => item.id === data?.id);

  const HandleWishlist = () => {
    if (!dataIndex) {
      dispatch(addToWishlist(data));
    } else {
      dispatch(removeToWishlist(data.id));
    }
  };

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

 
  const headerViewAnimatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, ImageHeight],
      ["transparent", color.green]
    );
    return { backgroundColor };
  });

 

  


  const titleAnimatedStyles = (fadeIn: boolean) =>
    useAnimatedStyle(() => {
      const opacity = interpolate(
        scrollY.value,
        [0, 150, ImageHeight], 
        fadeIn ? [0, 0, 1] : [1, 0.5, 0], 
        Extrapolation.CLAMP
      );
      return { opacity };
    });

const animatedImageStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, ImageHeight+20], 
      [1.4, 1],
      Extrapolation.CLAMP
    );
    const translateY = interpolate(
      scrollY.value,
      [-ImageHeight, 0, ImageHeight],
      [ImageHeight * 0.3, 0, ImageHeight * 0.5], // combines up and down effects
      Extrapolation.CLAMP
    );
  
    return { transform: [{ scale },] };
  });

const scrollAnimatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [ 0, ImageHeight + 300], 
      [ 0, -ImageHeight - 45 ],
      Extrapolation.CLAMP
    );
    return { transform: [{ translateY }] };
  });

   // const scrollAnimatedStyles = useAnimatedStyle(() => {
  //   const translateY = interpolate(
  //     scrollY.value,
  //     [0, 320],
  //     [0, -ImageHeight - 40],
  //     Extrapolation.CLAMP
  //   );
  //   return { transform: [{ translateY }] };
  // });



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
        <TouchableOpacity style={styles.heartButton} onPress={HandleWishlist}>
          <AntDesign
            name="heart"
            size={20}
            color={dataIndex ? "red" : "white"}
          />
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
              <Animated.Text style={[styles.title, titleAnimatedStyles(false)]}>
                {data.restaurantName}
              </Animated.Text>
              <Animated.Text style={[styles.title2, titleAnimatedStyles(true)]}>
                {data.restaurantName}
              </Animated.Text>
            
          </Animated.View>
          <Animated.ScrollView
            onScroll={onScroll}
            scrollEventThrottle={16} // for smoother animation handling
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
            removeClippedSubviews={true}
            style={{ backgroundColor: color.gray, zIndex: 99 }}
          >
            <View style={styles.innerContainer}>
              <Info data={data} />
              <View style={styles.divider} />
              <View>
                <About data={data} />
                <Menu menu={menu} />
                <Reviews reviews={reviews} />
              </View>
            </View>
          </Animated.ScrollView>
        </Animated.View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() =>
            router.navigate({
              pathname: "/screens/reserve",
              params: { data: JSON.stringify(data) },
            })
          }
        >
          <Text style={styles.reserveButtonText}>Reserve Now</Text>
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
    height:100
  },
  title: {
    fontSize: 38,
    fontWeight: "600",
    color: "orange",
    marginHorizontal: 20,
    position: "absolute",
    top:0,
    left:0,
  },
  title2: {
    fontSize: 18,
    fontWeight: "500",
    color: "orange",
    marginHorizontal: 20,
    textAlign: "center",
    
  },
  innerContainer: {
    margin: 20,
  },
  divider: {
    width: "100%",
    borderWidth: 1,
    marginTop: 20,
    borderColor: "#999",
  },
  footer: {
    backgroundColor: color.gray,
    padding: 10,
  },
  reserveButton: {
    padding: 20,
    backgroundColor: color.green,
    borderRadius: 10,
  },
  reserveButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  imageOverlay: {
    height: ImageHeight + 50,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Container;
