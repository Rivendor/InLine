import * as React from 'react'
import { Text, View, TextInput} from 'react-native'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import FilaAdminStyles from '../styles/FilaAdminStyles'

const FilaUser = ({ navigation }) => {
  return (
      <View style={FilaAdminStyles.container}>
          <Text style={[FilaAdminStyles.textNormal, {fontSize: 20}]}>Nome da Fila</Text>
          <BoxContainer height={50}>
            <Text style={[FilaAdminStyles.textNormal, {fontSize: 20, marginTop: 10}]}>Montanha Russa</Text>
          </BoxContainer>
          <Text style={[FilaAdminStyles.textNormal, {fontSize: 20}]}>Pessoas na Fila</Text>
          <BoxContainer height={50}>
            <Text style={[FilaAdminStyles.textNormal, {fontSize: 20, marginTop: 10}]}>52</Text>
          </BoxContainer>
          <Text style={[FilaAdminStyles.textNormal, {fontSize: 20}]}>Tempo de Espera</Text>
          <BoxContainer height={50}>
            <Text style={[FilaAdminStyles.textNormal, {fontSize: 20, marginTop: 10}]}>5 minutos</Text>
          </BoxContainer>
          <Text style={[FilaAdminStyles.textNormal, {fontSize: 20}]}>Código da Fila</Text>
          <BoxContainer height={50}>
            <Text style={[FilaAdminStyles.textNormal, {fontSize: 20, marginTop: 10}]}>A65S4F6</Text>
          </BoxContainer>
          <Button onPress={() => navigation.navigate('Home')} text='Apagar Fila' />
      </View>
    
  );
}

export default FilaUser;