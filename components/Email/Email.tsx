import {Text, TextInput} from 'react-native';
import {FormStyle} from '../Form/FormStyle'

export default function Email() {
    return (
        <>
          <Text style={FormStyle.label}>Email</Text>
          <TextInput placeholder='email' style={FormStyle.input} />
        </>
  );
}