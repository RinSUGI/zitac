import { defineEventHandler, type H3Event } from 'h3';
import { sendApiResponse } from '~/server/utils/api-request';
import type { ApiResponse } from '~/server/types/api-types';
import { handleReadAdminUser } from '~/server/controllers/admin/user-read-controller';

/**
 * Adminユーザー取得APIのエンドポイント
 *
 * @param {H3Event} event - 取得するユーザー情報
 * @returns {Promise<ApiResponse>} ユーザー取得結果
 */
export default defineEventHandler(async (event: H3Event): Promise<ApiResponse> => {
  console.log('defineEventHandler', event.node.req.originalUrl);

  const response = await handleReadAdminUser(event);

  // 成功・失敗に応じてレスポンスする
  return sendApiResponse(event, response.success ? 200 : 500, response);
});
