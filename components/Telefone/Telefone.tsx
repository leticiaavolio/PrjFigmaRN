import {Text, TextInput, View} from 'react-native';
import {FormStyle} from '../Form/FormStyle'
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function Telefone() {
    return (
        <>
            <Text style={FormStyle.label}>Telefone</Text>
            <View style={FormStyle.part}>
                <TextInput placeholder='()*****-****' style={FormStyle.input} />
                <FontAwesome size={20} name="phone-flip" color='#46328C' style={FormStyle.icon}/>
            </View>
        </>
  );
}