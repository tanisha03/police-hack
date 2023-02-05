const ENDPOINTS = {
    getData: (channel, query) => `getDetails?channel=${channel}&value=${query}`,
    generateReport: () => 'generateReport'
};

export default ENDPOINTS;