import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, TextInput, Button } from 'react-native';

import data from './data.json';

const DEVICE = Dimensions.get('window')

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      totalPrice: 0,
    }
  }

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  updatePrice(price) {
    //? #Soal Bonus (10 poin) 
    //? Buatlah teks 'Total Harga' yang akan bertambah setiap kali salah satu barang/item di klik/tekan.
    //? Di sini, buat fungsi untuk menambahkan nilai dari state.totalPrice dan ditampilkan pada 'Total Harga'.
    
    // Kode di sini
  }


  render() {
    console.log(data)
    return (
      <View style={styles.container}>
        <View style={{ minHeight: 50, width: DEVICE.width * 0.88 + 20, marginVertical: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Hai,{'\n'}
            {/* //? #Soal 1 Tambahan, Simpan userName yang dikirim dari halaman Login pada komponen Text di bawah ini */}
              <Text style={styles.headerText}>{`${this.props.userName}`}</Text>
            </Text>

            {/* //? #Soal Bonus, simpan Total Harga dan state.totalPrice di komponen Text di bawah ini */}
            <Text style={{ textAlign: 'right' }}>Total Harga{'\n'}
              <Text style={styles.headerText}>tempat total harga</Text>
            </Text>
          </View>
          <View>

          </View>
          <TextInput
            style={{ backgroundColor: 'white', marginTop: 8 }}
            placeholder='Cari barang..'
            onChangeText={(searchText => this.setState({ searchText }))}
          />
        </View>
        <View>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} /> 
        </View>
        {/* 
        //? #Soal No 2 (15 poin)
        //? Buatlah 1 komponen FlatList dengan input berasal dari data.json
        //? dan pada prop renderItem menggunakan komponen ListItem -- ada di bawah --
        //? dan memiliki 2 kolom, sehingga menampilkan 2 item per baris (horizontal)

        // Lanjutkan di bawah ini!
        */}

      </View>
    )
  }
};

class ListItem extends React.Component {

  currencyFormat(num) {
    return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  };

  //? #Soal No 3 (15 poin)
  //? Buatlah styling komponen ListItem, agar dapat tampil dengan baik di device

  render() {
    const data = this.props.data
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: data.gambaruri }} style={styles.itemImage} resizeMode='contain' />
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.itemName} >{data.nama}</Text>
        <Text style={styles.itemPrice}>{this.currencyFormat(Number(data.harga))}</Text>
        <Text style={styles.itemStock}>Sisa stok: {data.stock}</Text>
        <Button title='BELI' color='blue' />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  //? Lanjutkan styling di sini
  itemContainer: {
    width: DEVICE.width * 0.44,
    flexDirection : 'column'
  },
  itemImage: {
  },
  itemName: {
  },
  itemPrice: {
  },
  itemStock: {
  },
  itemButton: {
  },
  buttonText: {
  }
})
