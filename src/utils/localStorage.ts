// ** Interfaces
import type { IPharaohMartData } from "../interfaces";



// ** Get data
export const getPharaohMartData = () => {
    const raw = localStorage.getItem("pharaohmart");
    if (!raw) return {};
    try {
        const parsed = JSON.parse(raw);
        return parsed as IPharaohMartData;
    } catch (err) {
        console.error("Failed to parse pharaohmart from localStorage", err);
        return {};
    }
};



// ** Delete Data
export const deletePharaohMartKey = (key: keyof IPharaohMartData) => {
    const raw = localStorage.getItem("pharaohmart");
    if (!raw) return {};
    try {
        const parsed:IPharaohMartData = JSON.parse(raw);
        if (!(key in parsed)) {
            console.warn(`Key "${key}" does not exist in pharaohmart data`);
            return;
        }
        delete parsed[key];

        localStorage.setItem("pharaohmart", JSON.stringify(parsed));
    } catch (err) {
        console.error("Failed to parse pharaohmart from localStorage", err);
        return {};
    }
};



// ** Set Data
export function setPharaohMartData<T extends keyof IPharaohMartData>(
    key: T,
    value: IPharaohMartData[T]
) {
    const data = getPharaohMartData();
    data[key] = value;
    localStorage.setItem("pharaohmart", JSON.stringify(data));
};