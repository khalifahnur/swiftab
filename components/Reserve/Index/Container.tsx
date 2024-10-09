import { color } from '@/constants/Colors';
import React, { useState } from 'react';
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ReservationCard = () => {
  const [isRemind, setIsRemind] = useState(false);

  return (
    <View style={styles.cardContainer}>
      {/* Date and Reminder */}
      <View style={styles.header}>
        <Text style={styles.dateText}>Jan 04, 2023 - 17:00 PM</Text>
        <View style={styles.reminder}>
          <Text style={styles.remindText}>Remind me</Text>
          <Switch
            value={isRemind}
            onValueChange={(value) => setIsRemind(value)}
            trackColor={{ false: '#ccc', true: '#A19BFC' }}
            thumbColor={isRemind ? '#A19BFC' : '#f4f3f4'}
          />
        </View>
        
      </View>
      <View style={styles.divider}/>
      {/* Image and Details */}
      <View style={styles.detailsRow}>
        <Image
          source={require('@/assets/images/restaurants/res1.jpeg')}
          style={styles.image}
        />
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>LibertyBite Bistro</Text>
            <View style={styles.rating}>
              <Icon name="star" size={16} color="gold" />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
          </View>
          <View style={styles.iconRow}>
            <Icon name="time-outline" size={16} color="#6F7A8A" />
            <Text style={styles.iconText}>15 min</Text>
            <Icon name="restaurant-outline" size={16} color="#6F7A8A" />
            <Text style={styles.iconText}>Italian</Text>
          </View>
          <View style={styles.iconRow}>
            <Icon name="location-outline" size={16} color="#6F7A8A" />
            <Text style={styles.iconText}>1012 Ocean Avenue, New York</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.navigateButton}>
          <Text style={styles.navigateText}>Navigate</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#6F7A8A',
  },
  reminder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  remindText: {
    fontSize: 14,
    marginRight: 5,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#6F7A8A',
    marginLeft: 3,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  iconText: {
    fontSize: 14,
    color: '#6F7A8A',
    marginLeft: 5,
    marginRight: 15,
  },

  cancelButton: {
    backgroundColor: color.green,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    width:'40%',
    alignSelf:'flex-end'
  },
  cancelText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign:'center'
  },
  navigateButton: {
    backgroundColor: '#A19BFC',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  navigateText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  divider:{
    width:'100%',
    marginBottom:3,
    borderWidth:1,
    borderColor:'#f8f8f8'
  },
});

export default ReservationCard;