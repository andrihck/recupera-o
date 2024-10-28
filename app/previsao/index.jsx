import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from '../../scripts/appContext';

const TelaPrevisao = () => {
    const { cidade } = useContext(AppContext);
    const [tempo, setTempo] = useState(null);

    const obterPrevisaoDoTempo = async () => {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e&units=metric`);
            const data = await response.json();
            setTempo({
                nome: data.name,
                temperatura: data.main.temp,
                vento: data.wind.speed,
                umidade: data.main.humidity,
                clima: data.weather[0].description,
            });
        } catch (error) {
            console.error("Erro ao buscar dados da API:", error);
        }
    };

    useEffect(() => {
        obterPrevisaoDoTempo();
    }, []);

    return (
        <View style={styles.container}>
            {tempo ? (
                <View style={styles.tempoView}>
                    <Text style={styles.texto}>Cidade: {tempo.nome}</Text>
                    <Text style={styles.texto}>Temperatura: {tempo.temperatura}°C</Text>
                    <Text style={styles.texto}>Velocidade do Vento: {tempo.vento} m/s</Text>
                    <Text style={styles.texto}>Umidade: {tempo.umidade}%</Text>
                    <Text style={styles.texto}>Clima: {tempo.clima}</Text>
                </View>
            ) : (
                <Text style={styles.texto}>Carregando dados do tempo...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tempoView: {
        alignItems: 'center',
    },
    texto: {
        fontSize: 18,
        marginVertical: 5,
    },
});

export default TelaPrevisao;