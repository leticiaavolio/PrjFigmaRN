import {Text, TextInput, View} from 'react-native';
import {FormStyle} from '../Form/FormStyle'
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function User() {
    return (
        <>
            <Text style={FormStyle.label}>Usuário</Text>
            <View style={FormStyle.part}>
                <TextInput placeholder='user' style={FormStyle.input} />
                <FontAwesome size={20} name="user" color='#46328C' style={FormStyle.icon}/>
            </View>
            
        </>
  );
}