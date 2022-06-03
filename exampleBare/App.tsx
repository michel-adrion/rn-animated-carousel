import React from 'react';
import Carousel from 'rn-animated-carousel';
// import Carousel from '../src/Carousel';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Dimensions} from 'react-native';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const {width: PAGE_WIDTH} = Dimensions.get('window');
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={backgroundStyle}>
        <Text>111</Text>
        <Carousel
          loop
          width={PAGE_WIDTH}
          height={PAGE_WIDTH / 2}
          data={[...new Array(6).keys()]}
          renderItem={({index}) => (
            <View key={index}>
              <Text>{index}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
