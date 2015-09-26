'use strict';

var React = require('react-native');
var DatePickerModal = require('./DatePickerModal');

var {
  StyleSheet,
  Text,
  View,
} = React;

var ModalDatePicker = React.createClass({
  getInitialState: function() {
    return {
      date: new Date(),
      visible: false,
    };
  },
  onPressDate: function() {
    this.setState({
      visible: true,
    });
  },
  onDateChange: function(date) {
    this.setState({ 
      date: date,
    });
  },  
  onClose: function() {
    this.setState({
      visible: false,
    });
  },
  render: function() {
    return (
      <View>

        <Text onPress={this.onPressDate} style={styles.dateText}>{this.state.date.toLocaleDateString()}</Text>

        <DatePickerModal
          visible={this.state.visible} 
          headingText={this.props.headingText}
          selectedDate={this.state.date}
          onDateChange={this.onDateChange}
          onClose={this.onClose}/>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  dateText: {
    flex: 1,
    color: '#000000',
    fontSize: 17,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    marginBottom: 5,    
  }
});

module.exports = ModalDatePicker;