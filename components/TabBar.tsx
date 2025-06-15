import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import TabBarButton from './TabBarButton';


export default function TabBar ({ state, descriptors, navigation } : BottomTabBarProps) {
  const [dimentions, setDimentions] = useState({height: 20, width: 100});

  const buttonWidth = dimentions.width / state.routes.length;

  const onTabbarLayout = (e:LayoutChangeEvent) => {
    setDimentions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };
  
  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: tabPositionX.value }]
      }
  })

    return (
    <View onLayout={onTabbarLayout} style={styles.tabbar}>
       <Animated.View style={[animatedStyle, {
        position: 'absolute',
        borderRadius: 30,
        backgroundColor: '#cdb4db',
        marginHorizontal: 12,
        height: dimentions.height - 24,
        width: buttonWidth - 25,
       }]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            tabPositionX.value = withSpring(index * buttonWidth, {duration: 1500});
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#992525' : '#776391'}
            label={label} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 35,
    shadowColor: '#776391',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
  },
});