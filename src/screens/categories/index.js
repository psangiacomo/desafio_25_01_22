import {
    FlatList,
    SafeAreaView,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Category from '../../components/category/index';
import React from 'react';
import { selectCategory } from '../../store/actions/category.action';
import styles from './style';

const Categories= ({navigation}) => {

  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();
    
  const onPressCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products',
      {
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
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
  
};
  
export default Categories;
  