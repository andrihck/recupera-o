import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';
import { AppContext } from '../../scripts/appContext'


const telaPrevisao = () => {
    const {cidade, setCidade} = useContext(AppContext)
    const [tempo, setTempo] = useState();

    const obterPrevisaoDoTempo = async () => {
        //implementar aqui uma forma de pegar uma informação da API openwheatermap. para isso, utilize a URL abaixo:
        // `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e`
    };

    useEffect(() => {
      }, []); // implementar este useEffect, que deverá chamar a função de obterPrevisaoDoTempo somente uma vez, quando a tela é aberta.

    return (
            <View style={styles.container}>
                {weather ? (
                    <View style={styles.tempoView}>
                        //Criar aqui um visualização dos dados obtidos pela API do tempo. deve conter no minimo:
                        // Nome da cidade, temperatura atual, velocidade do vento, humidade, tipo do clima
                    </View>
                ) : <></>}
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:50
    },
    tempoView:{
        alignSelf:'center',
        justifyContent:'center'
    }
})

export default telaPrevisao;