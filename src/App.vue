<template>
  <div class="appHome">
    <h2>appHome</h2>

    <!-- <div class="header">
      <template v-for="route in routes">
        <router-link class="router" v-if="route.path !== '/'" active-class="active" :to="route.path">
          <h1>{{ route.name }}</h1></router-link
        >
      </template>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <p> {{ t('app.copyRight.rMsg') }} {{ BRANCH }} (r{{ COMMIT_TIMES }} {{ COMMIT_ID }}) {{ COMMIT_TIME }} </p>
  </div>
</template>

<script setup lang="ts">
  import { t } from '@/lang/zh';
  import { routes } from '@/router/index';
  const { COMMIT_ID, COMMIT_TIMES, BRANCH, COMMIT_TIME } = GLOBAL_VAR;
</script>

<style scoped>
  p {
    color: #656d76;
    font-size: 15px;
    text-align: center;
  }
  .router {
    font-size: 20px;
    font-weight: bolder;
    display: inline-block;
    padding: 0 20px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .active {
    background-color: #1890ff;
  }
</style>
