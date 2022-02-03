import {SafeAreaView, Text, View} from 'react-native';

import React from 'react';
import styles from './style';
import {useSelector} from 'react-redux';

const ProductDetail = ({navigation, route}) => {
  const item = useSelector(state => state.breads.selected);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.weight}</Text>
        <Text>$ {item.price}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
