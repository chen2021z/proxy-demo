const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// 使用代理中间件
app.use(
	"/study",
	createProxyMiddleware({
		target: "http://localhost:8001",
		changeOrigin: true,
		pathRewrite: {
			"^/study": "", // 将 /study 前缀去掉
		},
	})
);
app.use(
	"/rest",
	createProxyMiddleware({
		target: "http://localhost:8000",
		changeOrigin: true,
		pathRewrite: {
			"^/rest": "", // 将 /rest 前缀去掉
		},
	})
);

app.use(
	"/tt",
	createProxyMiddleware({
		target: "http://localhost:8002",
		changeOrigin: true,
		pathRewrite: {
			"^/tt": "/",
		},
	})
);

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`代理服务器正在运行在 http://localhost:${PORT}`);
});
