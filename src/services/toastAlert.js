import { ToastAndroid, Platform, AlertIOS } from "react-native";

const toastAlert = (message) => {
    if (Platform.OS === "android") {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
        AlertIOS.alert(message);
    }
};

export { toastAlert };
