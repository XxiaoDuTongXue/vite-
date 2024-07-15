<template>
    <svg :style="{width,height}">
        <use :xlink:href="prexi + name" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
import { DefineProps } from 'vue';
// 接受父组件传过来的参数
defineProps({
    prexi: {
        type: String,
        default: '#icon-'
    },
    name: String,
    color: {
        type: String,
        default: ' '
    },
    width: {
        type: String,
        default: '16px'
    },
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<style></style>