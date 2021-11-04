import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


export default function App({ navigation }) {
    
    const clickBack = () => {
        navigation.goBack()
    }
    return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start', backgroundColor: '#E6FFF5'}}>
            <View style={styles.button}>
                <Button 
                    onPress={clickBack}
                    title='≪ Back'
                />
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      padding: 15,
      width: 250,
    },
  })
  