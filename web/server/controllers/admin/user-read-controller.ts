import type { H3Event } from 'h3';
import { getApiRequestParams } from '~/server/utils/api-request';
import { handleSuccessResponse } from '~/server/utils/api-success';
import type { ApiResponse } from '~/server/types/api-types';
import { getAdminUsers } from '~/server/services/admin/user-read-service';
import { handleErrorResponse } from '~/server/utils/api-error';
import type { AdminUser } from '~/server/models/admin/admin-user-model';

/**
 * Adminユーザー取得APIのコントローラー
 */
export const handleReadAdminUser = async (event: H3Event): Promise<ApiResponse> => {
  try {
    // Adminユーザー取得
    const result: AdminUser[] = await getAdminUsers();
    const message = 'Admin users read successfully';

    console.log('end process', event.node.req.originalUrl);

    // レスポンス
    return handleSuccessResponse({ adminUsers: result, message });
  } catch (error: unknown) {
    console.error('Error in controller', error);

    // エラーレスポンスを返却
    return handleErrorResponse(error);
  }
};
