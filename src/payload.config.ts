import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";
import { Users } from "./collections/Users";
import dotenv from 'dotenv'

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

export default buildConfig({
    serverURL: process.env.SERVER_URL || '',
    collections: [Users],
    routes: {
        admin: '/sell',
    },
    admin: {
        user: "users",
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- BFlex",
            favicon: "/favicon.ico",
        }
    },
    rateLimit: {
        max: 2000,
    }, // return to default in production
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGO_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname, "./payload-types.ts"),
    }

})