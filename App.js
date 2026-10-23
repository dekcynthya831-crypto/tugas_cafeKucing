import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, } from "react-native";

import MenuItem from "./MenuItem";
import OrderSummary from "./OrderSummary";

const DAFTAR_MENU = [
  { id: "1", nama: "Kopi Susu Catnip", harga: 20000 },
  { id: "2", nama: "Matcha Paw Latte", harga: 25000 },
  { id: "3", nama: "Croissant Ikan Tuna", harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);
  const kurangiTotalPesanan = () => { 
    setTotalPesanan((total) => (total > 0 ? total - 1 : 0));
  };

  const tambahTotalPesanan = () => {
    setTotalPesanan((total) => total + 1);
  };

 

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View style={styles.judulContainer}>
          <Text style={styles.emoji}>🐱</Text>
          <Text style={styles.title}>KAFE KUCING</Text>
        </View>

        <Text style={styles.subtitle}>
          Pesan menu favoritmu!
        </Text>

        <View style={styles.garis} />
      </View>

      <OrderSummary totalCount={totalPesanan} />

      <Text style={styles.heading}>☕ Daftar Menu</Text>

      {DAFTAR_MENU.map((item) => (
        <MenuItem
          key={item.id}
          nama={item.nama}
          harga={item.harga}
          onTambahPesanan={tambahTotalPesanan}
          onKurangiPesanan={kurangiTotalPesanan}
        />
      ))}

      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Terima kasih sudah berkunjung!</Text>
        <Text style={styles.paw}>🐾</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 35,
  },

  header: {
    alignItems: "center",
    marginBottom: 22,
    backgroundColor: "#FBE9D9",
    paddingVertical: 22,
    paddingHorizontal: 10,
    borderRadius: 18,
  },

  judulContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  emoji: {
    fontSize: 38,
    marginRight: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#795548",
  },

  subtitle: {
    fontSize: 15,
    color: "#8D6E63",
    marginTop: 10,
  },

  garis: {
    width: 60,
    height: 3,
    backgroundColor: "#BCA08A",
    borderRadius: 5,
    marginTop: 14,
  },

  heading: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#5D4037",
    marginTop: 22,
    marginBottom: 8,
  },

  footerContainer: {
    alignItems: "center",
    marginTop: 24,
    paddingVertical: 16,
  },

  footer: {
    textAlign: "center",
    color: "#795548",
    fontSize: 14,
  },

  paw: {
    fontSize: 23,
    marginTop: 6,
  },
});