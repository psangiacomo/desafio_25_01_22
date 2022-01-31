import {
  FlatList,
  SafeAreaView,
  View
} from 'react-native';

import {BREADS} from '../../utils/data/breads';
import {CATEGORIES} from '../../utils/data/categories';
import Product from '../../components/product/index';
import React from 'react';
import styles from './style';

const Products= ({navigation, route}) => {

  const breads = BREADS.filter(bread => bread.category === route.params.categoryId);

  const onPressProduct = (item) => {

    navigation.navigate('ProductDetail',
      {
        item: item,
        name: item.name,
        color: CATEGORIES.find(product => product.id === route.params.categoryId).color,
      }
    )
  };

  const renderProduct = ({item}) => {
    return (
      <Product item={item} onSelected={onPressProduct} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={breads}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );

};

export default Products;