// AI工具数据
const toolsData = {
    tools: [
        {
            id: 1,
            name: "GitHub Copilot",
            category: "开发者工具",
            description: "AI编程助手，能够理解上下文并生成高质量的代码，支持多种编程语言。",
            commission: "20%",
            priority: "高",
            rating: 4.8,
            url: "/tools/github-copilot.html",
            affiliate_url: "#",
            features: ["代码自动完成", "多语言支持", "上下文理解", "错误检测"]
        },
        {
            id: 2,
            name: "ChatGPT Plus",
            category: "效率工具",
            description: "OpenAI的高级对话AI，提供更强大的对话能力和更快的响应速度。",
            commission: "15%",
            priority: "高",
            rating: 4.7,
            url: "/tools/chatgpt-plus.html",
            affiliate_url: "#",
            features: ["高级对话", "快速响应", "文件上传", "联网搜索"]
        },
        {
            id: 3,
            name: "Midjourney",
            category: "设计工具",
            description: "领先的AI图像生成工具，支持多种艺术风格和商业设计需求。",
            commission: "25%",
            priority: "高",
            rating: 4.9,
            url: "/tools/midjourney.html",
            affiliate_url: "#",
            features: ["高质量图像", "多种风格", "商业授权", "社区支持"]
        },
        {
            id: 4,
            name: "Notion AI",
            category: "效率工具",
            description: "智能笔记和工作空间，AI辅助写作、规划和项目管理。",
            commission: "20%",
            priority: "中",
            rating: 4.6,
            url: "/tools/notion-ai.html",
            affiliate_url: "#",
            features: ["智能写作", "项目管理", "团队协作", "模板库"]
        },
        {
            id: 5,
            name: "Grammarly AI",
            category: "效率工具",
            description: "高级语法检查和写作助手，提升写作质量和专业度。",
            commission: "30%",
            priority: "中",
            rating: 4.5,
            url: "/tools/grammarly-ai.html",
            affiliate_url: "#",
            features: ["语法检查", "语气调整", "抄袭检测", "多平台支持"]
        },
        {
            id: 6,
            name: "Canva AI",
            category: "设计工具",
            description: "AI辅助设计平台，让非设计师也能创建专业级视觉内容。",
            commission: "15%",
            priority: "中",
            rating: 4.4,
            url: "/tools/canva-ai.html",
            affiliate_url: "#",
            features: ["模板设计", "AI图像生成", "品牌工具包", "团队协作"]
        },
        {
            id: 7,
            name: "Jasper AI",
            category: "营销工具",
            description: "企业级内容创作平台，支持品牌声音训练和批量内容生成。",
            commission: "40%",
            priority: "高",
            rating: 4.7,
            url: "/tools/jasper-ai.html",
            affiliate_url: "#",
            features: ["品牌声音", "批量生成", "SEO优化", "团队协作"]
        }
    ]
};

// 渲染工具卡片
function renderTools() {
    const container = document.getElementById('tools-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    toolsData.tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <div class="tool-header">
                <div class="tool-name">${tool.name}</div>
                <div class="tool-category">${tool.category}</div>
            </div>
            <div class="tool-body">
                <p class="tool-description">${tool.description}</p>
                <div class="tool-meta">
                    <span class="commission">佣金: ${tool.commission}</span>
                    <span class="priority">优先级: ${tool.priority}</span>
                </div>
                <div class="tool-links">
                    <a href="${tool.url}" class="tool-link">查看详情</a>
                    <a href="${tool.affiliate_url}" class="tool-link">获取优惠</a>
                </div>
            </div>
        `;
        container.appendChild(toolCard);
    });
}

// 页面加载完成后渲染工具
document.addEventListener('DOMContentLoaded', renderTools);

// 订阅表单处理
document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.subscribe-input');
            const email = emailInput.value.trim();
            
            if (email && validateEmail(email)) {
                alert('感谢订阅！我们将每周发送最新的AI工具评测和优惠信息到你的邮箱。');
                emailInput.value = '';
            } else {
                alert('请输入有效的邮箱地址。');
            }
        });
    }
});

// 邮箱验证函数
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 工具搜索功能（未来扩展）
function searchTools(query) {
    return toolsData.tools.filter(tool => 
        tool.name.toLowerCase().includes(query.toLowerCase()) ||
        tool.category.toLowerCase().includes(query.toLowerCase()) ||
        tool.description.toLowerCase().includes(query.toLowerCase())
    );
}

// 按类别过滤工具
function filterToolsByCategory(category) {
    return toolsData.tools.filter(tool => 
        tool.category === category
    );
}

// 导出数据供其他页面使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = toolsData;
}