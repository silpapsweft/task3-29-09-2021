import React from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Icon } from 'react-native-elements';
import Check from './component/Items';
import Button from './component/Button';
const Data = [
  {
    id: 1,
    title: 'Bio PetActive',
  },
  {
    id: 2,
    title: 'Calibra',
  },
  {
    id: 3,
    title: 'Calibra Veterinary Diets',
  },
  {
    id: 4,
    title: 'F10Products',
  },
  {
    id: 5,
    title: "Harrison's Bird Foods",
  },
  {
    id: 6,
    title: 'Dermcare',
  },
  {
    id: 7,
    title: 'Equi4s',
  },
  {
    id: 8,
    title: 'Royal Horse',
  },
  {
    id: 9,
    title: 'Covetrus',
  },
  {
    id: 10,
    title: 'Peddymark',
  },
  {
    id: 11,
    title: 'Litecure',
  },
  {
    id: 12,
    title: 'Idexx Lpd',
  },
  {
    id: 13,
    title: 'Idexx Reference Lab',
  },
]
const App = () => {

  const Item = ({ item }) => {
    return (

      <View ><TouchableOpacity >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', color: '#154c79' }}>
          <Text style={{ color: '#154c79', marginVertical: 20 }}>{item.title}</Text>
          <Check />

        </View>
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}></View>
      </TouchableOpacity>

      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 10 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#fafafa', height: 40, width: '70%', borderRadius: 10 }}>
          <Icon name="search" size={20} color='#ccc' type='feather' style={{ paddingHorizontal: 10, paddingVertical: 5 }} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ccc"
            color="#000"
          />
        </View>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', height: 40, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, borderRadius: 5, marginLeft: 30 }}>
          <Text style={{ color: '#154c79' }}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, }}>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15, paddingHorizontal: 10, flexDirection: 'row' }}>
          <Text>All Products</Text><Icon name="down" size={12} color='#154c79' type='antdesign' style={{ paddingHorizontal: 10, paddingVertical: 5 }} />

        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15, paddingHorizontal: 10, flexDirection: 'row' }}>
          <Text>Brands</Text><Icon name="down" size={12} color='#154c79' type='antdesign' style={{ paddingHorizontal: 10, paddingVertical: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15, paddingHorizontal: 10, flexDirection: 'row' }}>
          <Text>Sort</Text><Icon name="down" size={12} color='#154c79' type='antdesign' style={{ paddingHorizontal: 10, paddingVertical: 5 }} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 12, borderWidth: 1, borderColor: '#ccc', borderRadius: 15, marginHorizontal: 20 }}>
        <FlatList
          data={Data}
          renderItem={Item}
          style={{ marginHorizontal: 20 }}
        />

      </View>
      <View style={{ flex: 1, height: 40, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 20, marginTop: 15 }}>
        <Button />
      </View>
    </View>
  )
}

export default App
