import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  TextInput,
  Image,
  FlatList,
  Picker,
  DatePickerIOS,
} from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      switch: true,
      text: '',
      language: 'python',
      chosenDate: new Date(),
      data: [
        { key: '2018: 43' },
        { key: '2017: 75' },
        { key: '2016: 38' }
      ]
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  handleSwitch = e => {
    this.setState({ 'switch': !(this.state.switch == true) });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.container, styles.border]}>
            <Text style={styles.header}>Button</Text>
            <Button
              title="Press Me"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              onPress={() => alert('You pressed the button!')}
            />
          </View>
          <View style={[styles.container, styles.border]}>
            <Text style={styles.header}>Switch</Text>
            <Switch
              value={this.state.switch}
              onValueChange={this.handleSwitch}
            />
          </View>
          <View style={[styles.container, styles.border]}>
            <Text style={styles.header}>TextInput</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray',
                borderWidth: 1, padding: 5
              }}
              value={this.state.text}
              onChangeText={(text) => this.setState({ text })}
            />
          </View>
        </View>
        <View style={styles.row}>
        <View style={[styles.container, styles.border]}>
          <Text style={styles.header}>Image</Text>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          />
        </View>
        <View style={[styles.container, styles.border]}>
          <Text style={styles.header}>FlatList</Text>
          <FlatList
            data={this.state.data}
            renderItem={( {item} ) => <Text>{item.key}</Text> }
          />
        </View>
        <View style={[styles.container2, styles.border]}>
          <Text style={styles.header}>Picker</Text>
          <Picker
            style={{ height: 50, width: 100 }}
            selectedValue={this.state.language}
            onValueChange={
              (itemValue, itemIndex) => this.setState({ language: itemValue })
            }

          >
            <Picker.Item label="Javascript" value="js" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="SQL" value="sql" />
          </Picker>
        </View>
        </View>

        <View style={styles.row}>

          <View style={[styles.container, styles.border]}>
            <Text style={styles.header}>Col 1, Row 3</Text>
          </View>

          <View style={[styles.container, styles.border]}>
            <Text style={styles.header}>Col 2, Row 3</Text>
          </View>

          <View style={[styles.container, styles.border]}>
            <Text style={styles.header}>Col 3, Row 3</Text>
          </View>

          </View>
                  <View style={styles.row}>
                    <Text style={styles.header}>Date Picker</Text>
                      <View style={styles.container3}>
                        <DatePickerIOS
                          date={this.state.chosenDate}
                          onDateChange={this.setDate}
                          mode='date'
                        />
                      </View>
                  </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  border: {
    borderWidth: 3,
    borderColor: 'blue',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container2: {
    flex: 1,
    backgroundColor: 'lime',
    paddingTop: 20,
  },
  container3: {
    flex: 2,
    justifyContent: 'center'
  },
});
