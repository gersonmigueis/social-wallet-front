import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import Carteira from '../Carteira';
import { useState } from 'react';
import { salvarTransacao } from '../../api/backend';

const Movimentacao = () => {

  const navigation = useNavigation();
  const [ valor, setValor ] = useState('');
  const [ operacao, setOperacao] = useState('');
  const [ observacao, setObservacao ] = useState('');

  async function salvarRegistro() {
    let obj = {valor, operacao, observacao};
    try {
      const data = await salvarTransacao(obj);
      return data;
    } catch (error) {
      console.log(error.message);  
    }
  }
  //lembrar de tratar quando o valor de saída. 
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Carteira')}>
            <View>
              <Image style={{height: 20}} source={require('../../assets/images/arrow_left_black.png')} />
            </View>
          </TouchableOpacity>  
          <View style={styles.textoHeader}>
              <Text style={{fontSize: 20, marginTop: -5}}>Novo Registro</Text>
          </View>
        </View>
        <View style={styles.formMovimentacao}>
          <View>
            <Text style={styles.textoValor}>Valor R$</Text>
          </View> 
          <View>
            <TextInput style={styles.textoInput} placeholder="20,00" onChangeText={valor => setValor(valor)}
             defaultValue={valor}>
             </TextInput>
          </View>
          <View style={styles.containerLista}>
            <Text style={styles.cabecalhoList}>
              Operação
            </Text>
            <Picker style={styles.pickerPoisicao}
              selectedValue={operacao}
              onValueChange={(itemValue, itemIdex) => 
                setOperacao(itemValue)
              }
            >
              <Picker.Item label="Entrada" value="1" />
              <Picker.Item label="Saida" value="0" />
            </Picker>
          </View>
          <View style={styles.containerObservacao}>
            <View style={styles.textoObservacao}>
              <Text style={{fontFamily: 'San bol', fontSize: 18}}>Observação</Text>
            </View>
            <View>
              <TextInput placeholder="Digite aqui" style={styles.inputObservacao} defaultValue={observacao} onChangeText={observacao => setObservacao(observacao)}/>
            </View>    
          </View>
          <TouchableOpacity style={styles.containerBotao} onPress={() => salvarRegistro()}>
            <View style={styles.botao}>
              <Text style={styles.botaoTexto}>Salvar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    //paddingHorizontal: 25
  },
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 14,
    paddingLeft: 1
  },
  textoHeader: {
    paddingLeft: 15
  },
  formMovimentacao: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  textoValor: {
    position: 'absolute',
    flexDirection: 'row',
    fontFamily: 'Sen Bold',
    fontSize: 18,
  },
  textoInput: {
    position: 'absolute',
    flexDirection: 'row',
    marginLeft: 60,
    fontFamily: 'Sen Bold',
    fontSize: 18,
    paddingHorizontal: 25,
    top: -11,
    width: 180
  },
  containerLista: {
    flex: 1,
    position: 'absolute',
    paddingTop: 35,
    paddingHorizontal: 25
  },
  pickerPoisicao: {
    width: 200
  },
  cabecalhoList: {
    fontFamily: 'Sen Bold',
    fontSize: 18
  },
  containerObservacao: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 110,
  },
  textoObservacao: {
    justifyContent: 'flex-start',
    paddingTop: 12,
  
  },
  inputObservacao: {
    fontFamily: 'San bold',
    fontSize: 18,
    position: 'absolute',
    flexDirection: 'row', 
    paddingHorizontal: 25,
    width: 250,
    borderRadius: 30,
  },
  containerBotao: {
    flex: 2,
    paddingHorizontal: 25,
    alignItems: 'center',
    paddingLeft: 55
  },
  botao: {
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: '#00adef',
    padding: 20,
    width: 200,
    borderRadius: 12,
  },
  botaoTexto: {
    alignItems: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: '#fff'
  }
})
export default Movimentacao;