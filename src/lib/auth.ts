import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "..";
import * as schema from "../db/schema";
import { expo } from "@better-auth/expo";

export const auth = betterAuth({
    baseURL: "http://192.168.1.62:8081",
    plugins: [expo()],
    trustedOrigins: [
        "http://localhost:8081",
        "prime://",
        "http://localhost:3000",

        ...(process.env.NODE_ENV === "development" ? [
            "exp://",
            "exp://**",
            "exp://192.168.*.*:*/**",
        ] : [])
    ],
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: schema,
    }),
    emailAndPassword: {
        enabled: true,
    },
});