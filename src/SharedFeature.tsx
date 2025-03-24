// src/SharedFeature.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SharedFeatureProps {
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  
}

export const SharedFeature: React.FC<SharedFeatureProps> = ({
  theme,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.primaryColor }]}>
      <Text style={{ color: theme.secondaryColor }}>
        This is a shared feature
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
  },
});
