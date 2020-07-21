<template>
    <div>
        <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
    </div>
</template>
<script>
export default {
    name: 'test',
    data(){
        return {
            input: "abc"
        }
    }
}
</script>