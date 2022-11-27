export const getCountries = async () => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/info?returns=name');
        return response.json();
    } catch (e) {
        return e;
    }
};

export const getCities = async (country) => {
    try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({country: country.toLowerCase()})
        });

        return await response.json();
    } catch (e) {
        return e;
    }
};