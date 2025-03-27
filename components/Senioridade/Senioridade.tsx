import {Text, TextInput, View} from 'react-native';
import {FormStyle} from '../Form/FormStyle'
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function Senioridade() {
    return (
        <>
            <Text style={FormStyle.label}>Nível de senioridade</Text>
            
            <View style={FormStyle.part}>
                <TextInput placeholder='Jr' style={FormStyle.input} />
                <FontAwesome size={20} name="arrow-down" color='#46328C' style={FormStyle.icon}/>
            </View>
        </>
  );
}