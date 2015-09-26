'use strict';

var React = require('react-native');

var ModalDatePicker = require('./ModalDatePicker');

var {
  StyleSheet,
  Text,
  TextInput,
  DatePickerIOS,
  View,  
} = React;

var Form = React.createClass({  
	renderText: function(index, item) {
		var style = item.options.style || styles.textInputDefaultStyle
		return(
			<TextInput
	    style={style}/>);
	},	
	renderDate: function(index, item) {
		var style = item.options.style || styles.textInputDefaultStyle		
		return(
      <DatePickerIOS
        date={new Date()}
        mode="date"/>			
		);		
	},
	renderDateModal: function(index, item) {		
		return(
			<ModalDatePicker headingText={item.label}/>
		);		
	},
	renderItem: function(index, item) {
		var rawItem = null;
		switch (item.type) {			
			case 'text':
				rawItem = this.renderText(index, item);
				break;
			case 'date':
				rawItem = this.renderDate(index, item);
				break;
			case 'datemodal':
				rawItem = this.renderDateModal(index, item);
				break;				
			default:
				rawItem = this.renderText(index, item);
		}
		var viewIndex = 'view-' + index;
		return(
			<View key={viewIndex} style={styles.itemDefaultStyle}>
				<Text style={styles.labelDefaultStyle}>{item.label}</Text>
				{rawItem}
			</View>
		);
	},
	renderItems: function() {
		var itemList = [];
		for (var index in this.props.items) {
			itemList.push(this.renderItem(index, this.props.items[index]));
		}
		return itemList;
	},
  render: function() {
  	var items = this.renderItems();
    return (
      <View style={this.props.style}>
        {items}
      </View>
    );
  }
});

var LABEL_COLOR = '#000000';
var INPUT_COLOR = '#000000';
var ERROR_COLOR = '#a94442';
var HELP_COLOR = '#999999';
var BORDER_COLOR = '#cccccc';
var DISABLED_COLOR = '#777777';
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 17;
var FONT_WEIGHT = '500';

var styles = StyleSheet.create({
	itemDefaultStyle: {
	},
	labelDefaultStyle	: {
		fontWeight: 'bold',
		marginLeft: 1,
		padding: 4,
	},
	textInputDefaultStyle : {
		flex:1,
    color: INPUT_COLOR,
    fontSize: FONT_SIZE,
    height: 36,
    padding: 7,
    borderRadius: 4,
    borderColor: BORDER_COLOR,
    borderWidth: 0.5,
    marginBottom: 5,
	}
});

module.exports = Form;