
const getEnv = ( key:string, defaultValue?:string ): string => {
    const value = process.env[key] || defaultValue

    if (value === undefined){
        throw new Error(`Missing enviroment key ${key}`)
    }
    return value
}

export const NODE_ENV = getEnv("NODE_ENV", "development")
export const PORT = getEnv("PORT", "3000")
export const MONGO_DB_URI = getEnv("MONGO_DB_URI")
export const APP_ORIGIN = getEnv("APP_ORIGIN")