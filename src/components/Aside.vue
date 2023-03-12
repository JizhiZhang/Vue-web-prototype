<template>
  <div style="height: 100%;">
    <el-menu background-color="#545c64" text-color="#ffffff"
             active-text-color="#ffd04b" class="el-menu-vertical-demo" router>
      <el-menu-item index="/index/menu1"><i class="el-icon-user"></i>James Bond</el-menu-item>
      <el-menu-item index="/index/menu2"><i class="el-icon-user"></i>Tom Cruise</el-menu-item>
      <el-menu-item index="/index/menu3"><i class="el-icon-user"></i>Brad Pitt</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style scoped>
.el-menu-vertical-demo{
  height: 100%;
}
.el-icon-user{
  height: auto;
}
</style>

<!--<template>-->
<!--  <div>-->
<!--    <el-menu background-color="#545c64" text-color="#ffffff"-->
<!--             active-text-color="#ffd04b" default-active="1"-->
<!--             @open="handleOpen"-->
<!--             @close="handleClose"-->
<!--             @select="handSelect">-->
<!--      <el-submenu index="1">-->
<!--        <template slot="title"><i class="el-icon-location"></i><span>一级菜单1</span></template>-->
<!--        <el-submenu index="1-1">-->
<!--          <template slot="title"><i class="el-icon-location"></i><span>选项1</span></template>-->
<!--          <el-menu-item index="1-1-1">选项1-1</el-menu-item>-->
<!--          <el-menu-item index="1-1-2">选项1-2</el-menu-item>-->
<!--        </el-submenu>-->
<!--        <el-submenu index="1-2">-->
<!--          <template slot="title"><i class="el-icon-location"></i><span>选项2</span></template>-->
<!--          <el-menu-item index="1-2-1">选项2-1</el-menu-item>-->
<!--          <el-menu-item index="1-2-2">选项2-2</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="2"><i class="el-icon-document"></i>一级菜单2</el-menu-item>-->
<!--      <el-menu-item index="3"><i class="el-icon-setting"></i>一级菜单3</el-menu-item>-->
<!--    </el-menu>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'Aside',-->
<!--  methods: {-->
<!--    handleOpen (key, keyPath) {-->
<!--      console.log('Open', key, keyPath)-->
<!--    },-->
<!--    handleClose (key, keyPath) {-->
<!--      console.log('Close', key, keyPath)-->
<!--    },-->
<!--    handSelect (key, keyPath) {-->
<!--      console.log('Select', key, keyPath)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.el-menu{-->
<!--  height: auto;-->
<!--}-->
<!--.el-icon-location, .el-icon-document, .el-icon-setting{-->
<!--  height: auto;-->
<!--}-->
<!--</style>-->
