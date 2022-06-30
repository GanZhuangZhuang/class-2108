<template>
  <el-menu
    active-text-color="#fff"
    background-color="#304156"
    default-active=""
    text-color="#fff"
    unique-opened
    router
  >
    <template v-for="(item, index) in menuList" :key="index">
      <template v-if="item && !item.children">
        <el-menu-item :index="item.path">
          <el-icon>
            <svg-icon :icon="item.meta.icon"></svg-icon>
          </el-icon>
          {{ item.meta.title }}
        </el-menu-item>
      </template>
      <template v-if="item && item.children && item.children.length > 0">
        <el-sub-menu :index="index">
          <template #title>
            <el-icon>
              <svg-icon :icon="item.meta.icon"></svg-icon>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-sub-menu>
      </template>
    </template>

    <!-- <el-sub-menu index="/profile">
      <template #title>
        <el-icon>
          <svg-icon icon="personnel"></svg-icon>
        </el-icon>
        <span>个人中心</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <svg-icon icon="personnel"></svg-icon>
        </el-icon>
        <span>用户</span>
      </template>

      <el-menu-item index="/user/manage">
        <el-icon>
          <svg-icon icon="personnel-manage"></svg-icon>
        </el-icon>
        <sspan>员工管理</sspan>
      </el-menu-item>

      <el-menu-item index="/user/role">
        <el-icon>
          <svg-icon icon="role"></svg-icon>
        </el-icon>
        <span>角色列表</span>
      </el-menu-item>

      <el-menu-item index="/user/permission">
        <el-icon>
          <svg-icon icon="permission"></svg-icon>
        </el-icon>
        <span>权限管理</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <svg-icon icon="article"></svg-icon>
        </el-icon>
        <span>文章</span>
      </template>

      <el-menu-item index="/article/ranking">
        <el-icon>
          <svg-icon icon="article-ranking"></svg-icon>
        </el-icon>
        <sspan>文章排名</sspan>
      </el-menu-item>

      <el-menu-item index="/article/create">
        <el-icon>
          <svg-icon icon="article-create"></svg-icon>
        </el-icon>
        <span>文章创建</span>
      </el-menu-item>
    </el-sub-menu> -->
  </el-menu>
</template>

<script setup>
import { reactive } from 'vue'
const data = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    }
  },
  {
    path: '/user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'userManage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        },
        children: []
      },
      {
        path: '/user/role',
        name: 'userRole',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'userPermission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    redirect: '/article/ranking',
    meta: {
      title: '文章',
      icon: 'article'
    },
    props: {
      default: false
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        meta: {
          title: '文章创建',
          icon: 'article-create'
        }
      }
    ]
  }
]
const menuList = reactive(data)
</script>

<style lang="scss" scoped></style>
