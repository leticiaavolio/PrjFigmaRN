import { StyleSheet, Image} from 'react-native';

export default function ProfileIMG() {
    return (
        <Image source={require('../../assets/ProfileIMG.jpg')} style={styles.Pimage} resizeMode='contain'/>
  );
  }
  
  const styles = StyleSheet.create({
    
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
  })