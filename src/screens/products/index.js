import {FlatList, SafeAreaView, View} from 'react-native';
import {filterBreads, selectBread} from '../../store/actions/breads.action';
import {useDispatch, useSelector} from 'react-redux';

import Product from '../../components/product/index';
import React from 'react';
import styles from './style';
import {useEffect} from 'react';

const Products = ({navigation, route}) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBread);
  const category = useSelector(state => state.categories.selected);

  const onPressProduct = item => {
    dispatch(selectBread(item.id));

    navigation.navigate('ProductDetail', {
      name: item.name,
      color: category.color,
    });
  };

  const renderProduct = ({item}) => {
    return <Product item={item} onSelected={onPressProduct} />;
  };

  useEffect(() => {
    dispatch(filterBreads(category.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={categoryBreads}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
