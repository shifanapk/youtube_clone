export const API_KEY = 'AIzaSyCw6Tsi2yT2T7RPshWwH-Jln7qhrtPZPy0'

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    } else {
        return value;
    }
}