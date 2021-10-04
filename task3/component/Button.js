import React from 'react'
import {FlatList,TouchableOpacity,Text,StyleSheet } from 'react-native'
const numColumns = 2;
const Data = [
    {
        id: "1",
        title: "Close",
    },
    {
        id: "2",
        title: "Apply",
    },
]
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, backgroundColor]}>
        <Text style={[textColor]}>{item.title}</Text>
    </TouchableOpacity>
);
const Button = () => {  
    const [selectedId, setSelectedId] = React.useState(null);
      
        
            const renderItem = ({ item }) => {
                const backgroundColor = item.id === selectedId ? "#154c79" : "#fff";
                const color = item.id === selectedId ? 'white' : '#154c79';
                return (
                    <Item
                        item={item}
                        onPress={() => setSelectedId(item.id)}
                        backgroundColor={{ backgroundColor }}
                        textColor={{ color }}
                    />
                );
            };
            return(
                <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                numColumns={numColumns}
            />

            )
    
}
const styles=StyleSheet.create(
    {
        button:{
            borderWidth: 1, 
            borderColor: '#ccc', 
            height: 40, 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 5, 
            paddingHorizontal: 10, 
            flexDirection: 'row', 
            width: '48%', 
            color: '#154c79',marginRight:12
    
        }
    }
)

export default Button
