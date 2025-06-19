import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import PaperList from '../PaperList.vue';

describe('PaperList', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(PaperList);
  });

  it('renders paper list correctly', () => {
    expect(wrapper.find('.paper-list').exists()).toBe(true);
    expect(wrapper.find('h2').text()).toBe('论文');
    expect(wrapper.find('.filters').exists()).toBe(true);
    expect(wrapper.find('.papers').exists()).toBe(true);
  });

  it('filters papers by search query', async () => {
    // 设置测试数据
    await wrapper.setData({
      papers: [
        {
          id: '1',
          title: 'Vue.js 最佳实践',
          abstract: '关于Vue.js开发的最佳实践指南',
          status: 'SUBMITTED',
          submissionDate: '2024-01-01',
        },
        {
          id: '2',
          title: 'React 性能优化',
          abstract: 'React应用性能优化技巧',
          status: 'UNDER_REVIEW',
          submissionDate: '2024-01-02',
        },
      ],
    });

    // 搜索包含 "Vue" 的论文
    await wrapper.setData({ searchQuery: 'Vue' });

    expect(wrapper.vm.filteredPapers).toHaveLength(1);
    expect(wrapper.vm.filteredPapers[0].title).toBe('Vue.js 最佳实践');
  });

  it('filters papers by status', async () => {
    // 设置测试数据
    await wrapper.setData({
      papers: [
        {
          id: '1',
          title: 'Vue.js 最佳实践',
          abstract: '关于Vue.js开发的最佳实践指南',
          status: 'SUBMITTED',
          submissionDate: '2024-01-01',
        },
        {
          id: '2',
          title: 'React 性能优化',
          abstract: 'React应用性能优化技巧',
          status: 'UNDER_REVIEW',
          submissionDate: '2024-01-02',
        },
      ],
    });

    // 筛选状态为 SUBMITTED 的论文
    await wrapper.setData({ statusFilter: 'SUBMITTED' });

    expect(wrapper.vm.filteredPapers).toHaveLength(1);
    expect(wrapper.vm.filteredPapers[0].status).toBe('SUBMITTED');
  });

  it('combines search and status filters', async () => {
    // 设置测试数据
    await wrapper.setData({
      papers: [
        {
          id: '1',
          title: 'Vue.js 最佳实践',
          abstract: '关于Vue.js开发的最佳实践指南',
          status: 'SUBMITTED',
          submissionDate: '2024-01-01',
        },
        {
          id: '2',
          title: 'Vue.js 性能优化',
          abstract: 'Vue.js应用性能优化技巧',
          status: 'UNDER_REVIEW',
          submissionDate: '2024-01-02',
        },
      ],
    });

    // 同时搜索 "Vue" 和筛选状态 "SUBMITTED"
    await wrapper.setData({
      searchQuery: 'Vue',
      statusFilter: 'SUBMITTED',
    });

    expect(wrapper.vm.filteredPapers).toHaveLength(1);
    expect(wrapper.vm.filteredPapers[0].title).toBe('Vue.js 最佳实践');
    expect(wrapper.vm.filteredPapers[0].status).toBe('SUBMITTED');
  });

  it('displays all paper statuses in filter', () => {
    const statusOptions = wrapper.findAll('option');
    expect(statusOptions.length).toBeGreaterThan(1);
    
    const statusTexts = statusOptions.map((option: any) => option.text());
    expect(statusTexts).toContain('所有状态');
  });

  it('renders paper items correctly', async () => {
    const testPaper = {
      id: '1',
      title: '测试论文',
      abstract: '这是一个测试论文的摘要',
      status: 'SUBMITTED',
      submissionDate: '2024-01-01',
    };

    await wrapper.setData({
      papers: [testPaper],
    });

    const paperItem = wrapper.find('.paper-item');
    expect(paperItem.exists()).toBe(true);
    expect(paperItem.find('h3').text()).toBe('测试论文');
    expect(paperItem.find('.abstract').text()).toBe('这是一个测试论文的摘要');
    expect(paperItem.find('.status').text()).toBe('SUBMITTED');
    expect(paperItem.find('.date').text()).toBe('2024-01-01');
  });
}); 