
/**
 * 事件管理器
 */

var EventDispatcher = module.exports;

// 事件列表
EventDispatcher.events = {};

/**
 * 监听事件
 */
EventDispatcher.listen = function (type, listen) {
	var event = this.events[type];
	if(!event){
		event = [];
		this.events[type] = event;
	}
	event.push(listen);
	// console.log('监听一个事件 type=', type, 'listen=', listen);
};

/**
 * 派发事件
 */
EventDispatcher.dispatch = function(type, data){
	var event = this.events[type];
	if(event){
		for (var i = 0; i < event.length; i++) {
			event[i](data);
		}
	}
};

/**
 * 删除一个事件
 */
EventDispatcher.remove = function(type, listen){
	var event = this.events[type];
	if(event){
		for (var i = 0; i < event.length; i++) {
			if(event[i] === listen){
				event.splice(i,1);
				break;
			}
		}
	}
};

// 打印所有的事件信息
EventDispatcher.print = function(){
	console.log('events:',this.events);
};