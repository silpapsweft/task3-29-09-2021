import React from 'react';
import {View } from 'react-native';
import { Checkbox } from 'react-native-paper';
const Items = () => {
   const [checked, setChecked] = React.useState(false);
   return (
      <View>
         <Checkbox 
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
               setChecked(!checked);
            }}
            color={'#154c79'}

         />
    
      </View>
   );
};

export default Items;