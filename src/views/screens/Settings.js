
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
const Profile = () => {
    return (
        <View>
            <View style={[styles.searchInputContainer]}>
                <TextInput
                    placeholder="Full Name "
                    style={{ fontSize: 15, paddingLeft: 10 }}
                />
            </View>
            <View style={[styles.Date]}>
                <TextInput
                    placeholder="Date Of birth"
                    style={{ fontSize: 15, paddingLeft: 10 }}
                />
            </View>
            <View style={[styles.Phone]}>
                <TextInput
                    placeholder="Phone"
                    style={{ fontSize: 15, paddingLeft: 10 }}
                />
            </View>
            <View style={[styles.Gender]}>
                <TextInput
                    placeholder="Gender"
                    style={{ fontSize: 15, paddingLeft: 10 }}
                />
            </View>
            <View style={styles.btn}>
                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: 'bold' }}>
                    Save
                </Text>
            </View>
        </View >
    )
};



const styles = StyleSheet.create({
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.grey,
        marginTop: 150,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 20
    },
    Date: {
        height: 50,
        backgroundColor: COLORS.grey,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 20
    },
    Phone: {
        height: 50,
        backgroundColor: COLORS.grey,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 20
    },
    Gender: {
        height: 50,
        backgroundColor: COLORS.grey,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'red',
        borderRadius: 20
    },
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10,
    },

});

export default Profile;