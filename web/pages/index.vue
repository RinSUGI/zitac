<script setup lang="ts">
import { getRequest } from '~/services/apiClientHandler';
import type { AllAdminUsersResponse, AdminUserData } from '~/pages/admin/types/adminUserTypes';

const adminUsersRef = ref<AdminUserData[]>([]);

const fetchAdminUsers = async () => {
  const res: AllAdminUsersResponse = await getRequest('/api/admin/user-read');
  console.log(res);

  if (res.data) {
    adminUsersRef.value = res.data.adminUsers.map((user) => ({
      ...user,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    }));
  }
};
</script>

<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <AButton @click="fetchAdminUsers">get admin users</AButton>
    <pre>{{ adminUsersRef }}</pre>
  </div>
</template>

<style lang="scss" scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>
