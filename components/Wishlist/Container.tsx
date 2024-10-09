import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = () => {
  const data = [
    {
      id: '1',
      name: 'LibertyBite Bistro',
      image: require('@/assets/images/restaurants/res1.jpeg'),
      discount: '10% OFF',
      rating: 4.9,
      time: '15 min',
      cost: '$$$',
      cuisine: 'Italian',
      location: '8502 Preston Rd. Inglewood, Maine 98380',
    },
    {
      id: '2',
      name: 'PatriotPlates Diner',
      image: require('@/assets/images/restaurants/res2.jpeg'),
      discount: '20% OFF',
      rating: 4.8,
      time: '20 min',
      cost: '$$$',
      cuisine: 'Mexican',
      location: '6391 Elgin St. Celina, Delaware 10299',
    },
  ];
  const [wishlist,setWishlist]= useState(true);
  const HandleHeart =()=>{
    setWishlist(false)
  }
  console.log(wishlist)
  const renderItem = ({ item }) => (
    <>
    <View style={styles.card}>
      {/* Restaurant Image */}
      <Image source={item.image} style={styles.image} />

      

      {/* Restaurant Details */}
      <View style={styles.details}>
        <Text style={styles.restaurantName}>{item.name}</Text>

        {/* Wishlist Heart Icon */}
      <TouchableOpacity style={styles.heartIcon} onPress={HandleHeart}>
        <Icon name={wishlist?"heart-sharp":'heart-outline'} size={20} color={wishlist?"red":'#000'} />
      </TouchableOpacity>
        {/* Info Row */}
        {/* <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Icon name="time-outline" size={16} color="#6F7A8A" />
            <Text style={styles.infoText}>{item.time}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="cash-outline" size={16} color="#6F7A8A" />
            <Text style={styles.infoText}>{item.cost}</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="restaurant-outline" size={16} color="#6F7A8A" />
            <Text style={styles.infoText}>{item.cuisine}</Text>
          </View>
        </View> */}

        {/* Location */}
        <Text style={styles.location} ellipsizeMode='tail' numberOfLines={1}>
          <Icon name="location-outline" size={14} color="#6F7A8A" /> {item.location}
        </Text>

        {/* Rating */}
        <View style={styles.ratingContainer}>
          <Icon name="star" size={14} color="orange" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
    </View>
    <View style={styles.divider} />
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={()=>(
        <View style={{paddingVertical:10}}>
            <Text style={{fontSize:22,color:'#000',textAlign:'left',fontWeight:'500'}}>Wishlist</Text>
        </View>
      )}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },
  card: {
    
    borderRadius: 15,
    marginBottom: 10,
    //overflow: 'hidden',
    //elevation: 3,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 },
    //shadowOpacity: 0.2,
    //shadowRadius: 2,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  image: {
    width: 70,
    height: 80,
  },
  heartIcon: {
    position: 'absolute',
    top: 0,
    right: 5,
    backgroundColor: '#d4d4d4',
    padding: 5,
    borderRadius: 20,
  },
  details: {
    padding: 5,
    flex:.9
  },
  restaurantName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  infoText: {
    marginLeft: 5,
    color: '#6F7A8A',
    fontSize: 14,
  },
  location: {
    color: '#6F7A8A',
    fontSize: 12,
    marginBottom: 5,
    
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 5,
    color: '#6F7A8A',
    fontSize: 14,
    textAlign:'center'
  },
  divider:{
    width:'100%',
    borderColor:'#d8d8d8',
    borderWidth:1,
    marginBottom:10
  }
});

export default Container;
