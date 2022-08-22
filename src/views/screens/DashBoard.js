import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, FlatList, ImageBackground } from 'react-native';
import React from 'react'
import ScreenNames from '../../Helper/ScreenNames';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DashBoard = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF', marginTop: 10, }}>

                <View>
                    <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                        OTG {"\n"}On The Go!
                    </Text>
                    <TouchableOpacity style={{ marginLeft: 280, marginTop: -60 }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.HomeScreen)
                        }}
                    >
                        <Text></Text><Icon name='person' size={45} style={{ color: 'black', marginLeft: 40, marginTop: -10, }} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 25, }}>

                        <TextInput
                            placeholder='Find Your Hotel ...'
                            style={{ width: '99%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20, borderColor: '#D3D3D3', }}>
                        </TextInput>
                        <Icon name="search" size={30} style={{ color: 'black', marginTop: 20, marginLeft: -50, marginRight: 20 }} />
                    </View>

                    <View style={{ justifyContent: 'center', }} >
                        <Text style={{ marginTop: 10, fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                            Favourite Hotel
                        </Text>
                    </View>


                    <View >
                        <ImageBackground style={{

                            height: 115,
                            borderWidth: 2,
                            marginTop: 10,
                            resizeMode: 'cover',
                            width: '100%',
                        }} source={require('../../assets/image7.jpg')}>
                            <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 10, }} > Hotels in Lahore</Text>
                            <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, fontWeight: 'bold', color: 'black', }} >Pakistan</Text>
                            <Text style={{ textAlign: 'center', padding: 5, fontSize: 12, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: -7, }} >There is so much more Hotels.{"\n"}Read more about Lahore.</Text>

                        </ImageBackground>


                    </View>
                    <View style={{ justifyContent: 'center', marginTop: 20, }} >

                        <Text style={{ marginTop: 2, fontSize: 24, textAlign: 'left', color: 'black', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', }} >
                            Recommended Hotels
                        </Text>
                    </View>


                </View>

                <View style={{}}>

                    <View style={{ width: '100%' }}>

                        <ScrollView>
                            <TouchableOpacity

                                style={{ width: '100%', height: 130, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.HomeScreen)
                                }}
                            >

                                <Image style={{ marginTop: 0, height: 130, width: '100%', resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../../assets/image1.webp')}
                                />
                                {/* <View><Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginTop: 80, }} >Khunjrab Pass</Text>
                        </View> */}
                            </TouchableOpacity>
                            <TouchableOpacity

                                style={{ width: '100%', height: 130, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.HomeScreen)
                                }}
                            >

                                <Image style={{ marginTop: 0, height: 130, width: '100%', resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../../assets/image.webp')}
                                />
                                {/* <View><Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', marginTop: 80, }} >Khunjrab Pass</Text>
</View> */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: '100%', height: 130, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.HomeScreen)
                                }}
                            >
                                <Image style={{ marginTop: 0, height: 130, width: '100%', resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../../assets/image3.jpg')} />
                                {/* <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', }} >Abbotabad</Text>  */}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ width: '100%', height: 130, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', }}
                                onPress={() => {
                                    navigation.navigate(ScreenNames.HomeScreen)
                                }}
                            >
                                <Image style={{ marginTop: 0, height: 130, width: '100%', resizeMode: "stretch", marginRight: 30, borderRadius: 15, }} source={require('../../assets/image6.jpeg')} />
                                {/* <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, color: 'black', }} >Abbotabad</Text>  */}
                            </TouchableOpacity>

                        </ScrollView>
                    </View>


                </View >




                <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 30 }}>



                    <TouchableOpacity
                        style={{ width: '99%', height: 60, borderWidth: 0, borderRadius: 10, marginTop: 15, justifyContent: 'center', backgroundColor: 'black', }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.HomeScreen)
                        }}
                    >
                        <Text style={{ textAlign: 'center', padding: 5, fontSize: 20, fontWeight: '600', color: 'white', }} >More !</Text>
                    </TouchableOpacity>

                </View>

            </View >


        </ScrollView >





    )
}

export default DashBoard;