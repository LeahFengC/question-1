<template>
  <div class="question-box">
    <h3>问题2</h3>
    <p>使用h5c3或其他方式，实现下图中的五角星</p>
    <img src="../../assets/q2.png" alt="" style="width: 100px; aspect-ratio: 1" />
    <div class="pentagram">
      <div class="pentagram-left"></div>
      <div class="pentagram-mid"></div>
      <div class="pentagram-right"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {}
</script>

<style scoped>
.question-box {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8px;
}
.pentagram {
}
.pentagram-left,
.pentagram-mid,
.pentagram-right {
  width: 0px;
  height: 0px;
  border-left: 40px solid #f8e006;
  border-right: 40px solid transparent;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
}
.pentagram-left {
  transform: rotateZ(24deg);
}
.pentagram-mid {
  transform: rotateZ(90deg);
  position: relative;
  top: -72px;
  left: -20px;
}
.pentagram-right {
  transform: rotateZ(156deg);
  position: relative;
  top: -160px;
  left: -40px;
}
</style>
