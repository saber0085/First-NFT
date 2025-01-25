export const NETWORK = import.meta.env.VITE_APP_NETWORK ?? "testnet";
export const MODULE_ADDRESS = import.meta.env.VITE_MODULE_ADDRESS;
export const CREATOR_ADDRESS = import.meta.env.VITE_COLLECTION_CREATOR_ADDRESS;
export const COLLECTION_ADDRESS = import.meta.env.VITE_COLLECTION_ADDRESS;
export const IS_DEV = Boolean(import.meta.env.DEV);
export const IS_PROD = Boolean(import.meta.env.PROD);
export const APTOS_API_KEY = import.meta.env.VITE_APTOS_API_KEY;
