import React, { useEffect } from "react";
import { DeviceEventEmitter } from 'react-native';
import DeviceAngles from 'react-native-device-angles';



DeviceAngles.setDeviceMotionUpdateInterval(0.5)

export default () => {
  useEffect(()=> {
    DeviceAngles.startMotionUpdates();
    DeviceEventEmitter.addListener('AnglesData', function (data) {
      console.log(data.pitch, data.roll, data.yaw);
      
      if (data.pitch < 90 && data.pitch > 75){
        console.log('the pitch is between 75 - 90!!')
      }
      
      
    });

    return () => {
      DeviceAngles.stopMotionUpdates();
    }
  }, [])
  return null
}
