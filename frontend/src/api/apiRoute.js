let API_ROUTE 
process.env.NODE_ENV === 'development' ? 
    API_ROUTE = 'http://localhost:5000':
    API_ROUTE = '/'
export default API_ROUTE