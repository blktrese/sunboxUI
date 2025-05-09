import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import NavigationItem from './NavigationItem';
import Divider from './Divider';
import LogoutButton from './LogoutButton';

const SidebarNavigation = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleNavigation = (route) => {
    setActiveItem(route);
    // Add your navigation logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Logo />

        <View style={styles.navigationContainer}>
          <View style={styles.navItems}>
            <NavigationItem
              icon={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/607ee777e391c46aded2f93124c793b72ca7f2f5' }}
              text="Home"
              isActive={activeItem === 'home'}
              onPress={() => handleNavigation('home')}
            />

            <NavigationItem
              icon={require('./assets/about-icon.svg')}
              text="About Us"
              isActive={activeItem === 'about'}
              onPress={() => handleNavigation('about')}
            />
          </View>

          <Divider />

          <LogoutButton onPress={() => {
            // Add your logout logic here
          }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#1D1C1F',
    height: '100%',
  },
  content: {
    width: 331,
    padding: 23,
    display: 'flex',
    flexDirection: 'column',
  },
  navigationContainer: {
    marginTop: 34,
  },
  navItems: {
    display: 'flex',
    flexDirection: 'column',
    gap: 21,
  },
});

export default SidebarNavigation;
