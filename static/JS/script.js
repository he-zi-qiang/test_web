document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // 特效1：3D卡片翻转系统
    // ======================
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        let isFlipped = false;
        
        card.addEventListener('click', function() {
            this.style.transform = isFlipped 
                ? 'perspective(1000px) rotateY(0deg)'
                : 'perspective(1000px) rotateY(180deg)';
            isFlipped = !isFlipped;
        });

        // 鼠标跟随倾斜效果
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${(y - rect.height/2)/10}deg)
                rotateY(${-(x - rect.width/2)/10}deg)
            `;
        });

        card.addEventListener('mouseleave', () => {
            if(!isFlipped) {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            }
        });
    });

    // ======================
    // 特效2：粒子背景动画
    // ======================
    function createParticles() {
        const particles = document.createElement('div');
        particles.className = 'particles';
        document.body.appendChild(particles);

        for(let i=0; i<50; i++){
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                left: ${Math.random()*100}%;
                top: ${Math.random()*100}%;
                animation-delay: ${Math.random()*2}s;
                background: hsl(${Math.random()*360}, 70%, 50%);
            `;
            particles.appendChild(particle);
        }
    }
    createParticles();

    // ======================
    // 特效3：滚动视差系统
    // ======================
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY || document.documentElement.scrollTop;
        document.querySelector('.hero').style.transform = 
            `translateY(${scrolled * 0.5}px)`;
        
        document.querySelectorAll('.card').forEach((card, index) => {
            card.style.transform = `translateY(${scrolled * 0.1 * index}px)`;
        });
    });

s

// 修改光标特效
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

// 新增组件虚化检测
const blurComponents = document.querySelectorAll('.navbar, .card, button');

document.addEventListener('mousemove', (e) => {
    // 光标移动
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // 碰撞检测
    let isHovering = false;
    blurComponents.forEach(component => {
        const rect = component.getBoundingClientRect();
        const isInArea = 
            e.clientX >= rect.left - 20 &&
            e.clientX <= rect.right + 20 &&
            e.clientY >= rect.top - 20 &&
            e.clientY <= rect.bottom + 20;

        if(isInArea) {
            component.classList.add('component-blur');
            isHovering = true;
        } else {
            component.classList.remove('component-blur');
        }
    });

    // 光标状态
    if(isHovering) {
        cursor.classList.add('cursor-active');
    } else {
        cursor.classList.remove('cursor-active');
    }
});

// script.js 新增功能
// 自动设置导航栏active状态
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面路径
    const currentPath = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        // 移除所有active类
        link.classList.remove('active');
        
        // 设置当前页面active
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // 页面切换动画
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href && this.href.includes('.html')) {
                e.preventDefault();
                document.body.classList.add('page-transition');
                setTimeout(() => {
                    window.location.href = this.href;
                }, 500);
            }
        });
    });
});

// 添加页面过渡样式
const style = document.createElement('style');
style.textContent = `
.page-transition {
    animation: fadeOut 0.5s ease;
    opacity: 0;
}

@keyframes fadeOut {
    from { opacity: 1 }
    to { opacity: 0 }
}
`;
document.head.appendChild(style);
}
)

