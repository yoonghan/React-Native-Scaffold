import { PermissionsAndroid } from 'react-native';
import {Platform} from 'react-native';

async function androidRequestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION ,
      {
        'title': 'Request for device location',
        'message': 'Sorry but i do need the device location'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
  } catch (err) {
    console.warn(err)
  }
  return false;
}

export async function requestLocationPermission() {
  return Platform.select({
    ios: true,
    android: await androidRequestLocationPermission()
  });
}
