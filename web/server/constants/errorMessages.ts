/**
 * エラーコードを管理する定数オブジェクト。
 *
 * @namespace ERROR_CODES
 */
export const ERROR_CODES = {
  // システムエラー
  INTERNAL_ERROR: {
    code: 'INTERNAL_ERROR',
    message: 'System error occurred',
    statusCode: 500,
  },
  SERVICE_UNAVAILABLE: {
    code: 'SERVICE_UNAVAILABLE',
    message: 'Service is unavailable',
    statusCode: 503,
  },

  // 認証・認可エラー
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: 'Authentication is required',
    statusCode: 401,
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    message: 'Access is forbidden',
    statusCode: 403,
  },
  INVALID_TOKEN: {
    code: 'INVALID_TOKEN',
    message: 'Invalid token',
    statusCode: 401,
  },
  TOKEN_EXPIRED: {
    code: 'TOKEN_EXPIRED',
    message: 'Token expired',
    statusCode: 401,
  },

  // バリデーションエラー
  VALIDATION_ERROR: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid input value',
    statusCode: 500,
  },

  // ユーザー管理エラー
  USER_NOT_FOUND: {
    code: 'USER_NOT_FOUND',
    message: 'User not found',
    statusCode: 500,
  },
  EMAIL_ALREADY_EXISTS: {
    code: 'EMAIL_ALREADY_EXISTS',
    message: 'Email address already exists',
    statusCode: 500,
  },

  // パスワード初期化エラー
  PASSWORD_INIT_ERROR: {
    code: 'PASSWORD_INIT_ERROR',
    message: 'Password initialization failed',
    statusCode: 500,
  },

  // メール送信エラー
  MAIL_SEND_ERROR: {
    code: 'MAIL_SEND_ERROR',
    message: 'Mail sending failed',
    statusCode: 500,
  },
} as const;

// エラーコードの型定義
export type ErrorCode = keyof typeof ERROR_CODES;
