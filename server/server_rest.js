const express = require('express');

const app = express();

app.use(express.static('./static/rest'));

// 启动服务器
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`托管静态页面 rest 在 http://localhost:${PORT}`);
});
