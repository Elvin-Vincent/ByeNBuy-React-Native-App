import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  // Sample user data
  const user = {
    name: "Elvin Vincent",
    email: "elvin@example.com",
    phone: "+1 234 567 8900",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    joinedDate: "Joined January 2023",
  };

  const settingsOptions = [
    {
      icon: <Ionicons name="person-outline" size={24} color="#4E4E4E" />,
      title: "Personal Information",
      screen: "PersonalInfo",
    },
    {
      icon: <Feather name="lock" size={24} color="#4E4E4E" />,
      title: "Login & Security",
      screen: "Security",
    },
    {
      icon: <Ionicons name="card-outline" size={24} color="#4E4E4E" />,
      title: "Payment Methods",
      screen: "Payments",
    },
    {
      icon: <Ionicons name="location-outline" size={24} color="#4E4E4E" />,
      title: "Addresses",
      screen: "Addresses",
    },
    {
      icon: <MaterialIcons name="favorite-border" size={24} color="#4E4E4E" />,
      title: "Wishlist",
      screen: "Wishlist",
    },
    {
      icon: <Ionicons name="notifications-outline" size={24} color="#4E4E4E" />,
      title: "Notifications",
      screen: "Notifications",
    },
    {
      icon: <Ionicons name="help-circle-outline" size={24} color="#4E4E4E" />,
      title: "Help Center",
      screen: "Help",
    },
    {
      icon: <Ionicons name="log-out-outline" size={24} color="#FF3B30" />,
      title: "Log Out",
      titleStyle: { color: "#FF3B30" },
      action: () => console.log("Logging out..."),
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Account</Text>
      </View>

      {/* User Profile Section */}
      <View style={styles.userCard}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
        <Text style={styles.userJoined}>{user.joinedDate}</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Options */}
      <View style={styles.settingsSection}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionItem}
            onPress={() =>
              option.screen
                ? navigation.navigate(option.screen)
                : option.action?.()
            }
          >
            <View style={styles.optionIcon}>{option.icon}</View>
            <Text style={[styles.optionText, option.titleStyle]}>
              {option.title}
            </Text>
            <Ionicons name="chevron-forward" size={20} color="#C4C4C4" />
          </TouchableOpacity>
        ))}
      </View>

      {/* App Version */}
      <Text style={styles.versionText}>ByeNBuy v1.0.0</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFF",
  },
  backButton: {
    marginRight: 20,
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  userCard: {
    alignItems: "center",
    padding: 25,
    margin: 20,
    marginTop: 10,
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#F0F0F0",
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginBottom: 3,
  },
  userJoined: {
    fontSize: 14,
    color: "#999",
    marginBottom: 20,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#2c3e50",
    borderRadius: 25,
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "500",
  },
  settingsSection: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  optionIcon: {
    marginRight: 15,
    width: 30,
    alignItems: "center",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  versionText: {
    textAlign: "center",
    marginTop: 30,
    color: "#999",
    fontSize: 14,
  },
});

export default AccountScreen;
