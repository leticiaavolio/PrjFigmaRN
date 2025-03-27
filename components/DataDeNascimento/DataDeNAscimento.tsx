import {Text, TextInput,View} from 'react-native';
import {FormStyle} from '../Form/FormStyle'
import FontAwesome from '@expo/vector-icons/FontAwesome6'

export default function DataDeNascimento() {
    return (
        <>
            <Text style={FormStyle.label}>Data de nascimento</Text>
            <View style={FormStyle.part}>
                <TextInput placeholder='dd/mm/yy' style={FormStyle.input} />
                <FontAwesome size={20} name="calendar-days" color='#46328C' style={FormStyle.icon}/>
            </View>
        </>
  );
}