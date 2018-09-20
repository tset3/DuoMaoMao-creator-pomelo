
var utils = require('utils');

/**
 * AtlasStorage 
 * 图集
 */

//单例
var instance = null;

//
cc.Class({
    extends: cc.Component,

    //子弹预制体
    properties: {
        itemAtlas: cc.SpriteAtlas,
        bulletPrefab: cc.Prefab,
    },

    //
    onLoad: function () {

        //???
        cc.game.addPersistRootNode(this.node);
        
        //
        instance = this;
    },

    // 获取道具图片
    getItemSprite: function (id) {
        return this.itemAtlas._spriteFrames['item_' + id];
    },

    // 随机一个道具
    randomItemSprite: function () {
        var id = utils.random(1, 12);
        return this.getItemSprite(id);
    },

    // 创建一个子弹
    createrBullet: function () {
        return cc.instantiate(this.bulletPrefab);
    }
});

//
module.exports = function () {
    return instance;
};