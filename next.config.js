/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode:false,
  env:{
    API_URL: process.env.API_URL,
    PHONES_API:process.env.PHONES_API,
    WEB_TITLE:process.env.WEB_TITLE,
    CLIENT_URL:process.env.CLIENT_URL
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'app')],
  },
}

module.exports = nextConfig