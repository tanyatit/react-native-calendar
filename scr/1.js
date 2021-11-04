import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


class App extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: "Screening Data",
    });
  
    constructor(props) {
        super(props);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
    
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
      }

    clickNext = () => {
    navigation.navigate('two')
    };
    clickBack = () => {
        navigation.goBack()
    };
    render(){
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#E6FFF5' }}>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row', backgroundColor: '#E6FFF5' }}>
                    <CalendarPicker onDateChange={this.onDateChange}/>
                    <View><Text>SELECTED DATE:{ startDate }</Text></View>
                    <View style={styles.button}><Button onPress={() => this.clickBack()}title='≪ Back'/></View>
                    <Text>1</Text>
                    <View style={styles.button}><Button onPress={() => this.clickNext()}title='Next ≫'/></View>
                </View>
            </View>
        );
    }
}
  
  const styles = StyleSheet.create({
    button: {
      padding: 15,
      width: 250,
    },
  })
  
  export default App