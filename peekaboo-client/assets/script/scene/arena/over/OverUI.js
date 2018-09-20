
var net = require('net');
var SceneManager = require('SceneManager');
var Player = require('Player');
var GameData = require('GameData');

// 游戏结束面板
cc.Class({
    extends: cc.Component,

    properties: {
        labelTxt: cc.Label
    },

    //胜利还是失败弹框
    open: function (isWin) {
        this.node.active = true;
        this.labelTxt.string = isWin ? '胜 利' : '失 败';
        this.labelTxt.node.color = isWin ? cc.Color.GREEN : cc.Color.RED;
    },

    //发送请求退出游戏
    onClick: function () {
        net.send('connector.gameHandler.exitGame', {}, function (data) {

            //标记不在游戏中
            Player.isInGame = false;
            
            //切换到房间界面
            SceneManager.load('room');
        });
    }
});
