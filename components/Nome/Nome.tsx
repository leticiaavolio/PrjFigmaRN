import {Text, TextInput} from 'react-native';
import {FormStyle} from '../Form/FormStyle'

export default function Nome() {
    return (
        <>
            <Text style={FormStyle.label}>Nome</Text>
            <TextInput placeholder='nome' style={FormStyle.input} />
        </>
  );
}