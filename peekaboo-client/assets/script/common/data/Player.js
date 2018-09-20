
/**
 * 自己信息
 */
var exp = module.exports;

exp.uid = '';			// 自己uid
exp.nickname = '';     	// 自己名字
exp.camp = 0;			// 0.躲 1.找
exp.isInGame = false;	// 是否在游戏中
exp.itemId = 1;			//

//
exp.init = function (data) {
	this.uid = data.uid;
	this.nickname = data.nickname;
	this.camp = data.camp;
};