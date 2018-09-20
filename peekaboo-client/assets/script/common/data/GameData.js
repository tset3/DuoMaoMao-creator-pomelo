
/**
 * 游戏数据
 */


var exp = module.exports;

exp.players = [];				// 当前所有玩家列表
exp.isStart = false;			// 是否开始游戏了
exp.captainUid = '';			// 队长UID
exp.hideItemIndexs = [];		// 需要隐藏的列表
exp.generateItemIndexs = [];	// 需要生成的列表
exp.prepareTime = 30; 			// 准备时间
exp.searchTime = 180; 			// 寻找时间
exp.CanSatrtGamePlayers = [];	// 可以游戏的玩家列表


//移除指定uid的玩家
exp.removePlayer = function (uid) {
	for (var i = exp.players.length - 1; i >= 0; i--) {
		if (exp.players[i].uid === uid) {
			exp.players.splice(i, 1);
			return;
		}
	}
};

//根据uid找到玩家
exp.getPlayer = function (uid) {

	//
	var arr = exp.players.filter((m) => m.uid === uid);

	//
	return arr.length === 0 ? null : arr[0];
};

//得到2个阵营的人数
exp.getCampCount = function () {
	
	//
	var d = 0;
	var f = 0;

	//
	for (var i = exp.players.length - 1; i >= 0; i--) {

		var p = exp.players[i];

		//累计阵营1的人数
		if (p.camp === 0) {
			++d;
		}

		//累计阵营2的人数
		if (p.camp === 1) {
			++f;
		}
	}
	return [d, f];
};