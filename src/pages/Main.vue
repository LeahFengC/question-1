<template>
  <div class="container">
    <Question1></Question1>
    <Question2></Question2>
  </div>
</template>

<script>
import Question1 from './question/question_1'
import Question2 from './question/question_2'
export default {
  components:{
    Question1,
    Question2
  },
  name: 'Main',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.container{
  display:  flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 20px;
  gap: 8px;
  font-size: 14px;
  color: #030303;
}
</style>
