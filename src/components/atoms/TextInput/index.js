import { StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native'
import React from 'react'

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} {...restProps}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
  label:{fontSize:16, fontFamily: 'Poppins-Reguler', color:'#404040', paddingBottom:8},
  input:{borderWidth:1, borderColor:'#404040', borderRadius:8, padding:10}
});