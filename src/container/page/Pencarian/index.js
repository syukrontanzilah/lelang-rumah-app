import React, { Component } from 'react';
import {
    View,
    Text, TextInput,
    Image, ScrollView, TouchableOpacity, Picker
}
    from 'react-native';

class Pencarian extends Component {
    state = { kategori: '' }
    updateKategori = (kategori) => {
        this.setState({ kategori: kategori })
    }

    state = { hargamin: '' }
    updateHargamin = (hargamin) => {
        this.setState({ hargamin: hargamin })
    }

    state = { harga: '' }
    updateHarga = (harga) => {
        this.setState({ harga: harga })
    }
    state = { provinsi: '' }
    updateProvinsi = (provinsi) => {
        this.setState({ provinsi: provinsi })
    }

    state = { kota: '' }
    updateKota = (kota) => {
        this.setState({ kota: kota })
    }

    state = { dokumen: '' }
    updateDokumen = (dokumen) => {
        this.setState({ dokumen: dokumen })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ paddingVertical: 15, backgroundColor: 'darkcyan' }}>
                        <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>Pencarian Agunan</Text>
                    </View>

                    <ScrollView>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Kategori</Text>
                                <View style={{ borderWidth: 1, borderColor: '#d6dee3', borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                    <Picker selectedValue={this.state.kategori} onValueChange={this.updateKategori}>
                                        <Picker.Item label='Semua' value='kategori' />
                                        <Picker.Item label='Ruko' value='ruko' />
                                        <Picker.Item label='Tanah & Bangunan' value='tanahbangunan' />
                                        <Picker.Item label='Gudang' value='gudang' />
                                        <Picker.Item label='Tanah Sawah' value='tanahsawah' />
                                        <Picker.Item label='Tanah Kebun' value='tanahkebun' />
                                        <Picker.Item label='Tanah Darat' value='tanahdarat' />
                                        <Picker.Item label='Bangunan' value='bangunan' />
                                        <Picker.Item label='Tanah Kosong' value='tanahkosong' />
                                        <Picker.Item label='SPBU' value='spbu' />
                                        <Picker.Item label='Kios' value='kios' />
                                        <Picker.Item label='Mobil' value='mobil' />
                                        <Picker.Item label='Alat Berat' value='alatberat' />
                                        <Picker.Item label='Mesin' value='mesin' />
                                        <Picker.Item label='Motor' value='motor' />
                                        <Picker.Item label='Lain-lain' value='lainlain' />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Harga Minimum</Text>

                                <View style={{ borderWidth: 1, borderColor: '#d6dee3', borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                    <Picker selectedValue={this.state.hargamin} onValueChange={this.updateHargamin}>
                                        <Picker.Item label='Semua' value='hargamin' />
                                        <Picker.Item label='Rp. 50 Juta' value='50juta' />
                                        <Picker.Item label='Rp. 100 Juta' value='100juta' />
                                        <Picker.Item label='Rp. 200 Juta' value='200juta' />
                                        <Picker.Item label='Rp. 300 Juta' value='300juta' />
                                        <Picker.Item label='Rp. 400 Juta' value='400juta' />
                                        <Picker.Item label='Rp. 500 Juta' value='500juta' />
                                        <Picker.Item label='Rp. 750 Juta' value='750juta' />
                                        <Picker.Item label='Rp. 1 Milyar' value='1milyar' />
                                        <Picker.Item label='Rp. 2 Milyar' value='2milyar' />
                                        <Picker.Item label='Rp. 5 Milyar' value='5milyar' />
                                        <Picker.Item label='Rp. 10 Milyar' value='10milyar' />
                                        <Picker.Item label='Rp. 30 Milyar' value='30milyar' />

                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Harga Maksimum</Text>

                                <View style={{ borderWidth: 1, borderColor: '#d6dee3', borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                    <Picker selectedValue={this.state.harga} onValueChange={this.updateHarga}>
                                        <Picker.Item label='Semua' value='harga' />
                                        <Picker.Item label='Rp. 50 Juta' value='50juta' />
                                        <Picker.Item label='Rp. 100 Juta' value='100juta' />
                                        <Picker.Item label='Rp. 200 Juta' value='200juta' />
                                        <Picker.Item label='Rp. 300 Juta' value='300juta' />
                                        <Picker.Item label='Rp. 400 Juta' value='400juta' />
                                        <Picker.Item label='Rp. 500 Juta' value='500juta' />
                                        <Picker.Item label='Rp. 750 Juta' value='750juta' />
                                        <Picker.Item label='Rp. 1 Milyar' value='1milyar' />
                                        <Picker.Item label='Rp. 2 Milyar' value='2milyar' />
                                        <Picker.Item label='Rp. 5 Milyar' value='5milyar' />
                                        <Picker.Item label='Rp. 10 Milyar' value='10milyar' />
                                        <Picker.Item label='Rp. 30 Milyar' value='30milyar' />

                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Provinsi</Text>

                                <View style={{ borderWidth: 1, borderColor: '#d6dee3', borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                    <Picker selectedValue={this.state.provinsi} onValueChange={this.updateProvinsi}>
                                        <Picker.Item label='Semua' value='provinsi' />
                                        <Picker.Item label='Bali' value='bali' />
                                        <Picker.Item label='Banten' value='banten' />
                                        <Picker.Item label='Bengkulu' value='bengkulu' />
                                        <Picker.Item label='DI Aceh' value='aceh' />
                                        <Picker.Item label='DI Yogyakarta' value='yogya' />
                                        <Picker.Item label='DKI Jakarta' value='jakarta' />
                                        <Picker.Item label='Gorontalo' value='gorontalo' />
                                        <Picker.Item label='Jawa Barat' value='jabar' />
                                        <Picker.Item label='Jawa Tengah' value='jateng' />
                                        <Picker.Item label='Jawa Timur' value='jatim' />
                                        <Picker.Item label='Kalimantan Barat' value='kalbar' />
                                        <Picker.Item label='Kalimantan Selatan' value='kalsel' />
                                        <Picker.Item label='Kalimantan Tengah' value='kalteng' />
                                        <Picker.Item label='Kalimantan Timur' value='kaltim' />
                                        <Picker.Item label='Kalimantan Utara' value='kalut' />
                                        <Picker.Item label='Kepulauan Bangka Belitung' value='babel' />
                                        <Picker.Item label='Kepulauan Riau' value='kepriau' />
                                        <Picker.Item label='Lampung' value='lampung' />
                                        <Picker.Item label='Maluku' value='maluku' />
                                        <Picker.Item label='Maluku Utara' value='malukuutara' />
                                        <Picker.Item label='Nusa Tenggara Barat' value='ntb' />
                                        <Picker.Item label='Nusa Tenggara Timur' value='ntt' />
                                        <Picker.Item label='Papua' value='papua' />
                                        <Picker.Item label='Papua Barat' value='papuabarat' />
                                        <Picker.Item label='Riau' value='riau' />
                                        <Picker.Item label='Sulawesi Barat' value='sulbar' />
                                        <Picker.Item label='Sulawesi Selatan' value='sulsel' />
                                        <Picker.Item label='Sulawesi Tengah' value='sulteng' />
                                        <Picker.Item label='Sulawesi Tenggara' value='sulteng' />
                                        <Picker.Item label='Sulawesi Utara' value='sulut' />
                                        <Picker.Item label='Sumatera Barat' value='sumbar' />
                                        <Picker.Item label='Sumatera Selatan' value='sumsel' />
                                        <Picker.Item label='Sumatera Utara' value='sumut' />
                                    </Picker>
                                </View>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Kota</Text>

                                <View style={{ borderWidth: 1, borderColor: '#d6dee3', borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                    <Picker selectedValue={this.state.kota} onValueChange={this.updateKota}>
                                        <Picker.Item label='Semua' value='kota' />
                                        <Picker.Item label='Bengkawang' value='bengkawang' />
                                        <Picker.Item label='Aceh Barat' value='acehbarat' />
                                        <Picker.Item label='Jakarta' value='jakarta' />
                                        <Picker.Item label='Bandung' value='bandung' />
                                        <Picker.Item label='Sukabumi' value='sukabumi' />
                                        <Picker.Item label='Surabaya' value='surabaya' />
                                        <Picker.Item label='Semarang' value='semarang' />
                                        <Picker.Item label='Denpasar' value='denpasar' />
                                        <Picker.Item label='Ubud' value='ubud' />
                                        <Picker.Item label='Salatiga' value='salatiga' />
                                        <Picker.Item label='Bandar Lampung' value='bandarlampung' />
                                        <Picker.Item label='Tasikmalaya' value='tasik' />
                                        <Picker.Item label='Bogor' value='bogor' />
                                        <Picker.Item label='Depok' value='depok' />
                                        <Picker.Item label='Tangerang Selatan' value='tangsel' />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Jenis Dokumen</Text>

                                <View style={{ borderWidth: 1, borderColor: '#d6dee3', borderRadius: 10, height: 40, justifyContent: 'center' }}>
                                    <Picker selectedValue={this.state.dokumen} onValueChange={this.updateDokumen}>
                                        <Picker.Item label='Semua' value='dokumen' />
                                        <Picker.Item label='BPKB' value='bpkb' />
                                        <Picker.Item label='SHGB' value='shgb' />
                                        <Picker.Item label='SHM' value='shm' />
                                        <Picker.Item label='SHMSRS' value='shmsrs' />
                                        <Picker.Item label='SHPTU' value='shptu' />
                                        <Picker.Item label='SHGP' value='shgp' />
                                        <Picker.Item label='Lain-lain' value='lainlain' />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Kata Kunci</Text>
                                <TextInput style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, borderColor: '#d6dee3', fontSize: 16, height: 40 }}
                                    placeholder='Kata Kunci' />
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Alamat</Text>
                                <TextInput style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, borderColor: '#d6dee3', fontSize: 16, height: 40 }}
                                    placeholder='Alamat' />
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 10, }}>
                            <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Tanggal Lelang</Text>
                                <TextInput style={{ borderWidth: 1, paddingHorizontal: 10, borderRadius: 10, borderColor: '#d6dee3', fontSize: 16, height: 40 }}
                                    placeholder='DD/MM/YY' />
                            </View>
                        </View>

                        <View style={{ marginVertical: 20 }} />

                    </ScrollView>

                </View>



                <View style={{ height: 45, flexDirection: 'row', marginBottom: 10, marginHorizontal: 10 }}>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'red', opacity: 0.8, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>RESET</Text>
                    </TouchableOpacity>

                    <View style={{ marginHorizontal: 5 }} />

                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'darkcyan', opacity: 0.8, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>SEARCH</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Pencarian;