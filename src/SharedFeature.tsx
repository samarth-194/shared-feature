// src/SharedFeature.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SharedFeatureProps {
  theme: {
    primaryColor: string;
    secondaryColor: string;
  };
  customProp1: string;
  customProp2: number;
}

export const SharedFeature: React.FC<SharedFeatureProps> = ({
  theme,
  customProp1,
  customProp2,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.primaryColor }]}>
      <Text style={{ color: theme.secondaryColor }}>
        {customProp1}: {customProp2}
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
