//http://localhost:5000/api/v1

//https://backendcaamano.vercel.app/api/v1

// eslint-disable-next-line no-undef
export const ApiUrl =  process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api/v1' : 'https://backendcaamano.vercel.app/api/v1'