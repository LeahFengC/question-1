<template>
  <div class="question-box">
    <h3>问题1</h3>
    <p>如下级联所示: 树状结构JSON</p>
    <el-cascader
      v-model="value"
      :options="data"
      :show-all-levels="false"
    ></el-cascader>
    <p>要求: 实现叶子节点的下拉项</p>
    <el-select v-model="leafValue"></el-select>
  </div>
</template>

<script>
import { data } from '@/mock/mock'
export default {
  data() {
    return {
      data,
      value: null,
      leafValue: null
    }
  }
}
</script>

<style scoped>
.question-box{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
}
</style>
