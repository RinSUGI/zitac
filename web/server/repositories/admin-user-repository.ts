import prisma from '~/server/config/database';
import { mapPrismaAdminUserToDomain } from '~/server/mappers/admin/admin-user-mapper';
import type { AdminUser as DomainAdminUser } from '~/server/models/admin/admin-user-model';
import type { AdminUser as PrismaAdminUser } from '@prisma/client';

export const getAllAdminUsers = async (): Promise<DomainAdminUser[]> => {
  console.log('getAllAdminUsers');

  const adminUsers: PrismaAdminUser[] = await prisma.adminUser.findMany();

  return mapPrismaAdminUserToDomain(adminUsers);
};
