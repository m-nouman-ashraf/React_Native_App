import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Modal, TouchableOpacity, View, Image, Animated } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import { OrderBookingAPI } from '../../Helper/ApiCalls';
import ScreenNames from '../../Helper/ScreenNames';
const PopUp = ({ modalOpen, setModalopen }, { route }) => {
    const { item } = route.params;
    return (
        <View>
            <Modal visible={modalOpen}>
                <MaterialIcons
                    name='close'
                    size={30}
                    onPress={() => setModalopen(false)} />
                <View style={styles.modalContent}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Please enter the inforation Below to Confirm you booking  </Text>
                    <View style={[styles.searchInputContainer]}>
                        <TextInput
                            placeholder="Full Name "
                            style={{ fontSize: 15, paddingLeft: 20 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.Layout]}>
                            <TextInput
                                placeholder="Check in"
                                style={{ fontSize: 15, paddingLeft: 20 }}
                            />
                        </View>
                        <View style={[styles.Layout]}>
                            <TextInput
                                placeholder="Check out"
                                style={{ fontSize: 15, paddingLeft: 20 }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.Layout]}>
                            <TextInput
                                placeholder="Room"
                                style={{ fontSize: 15, paddingLeft: 20 }}
                            />
                        </View>
                        <View style={[styles.Layout]}>
                            <TextInput
                                placeholder="Adults"
                                style={{ fontSize: 15, paddingLeft: 20 }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.Layout]}>
                            <TextInput
                                placeholder="Children"
                                style={{ fontSize: 15, paddingLeft: 20 }}
                            />
                        </View>
                        <View style={[styles.Layout]}>
                            <TextInput
                                placeholder="Infants"
                                style={{ fontSize: 15, paddingLeft: 20 }}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={async () => {
                            // navigation.navigate(ScreenNames.OrderRide)
                            let data = { plan: item }
                            OrderBookingAPI(data).then(() => {
                                showToast('Booking Confirmed Successfully!')
                                navigation.navigate(ScreenNames.DashBoard)
                                console.log('Hi success');
                            })

                        }} >
                        <View style={styles.btn}>
                            <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                                Confirm Booking
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.primary,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20
    },

    Layout: {
        height: 50,
        backgroundColor: COLORS.primary,
        marginTop: 30,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        width: 150
    },
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10,
    }, btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10,
    },

})
export default PopUp;