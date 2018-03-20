import React from 'react';
import { Button, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class ProductIndexScreen extends React.Component {
    static navigationOptions = {
        title: 'Products',
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Products</Text>
            </View>
        );
    }
}

class CategoryIndexScreen extends React.Component {
    static navigationOptions = {
        title: 'Categories',
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Categories</Text>
            </View>
        );
    }
}

class ManufacturerIndexScreen extends React.Component {
    static navigationOptions = {
        title: 'Mfgrs',
    };
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Manufacturers</Text>
            </View>
        );
    }
}

class ProductOrderIndexScreen extends React.Component {
    static navigationOptions = {
        title: 'Orders',
    };
    state = {
        'orders': [
            {'key': 1, 'number': '1001', 'product': 'One', 'quantity': 1},
            {'key': 2, 'number': '1002', 'product': 'One', 'quantity': 2},
            {'key': 3, 'number': '1003', 'product': 'One', 'quantity': 3},
            {'key': 4, 'number': '1004', 'product': 'One', 'quantity': 4},
            {'key': 5, 'number': '1005', 'product': 'One', 'quantity': 5},
            {'key': 6, 'number': '1006', 'product': 'One', 'quantity': 6},
            {'key': 7, 'number': '1007', 'product': 'One', 'quantity': 7},
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.orders.map((order, index) =>
                            <View key={order.key} style={styles.item}>
                                <Text>Number: {order.number}</Text>
                                <Text>Product: {order.product}</Text>
                                <Text>Quantity: {order.quantity}</Text>
                                <Button
                                    title="Show"
                                    onPress={() =>  this.props.navigation.navigate('ProductOrderShow', {id:order.key})
                                    }
                                />
                                <Button
                                    title="Edit"
                                    onPress={() =>  this.props.navigation.navigate('ProductOrderEdit', {id:order.key})
                                    }
                                />
                            </View>
                        )
                    }
                </ScrollView>
            </View>
        );
    }
}

class ProductOrderShowScreen extends React.Component {
    static navigationOptions = {
        title: 'Show Product Order',
    };
    render() {
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Product Order {JSON.stringify(id)}</Text>
                <Text>Number</Text>
                <Text>Quantity</Text>
                <Text>Product</Text>
                <Button
                    title="Done"
                    onPress={() =>  this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

class ProductOrderEditScreen extends React.Component {
    static navigationOptions = {
        title: 'Edit Product Order',
    };
    render() {
        const { params } = this.props.navigation.state;
        const id = params ? params.id : null;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Product Order {JSON.stringify(id)}</Text>
                <Text>Number</Text><TextInput style={styles.input} placeholder="Order Number"/>
                <Text>Quantity</Text><TextInput style={styles.input} placeholder="Quantity"/>
                <Text>Product</Text><TextInput style={styles.input} placeholder="Product"/>
                <Button
                    title="Done"
                    onPress={() =>  this.props.navigation.goBack()
                    }
                />
            </View>
        );
    }
}

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
});

const ProductStack = StackNavigator({
    ProductIndex: { screen: ProductIndexScreen },
});

const ProductOrderStack = StackNavigator({
    ProductOrderIndex: { screen: ProductOrderIndexScreen },
    ProductOrderShow: { screen: ProductOrderShowScreen },
    ProductOrderEdit: { screen: ProductOrderEditScreen },
});

const CategoryStack = StackNavigator({
    CategoryIndex: { screen: CategoryIndexScreen },
});

const ManufacturerStack = StackNavigator({
    ManufacturerIndex: { screen: ManufacturerIndexScreen },
});


const RootStack = TabNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        Product: {
            screen: ProductStack,
        },
        Category: {
            screen: CategoryStack,
        },
        Manufacturer: {
            screen: ManufacturerStack,
        },
        ProductOrder: {
            screen: ProductOrderStack,
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})
