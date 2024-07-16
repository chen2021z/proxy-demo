const express = require('express');

const app = express();

app.use(express.static('./static'));

// 启动服务器
const PORT = 8002;
app.listen(PORT, () => {
    console.log(`托管静态页面 study 在 other 下 http://localhost:${PORT}`);
});
