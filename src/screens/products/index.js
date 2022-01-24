import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import React from 'react';
import styles from './style';

const Products= ({navigation}) => {
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text>Products</Text>
            <Button title="Go to product detail" onPress={() => navigation.navigate('ProductDetail')}></Button>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Products;
  