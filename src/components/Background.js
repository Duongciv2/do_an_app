import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

export default function Background({ children }) {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.backgroundSvg}>
      <Svg height="100%" width="100%" style={styles.backgroundSvg}>
  {/* ... các Path khác ... */}
  <Path
    d="M100 400 L120 420 L140 380 Z"
    fill="#F2C94C"
    transform="translate(50, -50) rotate(20)"
  />
  <Path
    d="M20 20 L40 40 L60 0 Z"
    fill="#9B51E0"
    transform="translate(150, 300) rotate(-60)"
  />
  {/* Thêm các Path khác để tạo icon */}
</Svg>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor="#F2F2F2" />
            <Stop offset="100%" stopColor="#FFFFFF" />
          </LinearGradient>
        </Defs>
        <Path
          d="M0,0 L0,512 C284.667,476 469.333,380 554,224 C638.667,68 623.333,-148 508,-324 L0,0 Z"
          fill="url(#gradient)"
        />
        <Path
          d="M554,224 C669.333,68 684.667,-148 800,-324 L800,512 L554,224 Z"
          fill="url(#gradient)"
        />
        <Path
          d="M0,512 L508,512 C623.333,380 638.667,476 554,224 L0,512 Z"
          fill="url(#gradient)"
        />
      </Svg>
      <KeyboardAvoidingView style={styles.keyboardAvoidingView} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoidingView: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});