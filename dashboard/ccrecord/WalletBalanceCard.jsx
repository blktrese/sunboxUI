import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WalletBalanceCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/366e289c3cc43d79ae27fd272448bef25970a0bb?placeholderIfAbsent=true',
        }}
        style={styles.walletIcon}
        accessibilityLabel="Wallet Icon"
      />
      <Text style={styles.title}>Total Amount Collected</Text>
      <Text style={styles.amount}>₱ 0.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DA9362',
    width: 328,
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  walletIcon: {
    width: 48,
    height: 48,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'Instrument Sans',
    fontWeight: '700',
    fontSize: 16,
    color: '#2A2A2E',
    marginBottom: 4,
  },
  amount: {
    fontFamily: 'Instrument Sans',
    fontWeight: '400',
    fontSize: 32,
    color: '#2A2A2E',
  },
});

export default WalletBalanceCard;
