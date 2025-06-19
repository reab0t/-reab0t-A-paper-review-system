describe('Paper List Page', () => {
  beforeEach(() => {
    cy.visit('/papers');
  });

  it('should display paper list', () => {
    cy.get('.paper-list').should('be.visible');
    cy.get('h2').should('contain', '论文');
    cy.get('.filters').should('be.visible');
    cy.get('.papers').should('be.visible');
  });

  it('should filter papers by search query', () => {
    // Mock papers data
    cy.intercept('GET', '/api/papers*', {
      statusCode: 200,
      body: {
        code: 200,
        data: {
          total: 2,
          list: [
            {
              id: 1,
              title: 'Vue.js 最佳实践',
              abstract: '关于Vue.js开发的最佳实践指南',
              status: 'SUBMITTED',
              submissionDate: '2024-01-01',
            },
            {
              id: 2,
              title: 'React 性能优化',
              abstract: 'React应用性能优化技巧',
              status: 'UNDER_REVIEW',
              submissionDate: '2024-01-02',
            },
          ],
        },
      },
    }).as('getPapers');

    cy.wait('@getPapers');

    // 搜索包含 "Vue" 的论文
    cy.get('.search-input').type('Vue');
    
    // 应该只显示包含 "Vue" 的论文
    cy.get('.paper-item').should('have.length', 1);
    cy.get('.paper-item h3').should('contain', 'Vue.js');
  });

  it('should filter papers by status', () => {
    cy.get('.status-filter').select('SUBMITTED');
    
    // 应该只显示状态为 SUBMITTED 的论文
    cy.get('.paper-item .status').each(($el) => {
      cy.wrap($el).should('contain', 'SUBMITTED');
    });
  });

  it('should display paper details correctly', () => {
    cy.intercept('GET', '/api/papers*', {
      statusCode: 200,
      body: {
        code: 200,
        data: {
          total: 1,
          list: [
            {
              id: 1,
              title: '测试论文',
              abstract: '这是一个测试论文的摘要',
              status: 'SUBMITTED',
              submissionDate: '2024-01-01',
            },
          ],
        },
      },
    }).as('getPapers');

    cy.wait('@getPapers');

    cy.get('.paper-item').should('be.visible');
    cy.get('.paper-item h3').should('contain', '测试论文');
    cy.get('.paper-item .abstract').should('contain', '这是一个测试论文的摘要');
    cy.get('.paper-item .status').should('contain', 'SUBMITTED');
    cy.get('.paper-item .date').should('contain', '2024-01-01');
  });

  it('should navigate to paper detail page', () => {
    cy.intercept('GET', '/api/papers*', {
      statusCode: 200,
      body: {
        code: 200,
        data: {
          total: 1,
          list: [
            {
              id: 1,
              title: '测试论文',
              abstract: '这是一个测试论文的摘要',
              status: 'SUBMITTED',
              submissionDate: '2024-01-01',
            },
          ],
        },
      },
    }).as('getPapers');

    cy.wait('@getPapers');

    // 点击论文标题应该跳转到详情页
    cy.get('.paper-item h3').click();
    cy.url().should('include', '/papers/1');
  });
}); 