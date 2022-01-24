import {
    Button,
    SafeAreaView,
    Text,
    View
} from 'react-native';

import React from 'react';
import styles from './style';

const Categories= ({navigation}) => {
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Text>Categories</Text>
            <Button title="Go to products" onPress={() => navigation.navigate('Products')}></Button>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Categories;
  