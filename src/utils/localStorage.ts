// ** Get data
export const getPharaohMartData = () => {
    const data = localStorage.getItem("pharaohmart");
    return data ? JSON.parse(data) : {};
};



// ** Set Data
export const setPharaohMartData = (key: string, value: any) => {
    const data = getPharaohMartData();
    data[key] = value;
    localStorage.setItem("pharaohmart", JSON.stringify(data));
};