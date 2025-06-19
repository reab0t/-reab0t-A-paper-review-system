<template>
  <div class="login-form-container">
    <div class="login-card">
      <div class="login-header">
        <h2>用户登录</h2>
        <p>欢迎使用论文评审系统</p>
      </div>
      
      <el-form 
        :model="form" 
        :rules="rules" 
        ref="formRef" 
        label-width="0"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input 
            v-model="form.username" 
            placeholder="请输入用户名"
            prefix-icon="User"
            size="large"
          />
        </el-form-item>
        
        <el-form-item prop="password">
          <el-input 
            v-model="form.password" 
            type="password" 
            placeholder="请输入密码"
            prefix-icon="Lock"
            size="large"
            show-password
            @keyup.enter="submitForm"
          />
        </el-form-item>
        
        <el-form-item>
          <div class="login-options">
            <el-checkbox v-model="rememberMe">记住密码</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码？</el-link>
          </div>
        </el-form-item>
        
        <el-form-item>
          <el-button 
            type="primary" 
            @click="submitForm" 
            :loading="loading"
            size="large"
            class="login-button"
          >
            {{ loading ? '登录中...' : '登录' }}
          </el-button>
        </el-form-item>
        
        <el-form-item>
          <div class="register-link">
            还没有账号？
            <el-link type="primary" @click="goToRegister" :underline="false">
              立即注册
            </el-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '@/api/auth';
import { ElMessage } from 'element-plus';
import { setToken, getToken } from '@/utils/auth';

const form = reactive({
  username: '',
  password: '',
});
const formRef = ref();
const router = useRouter();
const loading = ref(false);
const rememberMe = ref(false);

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
  ],
};

const submitForm = async () => {
  try {
    await formRef.value.validate();
    loading.value = true;
    
    const response = await login(form.username, form.password);
    
    // 保存token
    if (response.data && response.data.token) {
      setToken(response.data.token);
    }
    
    ElMessage.success('登录成功，欢迎回来！');
    
    // 记住密码
    if (rememberMe.value) {
      localStorage.setItem('rememberedUser', JSON.stringify({
        username: form.username,
        password: form.password
      }));
    } else {
      localStorage.removeItem('rememberedUser');
    }
    
    // 跳转到首页
    router.push('/');
  } catch (error) {
    console.error('登录失败:', error);
    
    let errorMessage = '登录失败，请检查用户名和密码';
    if (error.response) {
      switch (error.response.status) {
        case 401:
          errorMessage = '用户名或密码错误';
          break;
        case 403:
          errorMessage = '账号已被禁用，请联系管理员';
          break;
        case 404:
          errorMessage = '用户不存在';
          break;
        case 500:
          errorMessage = '服务器错误，请稍后重试';
          break;
        default:
          errorMessage = error.response.data?.message || errorMessage;
      }
    } else if (error.request) {
      errorMessage = '网络连接失败，请检查网络设置';
    }
    
    ElMessage.error(errorMessage);
  } finally {
    loading.value = false;
  }
};

const goToRegister = () => {
  router.push('/register');
};

// 页面加载时检查是否有记住的用户信息
onMounted(() => {
  const rememberedUser = localStorage.getItem('rememberedUser');
  if (rememberedUser) {
    try {
      const userData = JSON.parse(rememberedUser);
      form.username = userData.username;
      form.password = userData.password;
      rememberMe.value = true;
    } catch (error) {
      console.error('解析记住的用户信息失败:', error);
      localStorage.removeItem('rememberedUser');
    }
  }
});
</script>

<style scoped>
.login-form-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h2 {
  color: #333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.login-header p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.login-form {
  width: 100%;
}

.login-form .el-form-item {
  margin-bottom: 20px;
}

.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.login-button {
  width: 100%;
  height: 44px;
  font-size: 16px;
  font-weight: 500;
}

.register-link {
  text-align: center;
  color: #666;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
    margin: 10px;
  }
  
  .login-header h2 {
    font-size: 20px;
  }
  
  .login-options {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}
</style>