import type { AdminUser as DomainAdminUser } from '~/server/models/admin/admin-user-model';
import type { AdminUser as PrismaAdminUser } from '@prisma/client';

/**
 * ORM（Prisma）の型からドメインモデルへの変換処理
 *
 * @param prismaUser - ORM が返す AdminUser オブジェクト
 * @returns {DomainAdminUser} ドメインモデルとしての AdminUser オブジェクト
 */
export const mapPrismaAdminUserToDomain = (prismaUsers: PrismaAdminUser[]): DomainAdminUser[] => {
  return prismaUsers.map((prismaUser) => ({
    id: prismaUser.id,
    loginId: prismaUser.loginId,
    name: prismaUser.name,
    email: prismaUser.email,
    passwordHash: prismaUser.passwordHash,
    createdAt: prismaUser.createdAt,
    updatedAt: prismaUser.updatedAt,
  }));
};
