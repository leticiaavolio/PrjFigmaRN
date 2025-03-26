import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text,TextInput , Image, TouchableOpacity} from 'react-native';



export default function Home() {
    return (
      //<></> fragment
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={require('../assets/BackgroundIMG.jpg')} style={styles.BGimage}/>
        <Image source={require('../assets/ProfileIMG.jpg')} style={styles.Pimage} resizeMode='contain'/>
        <View style={styles.form}>
          <Text style={styles.label}>Usuário</Text>
          <TextInput placeholder='user' style={styles.input} />
          <Text style={styles.label}>Nome</Text>
          <TextInput placeholder='nome' style={styles.input} />
          <Text style={styles.label}>Data de nascimento</Text>
          <TextInput placeholder='dd/mm/yy' style={styles.input} />
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder='email' style={styles.input} />
          <Text style={styles.label}>Telefone</Text>
          <TextInput placeholder='()*****-****' style={styles.input} />
          <Text style={styles.label}>Nível de senioridade</Text>
          <TextInput placeholder='Jr' style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2E6D0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form:{
      width:'100%',
      padding:20,

    },
    label:{
      color:'#241040',
    },
    input:{
      backgroundColor:'#F2E6D0',
      color:'#241040',
      borderStyle:'solid',
      borderColor:'#241040',
      borderBottomWidth:2,
    },
    BGimage: {
      width:'100%',
      height:'30%'
    },
    Pimage:{
      width:'25%',
      height:'14%',
      alignSelf:'center',
      borderRadius:50,
      borderWidth:8,
      borderColor:'#F2E6D0',
      borderStyle:'solid',
      marginTop:'-13%',
    },
    button:{
      width:'70%',
      height:'7%',
      borderRadius:50,
      backgroundColor:'#2F2D73',
      alignSelf:'center',
      justifyContent:'center',
      marginBottom:'5%'
    },
    buttonText:{
      color:'#F2E6D0',
      textAlign:'center',
      fontSize:20,
      letterSpacing:5,
    },
  });