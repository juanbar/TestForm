'use strict';

var React = require('react-native');

var Form = require('./Form');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS
} = React;

var formItems = { 
  nombre: {    
    type: 'text',
    label: 'Nombre',
    options: {
    }
  }, 
  primerapellido: {    
    type: 'text',
    label: 'Primer Apellido',
    options: {
    }
  },   
  segundoapellido: {    
    type: 'text',
    label: 'Segundo Apellido',
    options: {
    }
  },     
  fechanacimiento: {
    type: 'datemodal',
    label: 'Fecha nacimiento',
    options : {
    }
  },     
  fechanacimiento1: {
    type: 'datemodal',
    label: 'Fecha Boda',
    options : {
    }
  },     
  fechanacimiento2: {
    type: 'datemodal',
    label: 'Fecha Bautizo',
    options : {
    }
  },     
  fechanacimiento3: {
    type: 'datemodal',
    label: 'Fecha nacimiento',
    options : {
    }
  },     
  fechanacimiento4: {
    type: 'datemodal',
    label: 'Fecha nacimiento',
    options : {
    }
  },     
  fechanacimiento5: {
    type: 'datemodal',
    label: 'Fecha nacimiento',
    options : {
    }
  },     
  fechanacimiento6: {
    type: 'datemodal',
    label: 'Fecha nacimiento',
    options : {
    }
  },     
  fechanacimiento7: {
    type: 'datemodal',
    label: 'Fecha nacimiento',
    options : {
    }
  }  
};
var TestForm = React.createClass({  
  render: function() {
    return (
      <View style={styles.container}>
        <Form 
          items={formItems} 
          style={styles.form}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    alignSelf:'stretch',
    flexDirection: 'column',    
    margin: 10,
    marginTop: 30,
    padding: 10,
  }
});

AppRegistry.registerComponent('TestForm', () => TestForm);
