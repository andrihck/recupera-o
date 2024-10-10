import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';
import { AppContext } from '../../scripts/appContext'


const App = () => {
    const {cidade, setCidade} = useContext(AppContext)
    const [weather, setWeather] = useState();

    const fetchWeather = async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=bddbeed6a893cf7d820e74ae7f9cb95e`);
        const data = await response.json();
        setWeather(data);
        console.log(data)
    };

    useEffect(() => {
        fetchWeather();
      }, []);

    return (
            <View style={styles.container}>
                {weather ? (
                    <View style={styles.tempoView}>
                        <Text>Nome da cidade: {weather.name}</Text>
                        <Text>Tipo de clima: {weather.weather[0].description}</Text>
                        <Text>Graus celsius: {weather.main.temp}°C</Text>
                        <Text>Velocidade do vento: {weather.wind.speed} m/s</Text>
                        <Text>Humidade: {weather.main.humidity}%</Text>
                        <Text>Hora Sunraise: {weather.sys.sunrise}</Text>
                        <Text>Hora Sunset: {weather.sys.sunset}</Text>
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

export default App;