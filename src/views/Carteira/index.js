import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Fragment } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Movimentacao from '../AddMovimentacao';
import {
  FONT_FAMILY_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_SIZE_SMALL,
  WHITE,
  FONT_FAMILY_REGULAR,
  BLACK,
  FONT_SIZE_LARGE,
  LIGHTERGRAY,
  LIGHTGRAY,
} from '../../styles/styles';

const Carteira = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contaPosicao}>
          <View style={styles.conta}>
            <View style={styles.textoPosicao}>
              <View>
                <Text style={styles.textoSuperior}>Minha Conta</Text>
              </View>
              <View>
                <Text style={styles.textoSuperiorEsquerdo}>Next</Text>
              </View>
            </View>
            <View style={styles.posicaoSaldo}>
                <View>
                  <Text style={styles.textoSaldo}>Saldo</Text>
                </View>
                <View style={styles.posicaoValor}>
                  <View >
                    <Text style={styles.textoReal}>R$</Text>
                  </View>
                  <View>
                    <Text style={styles.textoValor}>20,00</Text>
                  </View>
                </View>
              </View>
          </View>
        </View>
      </View>
      <View style={styles.containerMovimentacao}>
        <TouchableOpacity onPress={()  => navigation.navigate('Movimentacao')}>
        <View style={styles.contaPosicao}>
          <View style={styles.conta}>
            <View style={styles.posicaoAdd}>
              <Image source={require('../../assets/images/add_black.png')}></Image>
              <View>
                <Text style={styles.textoAdd}>Movimento</Text>
              </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </View>  
  </>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
    marginTop: 30
  },
  containerMovimentacao: {
    flex: 3,
    backgroundColor: '#F4F0F4',
    marginTop: 10 
  },
  contaPosicao: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textoMovimento: {
    justifyContent: 'center'
  },
  conta: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 6,
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  posicaoSaldo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  posicaoValor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
  },
  textoReal: {
    paddingRight: 10,
    fontSize: 18,
  },
  textoSaldo: {
    fontSize: 18
  },
  textoValor: {
    fontSize: 18,
  },
  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 20,
    marginBottom: 4,
  },
  textoSuperiorEsquerdo: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 20,
    marginBottom: 4,
  },
  posicaoAdd: {
    flexDirection: 'row',
    alignItems:'center'
  },
  textoAdd: {
    paddingLeft: 15,
    fontSize: 20
  },
});

export default Carteira;
