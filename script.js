function showDetails(name, age, hobby, type) {
    const detailsPanel = document.getElementById('details-panel');
    const petDetails = document.getElementById('pet-details');
    
    // 根据宠物类型设置不同的图标
    let typeIcon = '';
    if (type === 'dog') typeIcon = '🐶';
    else if (type === 'cat') typeIcon = '🐱';
    else typeIcon = '🐾';
    
    // 设置详情内容
    petDetails.innerHTML = `
        <h3>${name} ${typeIcon}</h3>
        <p><strong>年龄:</strong> ${age}</p>
        <p><strong>爱好:</strong> ${hobby}</p>
        <p><strong>类型:</strong> ${type === 'dog' ? '狗狗' : type === 'cat' ? '猫咪' : '其他宠物'}</p>
    `;
    
    // 显示详情面板
    detailsPanel.style.display = 'flex';
}

// 关闭详情面板
function closeDetails() {
    document.getElementById('details-panel').style.display = 'none';
}

// 改变背景颜色
function changeBackground() {
    // 定义可选的背景颜色数组
    const colors = [
        '#f0f8ff', '#fff0f0', '#f0fff0', 
        '#fff8e1', '#f0f0ff', '#e8f4f8'
    ];
    // 随机选择一个颜色
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // 应用到页面背景
    document.body.style.backgroundColor = randomColor;
}

// 切换深色模式
function toggleDarkMode() {
    // 给body添加或移除dark-mode类，通过CSS控制样式变化
    document.body.classList.toggle('dark-mode');
}

// 筛选宠物
function filterPets(category) {
    // 获取所有宠物卡片和分类按钮
    const petCards = document.querySelectorAll('.pet-card');
    const buttons = document.querySelectorAll('.category-buttons button');
    
    // 更新按钮状态 - 移除所有按钮的active类，给当前点击的按钮添加
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    // 根据选择的分类显示对应的宠物卡片
    petCards.forEach(card => {
        // 如果选择"全部"或者卡片类型匹配，就显示卡片，否则隐藏
        if (category === 'all' || card.dataset.type === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 搜索宠物
function searchPets() {
    // 获取搜索框输入的内容并转为小写
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    // 获取所有宠物卡片
    const petCards = document.querySelectorAll('.pet-card');
    
    // 遍历所有卡片，检查名称是否包含搜索词
    petCards.forEach(card => {
        const petName = card.dataset.name.toLowerCase();
        // 如果包含搜索词就显示，否则隐藏
        if (petName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 页面加载完成后初始化，默认显示所有宠物
filterPets('all');
    