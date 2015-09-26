'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  DatePickerIOS,
  PropTypes,
  Modal
} = React;

var DatePickerModal = React.createClass({
  propTypes: {
    visible: PropTypes.bool,
    headingText: PropTypes.string.isRequired,
    selectedDate: React.PropTypes.instanceOf(Date).isRequired,
    onDateChange: React.PropTypes.func,
    onClose: React.PropTypes.func,    
  },  
  getInitialState: function() {
    return {
      previousDate: this.props.selectedDate,
    };
  },
  onCancelPressed: function() {    
    this.props.onDateChange(this.state.previousDate);
    this.props.onClose();
  },
  onTodayPressed: function() {
    this.props.onDateChange(new Date());
  },
  onDonePressed: function() {
    this.setState({
      previousDate: this.props.selectedDate
    });
    this.props.onClose();
  },
  render: function() {
    return (
      <Modal
        animated={true}
        transparent={true}
        visible={this.props.visible}
        >

        <View style={[styles.container, styles.modalBackgroundStyle]}>
          <View style={[styles.innerContainer, styles.innerContainerTransparentStyle]}>      

            <View style={styles.heading}>
              <Text style={styles.datePickerHeadingItemText}>{this.props.headingText}</Text>
            </View>

            <View style={styles.body}>
              <DatePickerIOS
                date={this.props.selectedDate}
                mode="date"
                onDateChange={this.props.onDateChange}/>            
            </View>

            <View style={styles.footer}>
              <TouchableHighlight style={[styles.datePickerHeadingItem, styles.datePickerHeadingItemNotLast]} underlayColor='lightgray' onPress={this.onCancelPressed}>
                <Text style={styles.datePickerHeadingItemText}>Cancelar</Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.datePickerHeadingItem, styles.datePickerHeadingItemNotLast]} underlayColor='lightgray' onPress={this.onTodayPressed}>
                <Text style={styles.datePickerHeadingItemText}>Hoy</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.datePickerHeadingItem} underlayColor='lightgray' onPress={this.onDonePressed}>
                <Text style={styles.datePickerHeadingItemText}>Hecho</Text>
              </TouchableHighlight>
            </View>          

           </View> 
        </View>

      </Modal>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,    
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  innerContainer: {
    borderRadius: 10,
    alignItems:'center'
  },
  innerContainerTransparentStyle: {
    backgroundColor: '#fff', 
  },  
  heading: {
    alignItems:'center',
    alignSelf:'stretch',
    borderBottomWidth:0.5,
    borderColor: 'lightgray',    
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body : {
    alignItems:'center',
    alignSelf: 'stretch',    
  },
  footer: {
    flexDirection:'row',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    borderTopWidth:0.5,
    borderColor: 'lightgray',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  datePickerHeadingItem: {
    flex:1,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,    

  },
  datePickerHeadingItemNotLast: {
    borderRightWidth:0.5,
    borderColor: 'lightgray',
  },
  datePickerHeadingItemText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#007AFF',
  },
});

module.exports = DatePickerModal;