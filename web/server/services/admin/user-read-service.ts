import { ApiError } from '~/server/types/api-types';
import { ERROR_CODES } from '~/server/constants/errorMessages';
import { getAllAdminUsers } from '~/server/repositories/admin-user-repository';
import type { AdminUser } from '~/server/models/admin/admin-user-model';

export const getAdminUsers = async (): Promise<AdminUser[]> => {
  try {
    console.log('getAdminUsers');
    const adminUsers: AdminUser[] = await getAllAdminUsers();
    return adminUsers;
  } catch (error) {
    console.error('getAdminUsers error', error);
    throw new ApiError(ERROR_CODES.INTERNAL_ERROR.code, ERROR_CODES.INTERNAL_ERROR.message);
  }
};
