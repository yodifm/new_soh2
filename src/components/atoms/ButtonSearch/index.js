import {StyleSheet, Text, Touchable, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonSearch = ({
  txt,
  color = '#B92929',
  textColor = '#fff',
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{txt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonSearch;

const styles = StyleSheet.create({
  container: color => ({
    borderRadius: 8,
    backgroundColor: color,
    padding: 12,
    width: 350,

    alignSelf: 'center',
  }),
  text: color => ({
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: color,
    textAlign: 'center',
  }),
});
