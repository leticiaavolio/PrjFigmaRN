import {View} from 'react-native';
import {FormStyle} from './FormStyle'
import User from '../User/User'
import Nome from '../Nome/Nome'
import DataDeNascimento from '../DataDeNascimento/DataDeNAscimento'
import Email from '../Email/Email'
import Telefone from '../Telefone/Telefone'
import Senioridade from '../Senioridade/Senioridade'


export default function Form() {
    return (
      <View style={FormStyle.form}>
        <User />
        <Nome />
        <DataDeNascimento />
        <Email />
        <Telefone />
        <Senioridade />
      </View>
  );
  }