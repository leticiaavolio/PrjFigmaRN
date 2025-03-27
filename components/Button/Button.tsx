import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
    </TouchableOpacity>
);
}

const styles = StyleSheet.create({
    button:{
        width:'70%',
        height:'7%',
        borderRadius:50,
        backgroundColor:'#2F2D73',
        alignSelf:'center',
        justifyContent:'center',
        marginBottom:'5%',
      },
      buttonText:{
        color:'#F2E6D0',
        textAlign:'center',
        fontSize:20,
        letterSpacing:5,
      },
})