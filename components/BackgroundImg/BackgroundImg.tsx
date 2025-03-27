import { StyleSheet, Image} from 'react-native';

export default function BackgroundIMG() {
    return (
        <Image source={require('../../assets/BackgroundIMG.jpg')} style={styles.BGimage}/>
  );
  }
  
  const styles = StyleSheet.create({
    BGimage: {
        width:'100%',
        height:'28%'
      },
  })