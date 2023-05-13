import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Home({navigation}) {

  return (
    <View style={styles.container}>

      <Text style={{fontSize:70, position:'absolute', top:10}}>Home</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela1')}>
        <Text style={styles.buttonText}>Tela1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela2')}>
        <Text style={styles.buttonText}>Tela2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela3')}>
        <Text style={styles.buttonText}>Tela3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela4')}>
        <Text style={styles.buttonText}>Tela4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela5')}>
        <Text style={styles.buttonText}>Tela5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela6')}>
        <Text style={styles.buttonText}>Tela6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tela7')}>
        <Text style={styles.buttonText}>Tela7</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8dff22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#cc3ad1",
    borderRadius: 30,
    flex: 0.08,
    width: 300,
    alignItems:'center',
    justifyContent:'center',
    margin:10,
  },
  buttonText:{
    fontSize:30,
    color:"#fff",
    fontWeight:'bold',
  },
})