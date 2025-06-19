import { describe, it, expect, vi, beforeEach } from 'vitest';
import { login, register, getCurrentUser, logout } from '../auth';
import request from '@/utils/request';

// Mock request
vi.mock('@/utils/request', () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
    put: vi.fn(),
  },
}));

describe('Auth API', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('login', () => {
    it('should call login API with correct parameters', async () => {
      const mockResponse = {
        data: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
          token: 'mock-token',
        },
      };

      (request.post as any).mockResolvedValue(mockResponse);

      const loginParams = {
        username: 'testuser',
        password: 'password123',
      };

      const result = await login(loginParams);

      expect(request.post).toHaveBeenCalledWith('/api/auth/login', loginParams);
      expect(result).toEqual(mockResponse.data);
    });

    it('should handle login error', async () => {
      const error = new Error('Login failed');
      (request.post as any).mockRejectedValue(error);

      const loginParams = {
        username: 'testuser',
        password: 'wrongpassword',
      };

      await expect(login(loginParams)).rejects.toThrow('Login failed');
    });
  });

  describe('register', () => {
    it('should call register API with correct parameters', async () => {
      const mockResponse = {
        data: {
          id: 1,
          username: 'newuser',
          email: 'new@example.com',
        },
      };

      (request.post as any).mockResolvedValue(mockResponse);

      const registerParams = {
        username: 'newuser',
        email: 'new@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      };

      const result = await register(registerParams);

      expect(request.post).toHaveBeenCalledWith('/api/auth/register', registerParams);
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('getCurrentUser', () => {
    it('should call getCurrentUser API', async () => {
      const mockResponse = {
        data: {
          id: 1,
          username: 'testuser',
          email: 'test@example.com',
          realName: 'Test User',
        },
      };

      (request.get as any).mockResolvedValue(mockResponse);

      const result = await getCurrentUser();

      expect(request.get).toHaveBeenCalledWith('/api/auth/me');
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('logout', () => {
    it('should call logout API', async () => {
      (request.post as any).mockResolvedValue({ data: null });

      await logout();

      expect(request.post).toHaveBeenCalledWith('/api/auth/logout');
    });
  });
}); 