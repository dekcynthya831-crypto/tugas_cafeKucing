import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}> Pesanan Anda </Text>

      <Text style={styles.total}>
        Total Item Dipesan: {totalCount} 
      </Text>

      {totalCount >= 5 && (
        <Text style={styles.promo}>
          🎉 Selamat! Anda Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F3E5D8",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D4037",
    marginBottom: 10,
  },
  total: {
    fontSize: 16,
    color: "#5D4037",
  },
  promo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2E7D32",
    marginTop: 10,
  },
});

export default OrderSummary;