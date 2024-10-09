import { color } from '@/constants/Colors';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Container = () => {
  return (
    <View style={styles.container}>
      {/* Profile Image and Name */}
      <View style={styles.profileContainer}>
        <Image
          source={require('@/assets/images/user.jpeg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Khalif Noor</Text>
        <TouchableOpacity style={styles.editIconContainer}>
          <Icon name="pencil-outline" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.premiumBanner}>
        <View style={styles.premiumIconContainer}>
          {/* <Icon name="crown-outline" size={24} color="#fff" /> */}
          <FontAwesome5 name="crown" size={24} color="#fff" />
        </View>
        <View style={styles.premiumTextContainer}>
          <Text style={styles.premiumTitle}>Get Premium Plan</Text>
          <Text style={styles.premiumSubtitle}>Lorem ipsum dolor sit amet</Text>
        </View>
        <Icon name="chevron-forward-outline" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity key={item.title} style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Icon name={item.icon} size={24} color="#6F7A8A" />
            </View>
            <Text style={styles.menuTitle}>{item.title}</Text>
            <Icon name="chevron-forward-outline" size={24} color="#6F7A8A" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const menuItems = [
  { title: 'Account Details', icon: 'person-outline' },
  { title: 'My Orders', icon: 'receipt-outline' },
  { title: 'Settings', icon: 'settings-outline' },
  { title: 'Help Center', icon: 'help-circle-outline' },
  { title: 'Language', icon: 'language-outline' },
  { title: 'Invite Friends', icon: 'people-outline' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  editIconContainer: {
    position: 'absolute',
    right:155,
    top:60,
    backgroundColor: color.green,
    borderRadius: 15,
    padding: 2,
  },
  premiumBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.green,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  premiumIconContainer: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 25,
  },
  premiumTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  premiumTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  premiumSubtitle: {
    color: '#fff',
    fontSize: 12,
  },
  menuContainer: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIconContainer: {
    marginRight: 15,
  },
  menuTitle: {
    flex: 1,
    fontSize: 16,
    color: '#6F7A8A',
  },
});

export default Container;
