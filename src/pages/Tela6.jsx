import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, position: 'absolute', top: 10, fontWeight:'bold', }}>Tela 6</Text>
      <View style={styles.buttonNav}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Tela7')}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68c8ff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonNav:{
    width:'96%',
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
  },
  button: {
    backgroundColor: "#cc3ad1",
    borderRadius: 30,
    width: "32%",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: 'bold',
    padding:7,
    fontWeight:'bold',
  },
})