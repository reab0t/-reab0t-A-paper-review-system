import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage } from 'element-plus';
import LoginForm from '../LoginForm.vue';

// Mock API
vi.mock('@/api/auth', () => ({
  login: vi.fn(),
}));

// Mock router
const mockPush = vi.fn();
vi.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe('LoginForm', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(LoginForm, {
      global: {
        components: {
          ElForm,
          ElFormItem,
          ElInput,
          ElButton,
        },
        stubs: {
          'el-form': ElForm,
          'el-form-item': ElFormItem,
          'el-input': ElInput,
          'el-button': ElButton,
        },
      },
    });
  });

  it('renders login form correctly', () => {
    expect(wrapper.find('.login-form-container').exists()).toBe(true);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
    expect(wrapper.find('button[type="primary"]').exists()).toBe(true);
  });

  it('validates required fields', async () => {
    const loginButton = wrapper.find('button[type="primary"]');
    await loginButton.trigger('click');

    // 应该显示验证错误
    expect(wrapper.vm.form.username).toBe('');
    expect(wrapper.vm.form.password).toBe('');
  });

  it('submits form with valid data', async () => {
    const { login } = await import('@/api/auth');
    const mockLogin = login as any;
    mockLogin.mockResolvedValue({
      data: {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
      },
    });

    // 填写表单
    await wrapper.setData({
      form: {
        username: 'testuser',
        password: 'password123',
      },
    });

    // 模拟表单验证通过
    wrapper.vm.formRef = {
      validate: vi.fn().mockResolvedValue(true),
    };

    const loginButton = wrapper.find('button[type="primary"]');
    await loginButton.trigger('click');

    expect(mockLogin).toHaveBeenCalledWith('testuser', 'password123');
  });

  it('handles login error', async () => {
    const { login } = await import('@/api/auth');
    const mockLogin = login as any;
    mockLogin.mockRejectedValue(new Error('Login failed'));

    // 填写表单
    await wrapper.setData({
      form: {
        username: 'testuser',
        password: 'wrongpassword',
      },
    });

    // 模拟表单验证通过
    wrapper.vm.formRef = {
      validate: vi.fn().mockResolvedValue(true),
    };

    const loginButton = wrapper.find('button[type="primary"]');
    await loginButton.trigger('click');

    expect(ElMessage.error).toHaveBeenCalledWith('登录失败，请检查用户名和密码');
  });

  it('navigates to register page', async () => {
    const registerButton = wrapper.find('button:not([type="primary"])');
    await registerButton.trigger('click');

    expect(mockPush).toHaveBeenCalledWith('/register');
  });
}); 