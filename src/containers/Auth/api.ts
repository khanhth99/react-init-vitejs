import request from '@utils/request';

export function loginService(data: Record<string, any>) {
  return request(`/admin/auth/login`, 'POST', { ...data });
}
