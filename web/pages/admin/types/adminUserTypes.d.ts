import type { BaseApiResponse } from '~/types/apiTypes';

/**
 * AdminUser のデータ型
 *
 * @interface AdminUserData
 * @property {string} id - ユーザーの一意な識別子
 * @property {string} loginId - ログインID
 * @property {string} name - ユーザー名
 * @property {string | null} passwordHash - ハッシュ化されたパスワード
 * @property {string} email - メールアドレス
 * @property {string} createdAt - 作成日時
 * @property {string} updatedAt - 更新日時
 */
export interface AdminUserData {
  id: string;
  loginId: string;
  name: string;
  passwordHash: string | null;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * 単一のAdminUserのレスポンスデータ型
 *
 * @interface AdminUserResponseData
 * @property {AdminUserData} adminUser - 管理者ユーザー
 * @property {string} message - レスポンスメッセージ
 */
export interface AdminUserResponseData {
  adminUser: AdminUserData;
  message: string;
}

/**
 * AdminUser API のレスポンス型
 *
 * BaseApiResponse を拡張し、AdminUser のデータ型を data プロパティに指定する
 *
 * @interface AdminUserResponse
 * @extends {BaseApiResponse<AdminUserResponseData>}
 */
export type AdminUserResponse = BaseApiResponse<AdminUserResponseData>;

/**
 * 全てのAdminUserのレスポンスデータ型
 *
 * @interface AdminUsersResponseData
 * @property {AdminUserData[]} adminUsers - 管理者ユーザーの配列
 * @property {string} message - レスポンスメッセージ
 */
export interface AdminUsersResponseData {
  adminUsers: AdminUserData[];
  message: string;
}

/**
 * 全てのAdminUserのレスポンス型
 *
 * @interface AllAdminUsersResponse
 * @extends {BaseApiResponse<AdminUsersResponseData>}
 */
export type AllAdminUsersResponse = BaseApiResponse<AdminUsersResponseData>;
