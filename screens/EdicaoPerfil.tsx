import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text,TextInput , TouchableOpacity} from 'react-native';
import BackgroundIMG from '../components/BackgroundImg/BackgroundImg';
import ProfileIMG from '../components/ProfileImg/ProfileImg';
import Form from '../components/Form/Form'
import Button from '../components/Button/Button'



export default function Home() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <BackgroundIMG />
        <ProfileIMG />
        <Form />
        <Button />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F2E6D0',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });