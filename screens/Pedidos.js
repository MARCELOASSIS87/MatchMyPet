import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const Pedidos = ({ navigation }) => {
  // Simulando as categorias
  const categories = [
    { id: '1', title: 'Rações Premium',  },
  ];

  // Simulando os produtos
  const products = [
    { id: '1', name: 'Ração Úmida Royal Canin', price: 'R$ 7,00',  },
    { id: '2', name: 'Ração Seca Golden 15kg', price: 'R$ 89,00',  },
    { id: '3', name: 'Ração Seca Ciclos', price: 'R$ 60,00',       },
    { id: '4', name: 'Ração Seca Premier', price: 'R$ 120,00',     },
  ];

  // Renderizar a lista de produtos
  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      {item.oldPrice ? (
        <Text style={styles.oldPrice}>{item.oldPrice}</Text>
      ) : null}
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Categoria */}
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <View key={category.id} style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{category.title}</Text>
          </View>
        ))}
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} // Exibir 2 colunas
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

export default Pedidos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  categoryContainer: {
    marginVertical: 20,
    alignItems: 'flex-start',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productsContainer: {
    paddingBottom: 20,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 12,
    color: '#777',
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});
