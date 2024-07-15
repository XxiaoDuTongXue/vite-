<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue';
onMounted(() => {
    request({
        url: '/user/info',
        method: "get",
        data: {
            username: 'system',
            password: '123456',
        }
    })
})
</script>

<style scoped lang="scss"></style>