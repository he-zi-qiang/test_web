document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.globalnav-item');
    let activeTimer = null;
    let isMobile = window.innerWidth < 768;
  
// 桌面端悬停逻辑

     // 鼠标进入导航项
    function handleEnter(e) {
      if (isMobile) return;
      clearTimeout(activeTimer);
       // 获取实际触发事件的导航项
      const item = e.target.closest('.globalnav-item');
      if (!item) return;
        // 关闭其他菜单
      navItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('is-active');
      });
        // 激活当前菜单
      item.classList.add('is-active');
    }
    // 鼠标离开导航项
    function handleLeave(e) {
      if (isMobile) return;
      const item = e.target.closest('.globalnav-item');
      if (!item) return;
        // 延迟300ms关闭菜单
      activeTimer = setTimeout(() => {
        item.classList.remove('is-active');
      }, 300);
    }
  
// 移动端点击逻辑

    // 点击导航项（移动端）
    function handleClick(e) {
      if (!isMobile) return;// 桌面端不执行
      const item = e.target.closest('.globalnav-item');
      if (!item) return;
  
      e.preventDefault();// 阻止默认链接跳转
       // 检查当前状态
      const isActive = item.classList.contains('is-active');
      // 关闭其他菜单
      navItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('is-active');
      });
      // 切换当前菜单状态
      item.classList.toggle('is-active', !isActive);
    }
  
    // 响应式检测
    function checkResponsive() {
      isMobile = window.innerWidth < 768;
       // 重置所有菜单状态
      navItems.forEach(item => item.classList.remove('is-active'));
    }
  
    // 全局点击关闭
    function handleOutsideClick(e) {
      if (!e.target.closest('.globalnav')) {
        navItems.forEach(item => item.classList.remove('is-active'));
      }
    }
  
// 事件监听

     // 窗口大小变化监听
    window.addEventListener('resize', checkResponsive);
     // 导航栏事件委托
    document.querySelector('.globalnav').addEventListener('mouseover', handleEnter);
    document.querySelector('.globalnav').addEventListener('mouseout', handleLeave);
    document.querySelector('.globalnav').addEventListener('click', handleClick);
    // 全局点击监听
    document.addEventListener('click', handleOutsideClick);
  });