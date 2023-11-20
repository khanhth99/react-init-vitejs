import request from '@utils/request';

export function getMe() {
  return request(`/admin/admin-user/me`, 'GET');
}
