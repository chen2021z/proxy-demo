const express = require('express');

const app = express();

app.use(express.static('./static/study'));

// 启动服务器
const PORT = 8001;
app.listen(PORT, () => {
    console.log(`托管静态页面 study 在 http://localhost:${PORT}`);
});
