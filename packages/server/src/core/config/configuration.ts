export default () => ({
  host: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  api: {
    url: process.env.API_URL,
    token: process.env.API_TOKEN,
  },
})
