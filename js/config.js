const URL_API_PRODUCTION =  "https://api.heimapp.com.co/api/v1/auth/reset-password";
const URL_API_DVELOPMENT =  "http://localhost:8080/api/v1/auth/reset-password";

 const isDevelopment = window.location.hostname == 'localhost' || window.location.hostname == '127.0.0.1';

 const API_URL = isDevelopment ? URL_API_DVELOPMENT : URL_API_PRODUCTION;
console.log(`Corriendo en modo: ${isDevelopment ? 'Desarrollo' : 'Producción'}`);
console.log(`URL de API activa: ${API_URL}`);