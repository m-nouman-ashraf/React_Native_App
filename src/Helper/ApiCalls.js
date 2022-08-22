
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firestore from '@react-native-firebase/firestore';



export const GetCurrentUserDataAPI = async () => {

    const UserData = auth().currentUser
    try {
        await AsyncStorage.setItem('@storage_user_id', UserData.uid)
        return UserData
    } catch (e) {
        // saving error
        console.log('>>> saving error : ', e);
    }

}
export const emptysUserData = async () => {
    try {
        await AsyncStorage.setItem('@storage_user_id', '')
    } catch (e) {
        // saving error
        console.log('>>> saving error : ', e);
    }

}


export const getUserId = async () => {

    try {
        const value = await AsyncStorage.getItem('@storage_user_id')
        if (value !== null) {
            // value previously stored
            console.log('>>> Read user value : ', value);

        }
        return value
    } catch (e) {
        // error reading value
        console.log('>>> error reading value : ', e);
    }
}

export const writeUserData = async (body) => {
    const value = await AsyncStorage.getItem('@storage_user_id')
    var userObject = await firestore().collection('Users').doc(value).get();
    let user = userObject._data === undefined ? {} : userObject._data
    console.log('>>> user user user', user);
    if (body.name && body.name !== '') {
        user.name = body.name
    }
    if (body.firstName && body.firstName !== '') {
        user.firstName = body.firstName
    }
    if (body.lastName && body.lastName !== '') {
        user.lastName = body.lastName
    }
    if (body.userMobile && body.userMobile !== '') {
        user.userMobile = body.userMobile
    }
    if (body.address && body.address !== '') {
        user.address = body.address
    }
    if (body.city && body.city !== '') {
        user.city = body.city
    }

    if (body.email && body.email !== '') {
        user.email = body.email
    }
    if (body.age && body.age !== '') {
        user.age = body.age
    }
    if (body.gender && body.gender !== '') {
        user.gender = body.gender
    }
    if (body.profileUrl) {

        user.profileUrl = body.profileUrl
    }
    if (body.type) {
        user.type = body.type
    }
    if (body.cnicFront) {
        user.cnicFront = body.cnicFront
    }
    if (body.cnicBack) {
        user.cnicBack = body.cnicBack
    }



    firestore()
        .collection('Users')
        .doc(value)
        .set(user)
        .then(() => {
            console.log('User added!');
        });
}

export const OrderBookingAPI = async (data) => {

    firestore()
        .collection('BookingDetails')
        .doc(Math.random(100000).toString())
        .set(data)
        .then(() => {
            console.log('User added! ride order');
        });

}

export const getOrdersBookingAPI = async () => {

    var user = await firestore().collection('BookingDetails').get();
    user = user._docs
    user = user.map(item => item._data)
    return (user)
}
export const writeHotelOrder = async (body) => {
    console.log('>>> Come JHere 11');
    // var ordersFuel = await firestore().collection('OrdersFuel').doc("Orders").get();
    // console.log('>>> ordersFuel ', ordersFuel._data);
    // let ordersFuelData = ordersFuel._data
    // [
    // "UNIQUE ID",
    // ]

    console.log('>>> Come JHere 22');
    // ordersFuelData = ordersFuelData && ordersFuelData.length > 0 ? [...ordersFuelData, body] : [body]

    // console.log('>>> Come JHere 33', ordersFuelData);
    firestore()
        .collection('BookingDetails')
        .doc(body.date)
        .set(body)
        .then(() => {
            console.log('User added! BookingDetails');
        }).catch((err) => {
            console.log(">>> Error ", err);
        });

}
export const writeStoresData = async (body) => {

    firestore()
        .collection('StoresProduts')
        .doc(body.store)
        .set(body)
        .then(() => {
            console.log('User added!');
        }).catch((err) => {
            console.log(">>> Error ", err);
        });

}
export const getStoresData = async (body) => {
    var getStores = await firestore().collection('StoresProduts').doc(body).get();
    getStores = getStores._data
    return getStores
}
export const getStoresDataAll = async () => {
    var getStores = await firestore().collection('StoresProduts').get();
    getStores = getStores._docs
    getStores = getStores.map((item) => item._data)
    return getStores
}
export const getFuelPrices = async (body) => {
    console.log('>>> Come JHere 11');
    var ordersFuelPrice = await firestore().collection('FuelPrices').get();
    ordersFuelPrice = ordersFuelPrice._docs
    ordersFuelPrice = ordersFuelPrice.map((item) => item._data)
    console.log('>>> ordersFuelPrice ', ordersFuelPrice);
    // let ordersFuelData = ordersFuel._data
    // [
    // "UNIQUE ID",
    // ]

    // ordersFuelData = ordersFuelData && ordersFuelData.length > 0 ? [...ordersFuelData, body] : [body]

    // console.log('>>> Come JHere 33', ordersFuelData);
    return ordersFuelPrice;

}
export const getFuelOrder = async (body) => {
    console.log('>>> Come JHere 11');
    var ordersFuel = await firestore().collection('OrdersFuel').get();
    ordersFuel = ordersFuel._docs
    ordersFuel = ordersFuel.map((item) => item._data)
    console.log('>>> ordersFuel ', ordersFuel);
    // let ordersFuelData = ordersFuel._data
    // [
    // "UNIQUE ID",
    // ]

    // ordersFuelData = ordersFuelData && ordersFuelData.length > 0 ? [...ordersFuelData, body] : [body]

    // console.log('>>> Come JHere 33', ordersFuelData);
    return ordersFuel;

}
export const writePodcastsData = async (value) => {

    const userId = await AsyncStorage.getItem('@storage_user_id')
    var podcasts = await firestore().collection('Podcasts').doc(value).get();
    // console.log('>>> podcasts ', podcasts._data);
    let podcastsData = podcasts._data
    // [
    // "UNIQUE ID",
    // ]
    podcastsData.users = podcastsData.users && podcastsData.users.length > 0 ? [...podcastsData.users, userId] : [userId]
    firestore()
        .collection('Podcasts')
        .doc(value)
        .set(podcastsData)
        .then(() => {
            console.log('User added!');
        });

}
export const writeBooksData = async (value) => {

    const userId = await AsyncStorage.getItem('@storage_user_id')
    var books = await firestore().collection('Books').doc(value).get();
    // console.log('>>> books ', books._data);
    let booksData = books._data
    // [
    // "UNIQUE ID",
    // ]
    booksData.users = booksData.users && booksData.users.length > 0 ? [...booksData.users, userId] : [userId]
    var flag = await firestore()
        .collection('Books')
        .doc(value)
        .set(booksData)
        .then(() => {
            return true;
        });
    return flag;
}
export const writeActivitiesData = async (value) => {

    const userId = await AsyncStorage.getItem('@storage_user_id')
    var activities = await firestore().collection('Activities').doc(value).get();
    // console.log('>>> activities ', activities._data);
    let activitiesData = activities._data
    // [
    // "UNIQUE ID",
    // ]
    activitiesData.users = activitiesData.users && activitiesData.users.length > 0 ? [...activitiesData.users, userId] : [userId]
    var flag = await firestore()
        .collection('Activities')
        .doc(value)
        .set(activitiesData)
        .then(() => {
            return true;
        });
    return flag

}
export const writeWebinarData = async (value) => {

    const userId = await AsyncStorage.getItem('@storage_user_id')
    var webinar = await firestore().collection('Webinars').doc(value).get();
    // console.log('>>> webinar ', webinar._data);
    let webinarData = webinar._data
    // [
    // "UNIQUE ID",
    // ]
    webinarData.users = webinarData.users && webinarData.users.length > 0 ? [...webinarData.users, userId] : [userId]
    var flag = await firestore()
        .collection('Webinars')
        .doc(value)
        .set(webinarData)
        .then(() => {
            return true;
        });
    return flag
}
export const writeWishlistData = async (type, value) => {

    const userId = await AsyncStorage.getItem('@storage_user_id')
    var wishlist = await firestore().collection('Wishlist').doc(value).get();
    // console.log('>>> wishlist ', wishlist._data);
    let wishlistData = wishlist._data
    // [
    // { type : books, id : "UNIQYE ID OF BOOK" },
    // { type : activities, id : "UNIQYE ID OF ACTIVITY" },
    // { type : webinar, id : "UNIQYE ID OF  Webinar" },
    // { type : podcasets, id : "UNIQYE ID OF  Podcasets" },
    // ]
    wishlistData = wishlistData && wishlistData.length > 0 ? [...wishlistData, { type: type, id: value }] : [{ type: type, id: value }]
    var flag = await firestore()
        .collection('Wishlist')
        .doc(userId)
        .set(wishlistData)
        .then(() => {
            return true
        });
    return flag
}

export const getUserData = async () => {

    const value = await AsyncStorage.getItem('@storage_user_id')
    var user = await firestore().collection('Users').doc(value).get();
    return (user)
}

export const getMyBooksData = async () => {

    const currentUser = await getUserData()
    const currentUserData = currentUser._data.MyBooks ? currentUser._data.MyBooks : []

    var TempArrayBooks = []
    for (let i = 0; i < currentUserData.length; i++) {

        var oneBooks = await firestore().collection('Books').doc(currentUserData[i].id).get();
        TempArrayBooks.push({ ...oneBooks._data, ...currentUserData[i] })
    }
    return (TempArrayBooks)

}
export const getMyActivitiesData = async () => {

    const currentUser = await getUserData()
    const currentUserData = currentUser._data.MyActivities ? currentUser._data.MyActivities : []

    var TempArrayActivities = []
    for (let i = 0; i < currentUserData.length; i++) {

        var oneBooks = await firestore().collection('Activities').doc(currentUserData[i].id).get();
        TempArrayActivities.push({ ...oneBooks._data, ...currentUserData[i] })
    }
    return (TempArrayActivities)

}
export const getMyWebinarsData = async () => {

    const currentUser = await getUserData()
    const currentUserData = currentUser._data.MyWebinars ? currentUser._data.MyWebinars : []

    var TempArrayMyWebinars = []
    for (let i = 0; i < currentUserData.length; i++) {

        var oneBooks = await firestore().collection('Webinars').doc(currentUserData[i]).get();
        TempArrayMyWebinars.push(oneBooks._data)
    }
    return (TempArrayMyWebinars)

}
export const getWishlistData = async () => {

    const currentUser = await getUserData()
    const currentUserData = currentUser._data.myWishlist ? currentUser._data.myWishlist : []

    var TempArrayWishlist = []
    for (let i = 0; i < currentUserData.length; i++) {

        var oneBooks = await firestore().collection(currentUserData[i].type).doc(currentUserData[i].id).get();
        if (currentUserData[i].type === 'Books') {
            TempArrayWishlist.push({
                ...oneBooks._data, type: currentUserData[i].type,
                MyBooks: [
                    {
                        id: oneBooks.ref._documentPath._parts[1],
                        // percentage: 90,
                        // currentPage: 5
                    }]
            })
        }
        else if (currentUserData[i].type === 'Activities') {
            TempArrayWishlist.push({
                ...oneBooks._data, type: currentUserData[i].type,
                MyActivities: [
                    {
                        id: oneBooks.ref._documentPath._parts[1],
                        // percentage: 90,
                    }
                ]
            })
        }
        else {
            TempArrayWishlist.push({
                ...oneBooks._data, type: currentUserData[i].type,
                id: oneBooks.ref._documentPath._parts[1]
            })
        }
    }
    return (TempArrayWishlist)
}


export const updateBookProgress = async (id, body) => {
    const value = await AsyncStorage.getItem('@storage_user_id')
    var userObject = await firestore().collection('Users').doc(value).get();
    let user = userObject._data === undefined ? {} : userObject._data
    let oldMyBooks = user.MyBooks
    var index = oldMyBooks.findIndex(item => item.id === id)
    oldMyBooks[index] = body;
    user.MyBooks = user.MyBooks && user.MyBooks.length > 0 ? oldMyBooks : user.MyBooks
    firestore()
        .collection('Users')
        .doc(value)
        .set(user)
        .then(() => {
            console.log('User added!');
        });
}
export const updateActvitiesProgress = async (id, body) => {
    const value = await AsyncStorage.getItem('@storage_user_id')
    var userObject = await firestore().collection('Users').doc(value).get();
    let user = userObject._data === undefined ? {} : userObject._data
    let oldMyActivities = user.MyActivities
    var index = oldMyActivities.findIndex(item => item.id === id)
    oldMyActivities[index] = body;
    user.MyActivities = user.MyActivities && user.MyActivities.length > 0 ? oldMyActivities : user.MyActivities
    firestore()
        .collection('Users')
        .doc(value)
        .set(user)
        .then(() => {
            console.log('User added!');
        });
}

export const InitiatePayment = async (bodyData, isSubscription, callback) => {
    const userId = await AsyncStorage.getItem('@storage_user_id')
    firestore()
        .collection(`customers`)
        .doc(userId)
        .collection(`checkout_sessions`)
        .add({
            client: 'mobile',
            mode: isSubscription ? 'setup' : 'payment',
            amount: bodyData.amount,
            currency: 'usd',

        })
        .then((res) => {
            setTimeout(async () => {
                const response = await firestore().collection(`customers`).doc(userId).collection(`checkout_sessions`).doc(res._documentPath._parts[res._documentPath._parts.length - 1]).get()
                callback({
                    customer: response._data && response._data.customer,
                    ephemeralKey: response._data && response._data.ephemeralKeySecret,
                    paymentIntent: response._data && response._data.paymentIntentClientSecret,
                    setupIntentClientSecret: response._data && response._data.setupIntentClientSecret
                })
            }, 3000);
        });
}


export const writePaymentDone = async (bodyData) => {
    const userId = await AsyncStorage.getItem('@storage_user_id')
    firestore()
        .collection(`customers`)
        .doc(userId)
        .collection(`payments`)
        .add({
            client: 'mobile',
            mode: 'payment',
            currency: 'usd',
            booksData: bodyData.booksData,
            date: bodyData.date

        })

}
export const getMyPurchaseHistory = async () => {

    const userId = await AsyncStorage.getItem('@storage_user_id')

    var TempPurchase = await firestore().collection('customers').doc(userId).collection('payments').get();
    TempPurchase = TempPurchase._docs.map((item) => item._data)

    return (TempPurchase)

}
export const writeSubscriptionDone = async (bodyData) => {
    const userId = await AsyncStorage.getItem('@storage_user_id')
    firestore()
        .collection(`customers`)
        .doc(userId)
        .collection(`subscription`)
        .add({
            client: 'mobile',
            mode: 'payment',
            currency: 'usd',
            subscriptionData: bodyData.item,
            date: bodyData.date
        })

}

export const getMySubscriptionHistory = async () => {

    const userId = await AsyncStorage.getItem('@storage_user_id')

    var TempPurchase = await firestore().collection('customers').doc(userId).collection('subscription').get();
    if (TempPurchase && TempPurchase._docs) {

        TempPurchase = TempPurchase._docs.map((item) => item._data)
    }
    else {
        TempPurchase = undefined
    }

    return (TempPurchase)

}