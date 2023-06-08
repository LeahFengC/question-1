<template>
  <div class="question-box">
    <h3>问题1</h3>
    <p>如下级联所示: 树状结构JSON</p>
    <el-cascader v-model="value" :options="data" :show-all-levels="false"></el-cascader>
    <p>要求: 实现叶子节点的下拉项</p>
    <el-select v-model="leafValue">
      <el-option v-for="item in flatChildren" :key="item.tagId" :value="item.tagId" :label="item.label"></el-option>
    </el-select>
  </div>
</template>

<script>
/* eslint-disable */
import { data } from '@/mock/mock'
export default {
  data() {
    return {
      data,
      value: null,
      leafValue: null
    }
  },
  computed: {
    //  只取第三层children
    flatChildren() {
      const selectList = []
      this.data &&
        this.data.forEach(item => {
          item.children &&
            item.children.forEach(cItem => {
              cItem.children &&
                cItem.children.forEach(sItem => {
                  selectList.push(sItem)
                })
            })
        })
      return selectList
    },
    //  取全部
    flatAllData() {
      if (!this.data || !Array.isArray(this.data)) return []
      return this.flatFun(this.data)
    }
  },
  methods: {
    flatFun(list) {
      const selectList = []
      list.forEach(item => {
        selectList.push(item)
        if (item.children && item.children.length > 0) {
          selectList.push(...this.flatFun(item.children))
        }
      })
      return selectList
    }
  }
}
</script>

<style scoped>
.question-box {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
}
</style>
