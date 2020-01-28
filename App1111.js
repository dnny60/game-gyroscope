
// import React, { Component } from "react";
// import { ScrollView } from "react-native";
// import SensorView from "./SensorView";

// const axis = ["x", "y", "z"];

// const availableSensors = {
//   accelerometer: axis,
//   gyroscope: axis,
//   magnetometer: axis,
//   barometer: ["pressure"]
// };
// const viewComponents = Object.entries(availableSensors).map(([name, values]) =>
//   SensorView(name, values)
// );

// export default class App extends Component {
//   render() {
//     return (
//       <ScrollView>
//         {viewComponents.map((Comp, index) => <Comp key={index} />)}
//       </ScrollView>
//     );
//   }
// }



import { DeviceEventEmitter } from 'react-native';
import DeviceAngles from 'react-native-device-angles';

DeviceAngles.setDeviceMotionUpdateInterval(0.1);
...
DeviceAngles.startMotionUpdates();
...
DeviceEventEmitter.addListener('AnglesData', function (data) {
  console.log(data.pitch);
  console.log(data.roll);
  console.log(data.yaw);
});