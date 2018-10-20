/**
 * 网络通信类
 */

var net = module.exports;

/**
 * 服务器断开
 */
net.onDisconnect = function (cb) {
	pomelo.on('disconnect', cb);
};

/**
 * 连接服务器
 */
net.connect = function (address, cb) {

	// 先断开之前的连接
	pomelo.disconnect();

	// 初始化现在的连接，及其初始化成功后的回调
	pomelo.init(address, cb);
};

/**
 * 发送消息
 * route 路由
 * msg   发送消息数据
 * cb    注册的得到服务器返回
 */
net.send = function (route, msg, cb, isWait) {
	if (cb) {
		// 请求服务器，并且希望得到回应
		pomelo.request(route, msg, cb)
	} else {
		pomelo.notify(route, msg);
	}
};

/**
 * 监听消息
 */
net.on = function (route, cb) {
	pomelo.on(route, cb);
};
