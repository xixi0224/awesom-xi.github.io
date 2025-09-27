// 模拟宝藏地图API
class TreasureMap {
    static getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    reject("没有线索可以解码!");
                }
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    // 新增：破解神庙入口的石板谜题
    static solveStonePuzzle(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSolved = Math.random() > 0.3; // 70%成功率
                if (!isSolved) {
                    reject("石板谜题错误，触发了流沙陷阱!");
                }
                resolve("成功破解石板谜题，神庙大门缓缓打开...");
            }, 1800);
        });
    }

    // 新增：渡过地下暗河
    static crossUndergroundRiver() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSafe = Math.random() > 0.2; // 80%成功率
                if (!isSafe) {
                    reject("暗河出现漩涡，木筏被打翻了!");
                }
                resolve("成功渡过地下暗河，到达神庙深处...");
            }, 2200);
        });
    }

    static searchTemple(location) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    reject("糟糕!遇到了神庙守卫!");
                }
                resolve("找到了一个神秘的箱子...");
            }, 2000);
        });
    }

    // 新增：解开星象机关
    static unlockStarMechanism(box) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isUnlocked = Math.random() > 0.4; // 60%成功率
                if (!isUnlocked) {
                    reject("星象排列错误，机关锁住了箱子!");
                }
                resolve("星象机关破解，箱子发出微光...");
            }, 1600);
        });
    }

    // 新增：应对幽灵幻象
    static resistGhostIllusion() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const isResisted = Math.random() > 0.3; // 70%成功率
                if (!isResisted) {
                    reject("被幽灵幻象迷惑，迷失了方向!");
                }
                resolve("成功抵抗幽灵幻象，心智保持清醒...");
            }, 1400);
        });
    }

    static openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }
}

// 使用async/await重写寻宝过程
async function findTreasureWithAsyncAwait() {
    try {
        // 初始线索获取
        const initialClue = await TreasureMap.getInitialClue();
        console.log(initialClue);

        // 解码古老文字
        const location = await TreasureMap.decodeAncientScript(initialClue);
        console.log(location);

        // 新增环节1：破解石板谜题
        const puzzleResult = await TreasureMap.solveStonePuzzle(location);
        console.log(puzzleResult);

        // 新增环节2：渡过地下暗河
        const riverResult = await TreasureMap.crossUndergroundRiver();
        console.log(riverResult);

        // 搜索神庙
        const box = await TreasureMap.searchTemple(location);
        console.log(box);

        // 新增环节3：解开星象机关
        const starResult = await TreasureMap.unlockStarMechanism(box);
        console.log(starResult);

        // 新增环节4：应对幽灵幻象
        const ghostResult = await TreasureMap.resistGhostIllusion();
        console.log(ghostResult);

        // 打开宝藏箱
        const treasure = await TreasureMap.openTreasureBox();
        console.log(treasure);

    } catch (error) {
        console.error("任务失败:", error);
    }
}

findTreasureWithAsyncAwait();