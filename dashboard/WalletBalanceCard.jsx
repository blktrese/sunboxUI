import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WalletBalanceCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/366e289c3cc43d79ae27fd272448bef25970a0bb?placeholderIfAbsent=true' }}
          style={styles.walletIcon}
          accessibilityLabel="Wallet Icon"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Total Amount Collected</Text>
          <Text style={styles.amount}>₱ 0.00</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: 358,
    height: 156,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  walletIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 18,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Instrument Sans',
    fontWeight: '700',
    fontSize: 16,
    color: '#1E1E1E',
    marginTop: 57,
  },
  amount: {
    fontFamily: 'Instrument Sans',
    fontWeight: '400',
    fontSize: 41,
    color: '#1B1B1D',
    letterSpacing: 0.82,
    marginTop: -4,
  },
});

export default WalletBalanceCard;
