import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

// Logo import (make sure to add your logo.png to assets)
const logo = require("../assets/logo.png");

const categories = [
  "All",
  "Electronics",
  "Clothes",
  "Furniture",
  "Books",
  "Accessories",
];

// Product data remains the same as your original
const featuredItems = [
  {
    id: "f1",
    name: "Premium Headphones",
    price: "$129.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.8,
    isFeatured: true,
  },
  {
    id: "f2",
    name: "Designer Jeans",
    price: "$79.99",
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    rating: 4.5,
    isFeatured: true,
  },
];
const items = [
  ...featuredItems,
  {
    id: "1",
    name: "Cotton T-Shirt",
    price: "$19.99",
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    rating: 4.2,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: "$39.99",
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
    rating: 4.3,
  },
  {
    id: "3",
    name: "Winter Jacket",
    price: "$59.99",
    category: "Clothes",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Latest Smartphone",
    price: "$299.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    rating: 4.9,
  },
  {
    id: "5",
    name: "Ultrabook Laptop",
    price: "$599.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Wireless Headphones",
    price: "$49.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    rating: 4.4,
  },
  {
    id: "7",
    name: "DSLR Camera",
    price: "$199.99",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=500",
    rating: 4.6,
  },
  {
    id: "8",
    name: "Modern Bookshelf",
    price: "$89.99",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500",
    rating: 4.5,
  },
  {
    id: "9",
    name: "Wooden Dining Table",
    price: "$149.99",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500",
    rating: 4.7,
  },
  {
    id: "10",
    name: "Leather Sofa",
    price: "$399.99",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    rating: 4.8,
  },
  {
    id: "11",
    name: "Bestseller Novel",
    price: "$9.99",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
    rating: 4.5,
  },
  {
    id: "12",
    name: "University Textbook",
    price: "$29.99",
    category: "Books",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500",
    rating: 4.2,
  },
  {
    id: "13",
    name: "Comic Collection",
    price: "$5.99",
    category: "Books",
    image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=500",
    rating: 4.6,
  },
  {
    id: "14",
    name: "Smart Watch",
    price: "$99.99",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    rating: 4.7,
  },
];

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState(3); // Example cart count

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProducts = items.filter((item) => item.isFeatured);

  const renderCategory = (category) => (
    <TouchableOpacity
      key={category}
      onPress={() => setSelectedCategory(category)}
      style={[
        styles.categoryItem,
        selectedCategory === category && styles.selectedCategory,
      ]}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category && styles.selectedCategoryText,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  const renderFeaturedItem = ({ item }) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <View style={styles.featuredOverlay}>
        <Text style={styles.featuredTitle}>{item.name}</Text>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.featuredPrice}>{item.price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItemCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => toggleFavorite(item.id)}
      >
        <Ionicons name="heart-outline" size={20} color="#666" />
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {item.name}
        </Text>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.cardPrice}>{item.price}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Enhanced Header with Logo */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.headerTitle}>ByeNBuy</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Cart")}
          >
            <Ionicons name="cart-outline" size={24} color="#333" />
            {cartItems > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.badgeText}>{cartItems}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Main Content */}
      <ScrollView
        style={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filtersContainer}
          >
            {categories.map(renderCategory)}
          </ScrollView>
        </View>

        {/* Featured Products */}
        {selectedCategory === "All" && (
          <>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <FlatList
              horizontal
              data={featuredProducts}
              keyExtractor={(item) => item.id}
              renderItem={renderFeaturedItem}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredListContainer}
            />
          </>
        )}

        {/* Products Grid */}
        <Text style={styles.sectionTitle}>
          {selectedCategory === "All" ? "All Products" : selectedCategory}
        </Text>
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={renderItemCard}
          contentContainerStyle={styles.cardListContainer}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "##2c3e50",
    letterSpacing: 0.5,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 16,
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "red",
  },
  cartBadge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    paddingHorizontal: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#333",
  },
  mainContent: {
    flex: 1,
    paddingBottom: 20,
  },
  categoriesWrapper: {
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  filtersContainer: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    backgroundColor: "#eee",
    minWidth: 90,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: "#2c3e50",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#2c3e50",
  },
  featuredListContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  featuredCard: {
    width: width * 0.8,
    height: 180,
    borderRadius: 12,
    marginRight: 15,
    overflow: "hidden",
    position: "relative",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  featuredPrice: {
    fontSize: 15,
    color: "#FFD700",
    fontWeight: "bold",
  },
  cardListContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    width: width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: "relative",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 15,
    padding: 5,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "cover",
  },
  cardDetails: {
    paddingHorizontal: 5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "#333",
  },
  cardPrice: {
    fontSize: 14,
    color: "#2c3e50",
    fontWeight: "bold",
  },
  priceRatingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 12,
    color: "#666",
    marginLeft: 3,
  },
});
