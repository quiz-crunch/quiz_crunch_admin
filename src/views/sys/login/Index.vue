<template>
  <div class="bg-wave-content"></div>
  <div class="bg-ball-content"></div>
  <div class="flex-center width100 login-content">
    <div>
      <div class="title">
        Quiz Crunch Admin
      </div>
      <el-form :model="loginParams" label-width="auto" style="width: 400px">
        <el-form-item label="username">
          <template #label>
            <div class="icon-container">
              <Icon icon="material-symbols:frame-person-outline" class="icon"/>
            </div>
          </template>
          <el-input v-model="loginParams.username" class="basic" clearable/>
        </el-form-item>
        <el-form-item>
          <template #label>
            <div class="icon-container">
              <Icon icon="material-symbols:lock-open-outline" class="icon"/>
            </div>
          </template>
          <el-input v-model="loginParams.password" class="basic" type="password" clearable/>
        </el-form-item>
        <el-form-item>
          <template #label>
            <div class="icon-container">
              <Icon icon="mingcute:barcode-scan-line" class="icon"/>
            </div>
          </template>
          <div class="flex">
            <el-input v-model="loginParams.verificationCode" class="basic verification-code" clearable/>
            <el-image class="verification-code-img" fit="fill"/>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn basic">
            <Icon class="el-icon--left icon" icon="solar:login-outline" style="color: white"/>
            login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";

const loginParams = reactive({
  username: '',
  password: '',
  verificationCode: ''
})
</script>

<style scoped lang="scss">
.bg-wave-content {
  width: 100vw;
  height: 135vh;
  position: fixed;
  margin-left: 0;
  margin-top: -35vh;
  mix-blend-mode: multiply;
  background-image: url("@/assets/bg-wave.svg");
  background-size: cover;
  z-index: 1;
}

.bg-ball-content {
  width: 150vw;
  height: 150vh;
  position: fixed;
  margin-left: 0;
  margin-top: -50vh;
  background-image: url("@/assets/bg-ball.svg");
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.5);
  mix-blend-mode: multiply;
  z-index: 0;
}

.login-content {
  height: 100vh;
  position: fixed;
  z-index: 2;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 50px;
  text-align: center;
  color: white;
}

.login-btn {
  width: calc(100% - 34px);
  margin-left: 34px;
  background-color: #5dc4c7;
}

.icon {
  width: 22px;
  height: 22px;
  color: #5dc4c7;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
}

.verification-code {
  width: 265px;
}

.verification-code-img {
  width: 100px;
  height: 40px;
  border-radius: 0 4px 4px 0;
}
</style>
