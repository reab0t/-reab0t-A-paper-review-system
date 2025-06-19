// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// 全局配置
Cypress.on('uncaught:exception', (err, runnable) => {
  // 忽略某些错误，避免测试失败
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false;
  }
  return true;
});

// 自定义命令
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * 登录用户
       * @param username 用户名
       * @param password 密码
       */
      login(username: string, password: string): Chainable<void>;
      
      /**
       * 清除本地存储
       */
      clearLocalStorage(): Chainable<void>;
      
      /**
       * 等待页面加载完成
       */
      waitForPageLoad(): Chainable<void>;
    }
  }
} 