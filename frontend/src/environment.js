let IS_PROD = true;

const server = IS_PROD ?
    "https://video-call-3mst.onrender.com" :
    "http://localhost:3000"


export default server;