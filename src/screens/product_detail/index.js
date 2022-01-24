import {
  Button,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import React from 'react';
import styles from './style';

const ProductDetail= ({navigation}) => {
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text>Product detail</Text>
          <Button title="Go back to categories" onPress={() => navigation.navigate('Categories')}></Button>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProductDetail;
  