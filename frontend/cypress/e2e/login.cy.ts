describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display login form', () => {
    cy.get('.login-form-container').should('be.visible');
    cy.get('input[type="text"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('button[type="primary"]').should('be.visible');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="primary"]').click();
    
    // 应该显示验证错误信息
    cy.contains('请输入用户名').should('be.visible');
    cy.contains('请输入密码').should('be.visible');
  });

  it('should navigate to register page', () => {
    cy.get('button').contains('去注册').click();
    cy.url().should('include', '/register');
  });

  it('should handle successful login', () => {
    // Mock successful login response
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: {
        code: 200,
        message: '登录成功',
        data: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
          token: 'mock-token',
        },
      },
    }).as('loginRequest');

    cy.get('input[type="text"]').type('testuser');
    cy.get('input[type="password"]').type('password123');
    cy.get('button[type="primary"]').click();

    cy.wait('@loginRequest');
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('should handle login error', () => {
    // Mock failed login response
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 401,
      body: {
        code: 401,
        message: '用户名或密码错误',
        data: null,
      },
    }).as('loginRequest');

    cy.get('input[type="text"]').type('wronguser');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="primary"]').click();

    cy.wait('@loginRequest');
    cy.contains('登录失败，请检查用户名和密码').should('be.visible');
  });

  it('should support enter key to submit', () => {
    cy.get('input[type="text"]').type('testuser');
    cy.get('input[type="password"]').type('password123{enter}');
    
    // 应该触发登录
    cy.get('button[type="primary"]').should('have.class', 'is-loading');
  });
}); 