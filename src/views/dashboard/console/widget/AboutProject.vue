<template>
  <div class="card about-project art-custom-card">
    <div>
      <h2 class="box-title">关于项目</h2>
      <p>{{ systemName }} 是一款专注于用户体验和视觉设计的后台管理系统模版</p>
      <p>使用了 Vue3、TypeScript、Vite、Element Plus 等前沿技术</p>
    </div>
    <img class="right-img" src="@imgs/draw/draw1.png" alt="draw1" />
  </div>
</template>

<script setup lang="ts">
  import AppConfig from '@/config'

  const systemName = AppConfig.systemInfo.name
</script>

<style lang="scss" scoped>
  .about-project {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    height: 300px;
    padding: 20px;

    h2 {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 500;
      color: var(--art-gray-900) !important;
    }

    p {
      margin-top: 5px;
      font-size: 14px;
      color: var(--art-gray-600);
    }
  }

  // 响应式设计 - iPad Pro及以下
  @media screen and (max-width: $device-ipad-pro) {
    .about-project {
      height: auto;
    }

    .right-img {
      width: 300px;
      height: 230px;
    }
  }

  // 响应式设计 - iPad垂直及以下
  @media screen and (max-width: $device-ipad-vertical) {
    .right-img {
      display: none;
    }
  }

  // 响应式设计 - 手机端
  @media screen and (max-width: $device-phone) {
    .about-project {
      padding: 0 15px;
    }
  }
</style>
