import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import { toastAlert } from "../services/toastAlert";
import { authenticate } from "../services/todoFetch";

export const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const attempLogin = async () => {
        if (username.length > 3 && password.length > 3) {
            const authenticateResp = await authenticate(username, password);

            if (authenticateResp?.token) {
                navigation.navigate("home", { token: authenticateResp.token });
            } else {
                toastAlert(
                    "Error al autenticarse: " + authenticateResp.message
                );
            }
        } else {
            toastAlert("Debe ingresar datos validos");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username."
                    placeholderTextColor="coral"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="coral"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={attempLogin}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "baseline",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "coral",
    },
});
