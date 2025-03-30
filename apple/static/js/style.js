document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.globalnav-item');
    let activeTimer = null;
    let isMobile = window.innerWidth < 768;
  
    // 桌面端悬停逻辑
    function handleEnter(e) {
      if (isMobile) return;
      clearTimeout(activeTimer);
      const item = e.target.closest('.globalnav-item');
      if (!item) return;
  
      navItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('is-active');
      });
      
      item.classList.add('is-active');
    }
  
    function handleLeave(e) {
      if (isMobile) return;
      const item = e.target.closest('.globalnav-item');
      if (!item) return;
  
      activeTimer = setTimeout(() => {
        item.classList.remove('is-active');
      }, 300);
    }
  
    // 移动端点击逻辑
    function handleClick(e) {
      if (!isMobile) return;
      const item = e.target.closest('.globalnav-item');
      if (!item) return;
  
      e.preventDefault();
      const isActive = item.classList.contains('is-active');
  
      navItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('is-active');
      });
  
      item.classList.toggle('is-active', !isActive);
    }
  
    // 响应式检测
    function checkResponsive() {
      isMobile = window.innerWidth < 768;
      navItems.forEach(item => item.classList.remove('is-active'));
    }
  
    // 全局点击关闭
    function handleOutsideClick(e) {
      if (!e.target.closest('.globalnav')) {
        navItems.forEach(item => item.classList.remove('is-active'));
      }
    }
  
    // 事件监听
    window.addEventListener('resize', checkResponsive);
    document.querySelector('.globalnav').addEventListener('mouseover', handleEnter);
    document.querySelector('.globalnav').addEventListener('mouseout', handleLeave);
    document.querySelector('.globalnav').addEventListener('click', handleClick);
    document.addEventListener('click', handleOutsideClick);
  });