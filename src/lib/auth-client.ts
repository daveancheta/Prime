import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
    baseURL: "http://192.168.1.62:8081",
    fetchOptions: {
        credentials: "include",
    },
    plugins: [
        expoClient({
            scheme: "prime",
            storagePrefix: "prime",
            storage: SecureStore,
        })
    ]
});