import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth'
import { GetCurrentUserDataAPI, getUserData, writeUserData } from '../../Helper/ApiCalls';
import { showToast, validateUserEmail } from '../../Helper/Utils';
// import CustomActivityIndicator from '../../Helper/ActivityIndicator';
import ScreenNames from '../../Helper/ScreenNames';
const Login = ({ navigation }) => {
    // useEffect(() => {
    //     SplashScreen.hide()

    // }, [])


    const [isAgree, setisAgree] = useState(true)
    const [isSecure, setisSecure] = useState(true)
    const [Password, setPassword] = useState('')
    const [eMail, setEMail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const bottomRef = useRef();

    const loginEmailAndPassword = async () => {

        auth().signInWithEmailAndPassword(eMail.trim(), Password)
            .then(async (user) => {
                console.log('>>>  user ', user);

                await GetCurrentUserDataAPI()
                let userData = await getUserData()
                if (userData && userData._data && userData._data.email) {

                } else {
                    await writeUserData({ email: eMail })
                }
                userData = userData._data
                setIsLoading(false)
                console.log('>>> userData ', userData);
                if (userData.type === 'User') {
                    navigation.navigate(ScreenNames.DashBoard)
                }
                else {

                    navigation.navigate(ScreenNames.DashBoard)
                }

            })
            .catch(error => {
                setIsLoading(false)
                console.log('>>> error login ', error);
                if (error.code === 'auth/user-not-found') {
                    showToast('That email address does not exists!')
                }
                else if (error.code === 'auth/wrong-password') {
                    showToast('Wrong Password!')
                }
                else if (error.code === 'auth/network-request-failed') {
                    showToast('Network Error')
                }

            });
    }




    const btnActionSignIn = () => {
        console.log('>>> Sign In click ', eMail);
        if (eMail === '') {
            showToast('Email is required!')
        }
        else if (!validateUserEmail(eMail.trim())) {
            showToast('Enter Valid Email!')
        }
        else if (Password === '') {
            showToast('Password is required!')
        }
        else if (Password.length < 8) {
            showToast('Password should be at least 8 characters ')
        }
        else {
            setIsLoading(true)
            loginEmailAndPassword()
        }
    }


    return (
        <ScrollView>

        
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#eee', marginTop: 20, }}>
            {/* <CustomActivityIndicator
                isLoading={isLoading}
            /> */}
            <Image
                source={require('../../assets/hotel1.jpg')}
                style={{
                    marginLeft: 80,
                    width: 180,
                    height: 180,
                    marginTop: 30,


                }}

            />
            <View style={{ marginTop: 60, }}>


                <ScrollView>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }} >
                        Email
                    </Text>
                    <View style={{
                        shadowColor: "#FFA500",
                        shadowOffset: {
                            width: 3,
                            height: 2,
                        },
                        shadowOpacity: 0.50,
                        shadowRadius: 3.84,
                    }}>
                        <TextInput

                            placeholder='Email'
                            value={eMail}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20, height: 50, }}
                            onChangeText={(text) => setEMail(text)}
                        />
                        <Icon name="mail" size={30} style={{ color: 'black', marginLeft: 320, marginTop: -40, }} />
                    </View>
                    <View>
                        <Text style={{ marginTop: 20, fontWeight: 'bold' }} >

                            Password
                        </Text>
                        <TextInput
                            placeholder='**********'
                            secureTextEntry={true}
                            value={Password}
                            style={{ width: '98%', borderWidth: 1, borderRadius: 10, marginTop: 10, paddingStart: 20 }}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Icon name="lock" size={30} style={{ color: 'black', marginLeft: 320, marginTop: -40, }} />
                    </View>

                    <TouchableOpacity
                        style={{ width: '98%', borderWidth: 1, paddingHorizontal: 20, borderRadius: 10, marginTop: 40, paddingStart: 10, backgroundColor: 'black', marginLeft: 10, }}
                        onPress={() => {
                            btnActionSignIn()
                            navigation.navigate(ScreenNames.DashBoard)
                        }}

                    >
                        <Text style={{ textAlign: 'center', padding: 5, color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10, }} >Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '40%', marginTop: 40, paddingStart: 6, marginLeft: 100, }}
                        onPress={() => {

                            navigation.navigate(ScreenNames.LogIn)
                        }}

                    >
                        <Text style={{ textAlign: 'center', padding: 5, fontWeight: 'bold', fontSize: 15, }} >Forgot Passward?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ width: '98%', borderWidth: 1, paddingHorizontal: 20, borderRadius: 10, marginTop: 40, paddingStart: 10, backgroundColor: 'black', marginLeft: 10, }}
                        onPress={() => {
                            navigation.navigate(ScreenNames.SignUp)
                        }}

                    >
                        <Text style={{ textAlign: 'center', padding: 5, color: 'white', fontWeight: 'bold', fontSize: 20, }} >Sign Up Here</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
        </ScrollView>
    )
}

export default Login;