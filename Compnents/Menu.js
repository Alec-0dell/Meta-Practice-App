import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, ProgressViewIOSComponent, SectionList, Pressable } from 'react-native';
import Footer from './Footer';

/** const menuItemsToDisplayOG = [
  'Hummus\nMoutabal\nFalafel\nMarinated Olives\nKofta\nEggplant Salad\nLentil Burger\nSmoked Salmon\nKofta Burger\nTurkish Kebab\nFries\nButtered Rice\nBread Sticks\nPita Pocket\nLentil Soup\nGreek Salad\nRice Pilaf\nBaklava\nTartufo\nTiramisu\nPanna Cotta',
];  
<ScrollView
        indicatorStyle='white' 
        style={{padding: 40}}>
    <Text style={{ fontSize: 40, flexWrap: 'wrap', color: 'white'}}>View Menu</Text>
    <Text style={{ fontSize: 25, flexWrap: 'wrap', color: 'white'}}>{menuItemsToDisplay[0]}</Text>
</ScrollView>
*/ 

/**const menuItemsToDisplay = [
  { name: 'Hummus', price: '$5.00', id: '1A' },
  { name: 'Moutabal', price: '$5.00', id: '2B' },
  { name: 'Falafel', price: '$7.50', id: '3C' },
  { name: 'Marinated Olives', price: '$5.00', id: '4D' },
  { name: 'Kofta', price: '$5.00', id: '5E' },
  { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
  { name: 'Lentil Burger', price: '$10.00', id: '7G' },
  { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
  { name: 'Kofta Burger', price: '$11.00', id: '9I' },
  { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
  { name: 'Fries', price: '$3.00', id: '11K' },
  { name: 'Buttered Rice', price: '$3.00', id: '12L' },
  { name: 'Bread Sticks', price: '$3.00', id: '13M' },
  { name: 'Pita Pocket', price: '$3.00', id: '14N' },
  { name: 'Lentil Soup', price: '$3.75', id: '15O' },
  { name: 'Greek Salad', price: '$6.00', id: '16Q' },
  { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
  { name: 'Baklava', price: '$3.00', id: '18S' },
  { name: 'Tartufo', price: '$3.00', id: '19T' },
  { name: 'Tiramisu', price: '$5.00', id: '20U' },
  { name: 'Panna Cotta', price: '$5.00', id: '21V' },
];

const Item =({name, price}) => {
  return(
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  )
}

const Separator = () => <View style={menuStyles.separator}/>
const ListFooter = () => <View style={menuStyles.innerContainer}><Text style={menuStyles.itemText}>Some Shit</Text></View>

const Menu = () => {
  const renderItem = ({item}) => <Item name={item.name} price={item.price}/>

  return (
    <View style={menuStyles.container}>
      <FlatList 
      data = {menuItemsToDisplay} 
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={ListFooter}
      />
    </View>
  );
};

*/
const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];


const Item =({name, price}) => {
  return(
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{price}</Text>
    </View>
  )
}

const Separator = () => <View style={menuStyles.separator}/>
const ListFooter = () => <View style={menuStyles.innerContainer}><Text style={menuStyles.itemText}>Some Shit</Text></View>

const Menu = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false)
  const renderItem = ({item}) => <Item name={item.name} price={item.price}/>
  const renderSectionHeader = ({section: {title}}) =>  (
     <Text style={menuStyles.sectionHeaderText}>{title}</Text>
  )
  return (
    <View style={menuStyles.container}>
      <Pressable style={menuStyles.button} onPress={() => {
        setShowMenu(!showMenu)
      }}>
        <Text style={menuStyles.buttonText}>
          {showMenu ? 'Home' : 'View Menu'}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList 
        sections = {menuItemsToDisplay} 
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        />
      )}
      <Pressable style={menuStyles.button} onPress={() => navigation.goBack}>
        <Text style={menuStyles.buttonText}>
          Go Back
        </Text>
      </Pressable>
    </View>
  );
};


const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  separator: {
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 30,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#edefee',
    borderColor: 'Black',
    borderWidth: 2,
    borderRadius: 12
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32
  }
});





export default Menu;