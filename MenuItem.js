import React from "react";
import { View, Text, StyleSheet, TouchableOpacity,} from "react-native";

const MenuItem = ({ nama, harga, qty, onTambahPesanan, onKurangiPesanan,}) => {
 
  return (
    <View style={styles.card}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.harga}> Harga: Rp {harga.toLocaleString("id-ID")} </Text>
      <Text style={styles.qty}> Jumlah Pesanan: {qty}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onTambahPesanan}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}> + Tambah Pesanan </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonKurang,
          qty === 0 && styles.buttonDisabled,
        ]}
        onPress={onKurangiPesanan}
        activeOpacity={0.7}
        disabled={qty === 0}
      >
        <Text style={styles.buttonText}>
  − Kurangi Pesanan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF0E5",
    padding: 16,
    marginVertical: 8,
    borderRadius: 15,
    elevation: 2,
  },
  nama: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5D4037",
    marginBottom: 8,
  },
  harga: {
    fontSize: 15,
    color: "#795548",
    marginBottom: 8,
  },
  qty: {
    fontSize: 15,
    color: "#795548",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#795548",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonKurang: {
    backgroundColor: "#A94438",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default MenuItem;