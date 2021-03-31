import axios from "axios";
import {API_URL} from "@env";

const authenticate = async (username, password) => {
    console.log("Todo - authenticate");
    const config = {
        method: "POST",
        baseURL: API_URL,
        headers: {
            "content-type": "application/json",
        },
    };

    try {
        const response = await axios.post(
            "/authenticate",
            { username, password },
            config
        );

        if (response?.status == 200) {
            if (response.data?.jwttoken) {
                return { token: response.data.jwttoken };
            } else {
                return { message: "Ha ocurrido un error en el servidor" };
            }
        } else {
            console.log(`response estatus: ${response.status}`);
            return { message: "Ha ocurrido un error" };
        }
    } catch (err) {
        return { message: `El servicio no está disponible` };
    }
};

const getAll = async (token) => {
    console.log("Todo - getAll");
    const config = {
        method: "GET",
        baseURL: API_URL,
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.get("/api/todo/all", config);

        if (response?.status == 200) {
            if (response.data) {
                return { todos: response.data };
            } else {
                return { message: "Ha ocurrido un error en el servidor" };
            }
        } else {
            console.log(`response estatus: ${response.status}`);
            return { message: "Ha ocurrido un error" };
        }
    } catch (err) {
        return { message: `El servicio no está disponible` };
    }
};

const addNew = async (newTodo, token) => {
    console.log("Todo - addNew");
    const config = {
        method: "POST",
        baseURL: API_URL,
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.post("/api/todo/", newTodo, config);

        if (response?.status == 201) {
            if (response.data) {
                return response.data;
            } else {
                return { message: "Ha ocurrido un error en el servidor" };
            }
        } else {
            console.log(`response estatus: ${response.status}`);
            return { message: "Ha ocurrido un error" };
        }
    } catch (err) {
        return { message: `El servicio no está disponible` };
    }
};

const deleteById = async (id, token) => {
    console.log("Todo - deleteById");
    const config = {
        method: "DELETE",
        baseURL: API_URL,
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + token,
        },
    };

    try {
        const response = await axios.delete(`/api/todo/${id}`, config);
        if (response?.status == 204) {
            return { message: "Borrador correctamente" };
        } else {
            console.log(`response estatus: ${response.status}`);
            return { message: "Ha ocurrido un error" };
        }
    } catch (err) {
        return { message: `El servicio no está disponible` };
    }
};

export { authenticate, getAll, addNew, deleteById };
