// 启动应用
async function startApp() {
  const appVersion = __APP_VERSION__
  const namespace = `${import.meta.env.VITE_APP_NAMESPACE}-${appVersion}`;
  // 优化移动端点击事件
  document.addEventListener(
    'touchstart',
    function () {},
    { passive: false }
  )
  // vue应用主要逻辑及视图
  const { bootstrap } = await import('./bootstrap');
  await bootstrap(namespace);
}

startApp()
