import React, { useState } from 'react';
import { Button, View, Image } from 'react-native'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function QRScanner(props) {

    const [openQRCode, setQRCode] = useState(false)
    const [data, setData] = useState('')
    const [keys, setKeys] = useState([])

    function onSuccess(e) {
        // console.log(e.data)
        // console.log(JSON.parse(e.data))
        setData(JSON.parse(e.data))
        // setData(e.data)
        setKeys(Object.keys(JSON.parse(e.data)))
        setQRCode(!openQRCode)
        // Linking.openURL(e.data, setQRCode(!openQRCode)).catch(err =>
        // console.error('An error occured', err)
        // );
    }

    return (
        <View style={{ borderWidth: 2, flex: 1 }}>
            {console.log(typeof data)}
            {console.log(openQRCode)}
            {/* {console.log(keys)} */}
            <Button title={openQRCode ? "Close" : "Open"} onPress={openQRCode ? () => setQRCode(!openQRCode) : () => setQRCode(!openQRCode)} />
            {openQRCode && <QRCodeScanner
                onRead={onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            //         topContent={
            //             <Text style={styles.centerText}>
            //                 Go to{' '}
            //                 <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            //     your computer and scan the QR code.
            //   </Text>}
            // bottomContent={
            //     <TouchableOpacity style={styles.buttonTouchable}>
            //         <Text style={styles.buttonText}>OK. Got it!</Text>
            //     </TouchableOpacity>
            // }
            />}
            {!openQRCode && Object.keys(data).length > 0 &&
                // {/* {!openQRCode && data.length > 0 && */}
                <View style={{ margin: 5, padding: 5, }}>
                    {/* {console.log(data)} */}
                    {/* <Image style={{ height: 250, width: '100%', borderWidth: 1 }} source={{ uri: data }} /> */}
                    {/* {keys.map((_, i) => {
                        return ( */}
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}>First Name: </Text><Text>{data.fName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}>Last Name: </Text><Text>{data.lName}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}>Email: </Text><Text>{data.email}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}>Phone No: </Text><Text>{data.phoneNo}</Text>
                        </View>
                    </View>
                    {/* )
                    })} */}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});

export default QRScanner;
