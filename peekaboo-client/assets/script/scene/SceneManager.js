/**
 * 场景管理
 */

var instance = null;

//
cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Node,
        prompt: cc.Label,
        progressBar: cc.Sprite,
    },

    // 
    onLoad: function () {
        instance = this;

        // 常驻节点
        cc.game.addPersistRootNode(this.node);
    },

    // 背景节点是否可见
    open: function (isOpen) {
        this.bg.active = isOpen;
        if (isOpen) {
            // this.prompt.string = '提示：' + consts.randomPromptString();
        }
    },

    // 
    setPercent: function (percent) {

        // 不可见则直接返回
        if (!this.node.active) {
            return;
        }

        // 修改进度条进度
        this.progressBar.fillRange = percent;
    }
});


var exp = module.exports;

function getInstance() {
    return instance;
}

/**
 * 加载一个场景
 * @param  {[type]} sceneNanme [description]
 * @return {[type]}            [description]
 */
exp.load = function (sceneNanme) {

    // 进度条显示出来
    showLoadingDisplay();

    // 加载场景的名字
    if (typeof (sceneNanme) === 'string') {

        cc.director.loadScene(sceneNanme);

    } else if (typeof (sceneNanme) === 'function') {  // 场景后回调

        // 
        sceneNanme(function (name) {

            cc.director.loadScene(name);

        });

    } else {

        console.error('sceneNanme typeof error');

    }
};


// 显示加载进度条 - node形式实现
function showLoadingDisplay() {
    var instance = getInstance();

    instance.open(true);

    // 
    cc.loader.onProgress = function (completedCount, totalCount, item) {
        instance.setPercent(completedCount / totalCount);
    };

    // 
    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        instance.open(false);
        cc.loader.onProgress = null;
    });
}