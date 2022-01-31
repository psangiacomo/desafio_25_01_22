import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

import React from 'react';
import styles from './style';

const ProductDetail = ({navigation, route}) => {
  const { item } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.weight}</Text>
        <Text>$ {item.price}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;