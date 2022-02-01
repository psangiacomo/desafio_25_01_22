import {
    FlatList,
    SafeAreaView,
    View
} from 'react-native';

import {CATEGORIES} from '../../utils/data/categories';
import Category from '../../components/category/index';
import React from 'react';
import styles from './style';

const Categories= ({navigation}) => {
    
  const onPressCategory = (item) => {
    navigation.navigate('Products',
      {
        categoryId: item.id,
        name: item.title,
        color: item.color,
      }
    )
  };

  const renderCategory = ({item}) => {
    return (
      <Category item={item} onSelected={onPressCategory} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={CATEGORIES}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
  
};
  
export default Categories;
  