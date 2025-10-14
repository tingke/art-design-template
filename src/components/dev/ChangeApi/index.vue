<template>
    <ElDialog title="切换API" v-model="dialogVisible" width="500px" :before-close="handleClose">
        <ArtForm
            ref="formRef"
            v-model="formData"
            :items="formItems"
            :show-submit="false"
            :show-reset="false"
        >
            <template #api="{ item }">
                <ElRadioGroup v-model="formData.api">
                    <ElRadio
                        :style="radioStyle"
                        :label="key"
                        v-for="(val, key) in addresses"
                        :key="key"
                        >{{ key }}: {{ val }}</ElRadio
                    >
                </ElRadioGroup>
            </template>
        </ArtForm>
        <template #footer>
            <ElButton @click="handleClose">取消</ElButton>
            <ElButton type="primary" @click="handleSubmit">确定</ElButton>
        </template>
    </ElDialog>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElDialog, ElRadioGroup, ElRadio, ElButton } from 'element-plus'
import ArtForm from '@/components/core/forms/art-form/index.vue'

// 定义ApiAddress类型
interface ApiAddress {
    key: string
    val: string
}

const dialogVisible = ref(false)
const formRef = ref()

// API地址配置
const addresses = ref({
    development: 'http://www.a.com',
    test: 'http://www.b.com',
    prod: 'http://www.c.com'
})

// 单选框样式
const radioStyle = ref({
    display: 'flex',
    height: '30px',
    lineHeight: '30px'
})

// 表单数据
const formData = reactive({
    api: import.meta.env.MODE || 'development' // 当前环境
})

// 表单项配置
const formItems = ref([
    {
        key: 'api',
        label: '切换API',
        type: 'input',
        slot: 'api'
    }
])

// 打开对话框
const openDialog = () => {
    dialogVisible.value = true
    initData()
}

// 初始化数据
const initData = () => {
    // 从localStorage或其他地方获取当前API地址
    const currentApi = localStorage.getItem('apiAddress')
    if (currentApi) {
        try {
            const apiData: ApiAddress = JSON.parse(currentApi)
            formData.api = apiData.key
        } catch (e) {
            console.error('解析API地址失败', e)
        }
    }
}

// 提交处理
const handleSubmit = () => {
    const selectedApi = formData.api
    if (selectedApi && addresses.value[selectedApi]) {
        const apiData: ApiAddress = {
            key: selectedApi,
            val: addresses.value[selectedApi]
        }
        // 保存到localStorage
        localStorage.setItem('apiAddress', JSON.stringify(apiData))
        // 刷新页面
        location.reload()
    }
}

// 关闭对话框
const handleClose = () => {
    dialogVisible.value = false
}

// 暴露方法给父组件
defineExpose({
    openDialog
})
</script>
