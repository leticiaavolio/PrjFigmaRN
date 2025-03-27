import { StyleSheet} from 'react-native';

export const FormStyle = StyleSheet.create({
form:{
    width:'100%',
    padding:20,
  },
  label:{
    color:'#241040',
  },
  part:{
    flexDirection: 'row',
  },
  input:{
    backgroundColor:'#F2E6D0',
    color:'#241040',
    borderStyle:'solid',
    borderColor:'#241040',
    borderBottomWidth:2,
    width:'100%'
  },
  icon:{
    marginLeft:'-8%',
    alignSelf:'center'
  }
});