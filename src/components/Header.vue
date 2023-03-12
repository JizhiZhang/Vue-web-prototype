<template>
  <header>
    <div>
      <h1 style="color: #425049;font-size:30px;">Welcome to Vale</h1>
    </div>
    <div class="opt-wrapper">
      <el-dropdown :hide-on-click="false">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="40" :src="avatar" :class="['avatar-info']">
            </el-avatar>
          </div>
        </div>
        <el-dropdown-menu slot="dropdown" style="margin-left:-20px;height: fit-content">
          <el-dropdown-item><i class="el-icon-info"></i>User profile</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-switch-button"></i>Log out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      avatar: require('@/assets/images/index.png')
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
/*设定头像图片样式*/
.avatar-info {
  margin-top: 10px;
  margin-right: 40px;
  cursor: pointer;
}
</style>
