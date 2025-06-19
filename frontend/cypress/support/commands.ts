// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// 登录命令
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/login');
  cy.get('input[type="text"]').type(username);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="primary"]').click();
  cy.url().should('eq', Cypress.config().baseUrl + '/');
});

// 清除本地存储命令
Cypress.Commands.add('clearLocalStorage', () => {
  cy.clearLocalStorage();
  cy.clearCookies();
});

// 等待页面加载完成命令
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('not.have.class', 'loading');
  cy.get('[data-testid="loading"]').should('not.exist');
});

// 覆盖默认的 visit 命令，添加等待
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  return originalFn(url, {
    ...options,
    onBeforeLoad: (win) => {
      // 在页面加载前执行
      if (options?.onBeforeLoad) {
        options.onBeforeLoad(win);
      }
    },
    onLoad: (win) => {
      // 在页面加载后执行
      if (options?.onLoad) {
        options.onLoad(win);
      }
    },
  });
}); 