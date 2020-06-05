import * as React from 'react'
import { Text, View, TextInput} from 'react-native'

// Components
import Button from '../components/Button'
import BoxContainer from '../components/BoxContainer'

// Styles
import FilaUserStyles from '../styles/FilaUserStyles'

const FilaUser = ({ navigation }) => {
  return (
      <View style={FilaUserStyles.container}>
          <BoxContainer height={200}>
              <Text style={[FilaUserStyles.textNormal, {fontSize: 20}]}>Você está na fila:</Text>
              <Text style={[FilaUserStyles.textNormal, {fontSize: 26}]}>Montanha Russa</Text>
              <Text style={[FilaUserStyles.textStyled, {fontSize: 32}]}>Sua posição na fila é</Text>
              <Text style={[FilaUserStyles.textStyled, {fontSize: 50}]}>37/52</Text>
          </BoxContainer>
          <BoxContainer height={100}>
              <Text style={[FilaUserStyles.textNormal, {fontSize: 20}]}>Tempo de espera estimado por pessoa</Text>
              <Text style={[FilaUserStyles.textNormal, {fontSize: 32}]}>5 minutos</Text>
          </BoxContainer>
          <Button onPress={() => navigation.navigate('Home')} text='Sair da Fila'/>
      </View>
    
  );
}

export default FilaUser;