/* eslint-disable react-native/no-inline-styles */
import {View, Text } from 'react-native';
function App() {
  return (
    <View>
      <Text
      style={{ 
        marginTop: 300, 
        fontSize: 30, 
      }}
      selectable // essa propriedade permite que você selecione o texto, por default, nenhum texto eh selecionavel, a menos que tenha essa prop
      selectionColor={'#FF0000'} // essa prop funciona apenas no android
      numberOfLines={1}
      ellipsizeMode='clip'
      allowFontScaling={true}
      maxFontSizeMultiplier={1.5}
      >
        Isso texto de exemplo muito show mesmo, cara. Daora demais mesmo
      </Text>
    </View>
  )
}

export default App;
