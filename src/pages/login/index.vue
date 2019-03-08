<template>
  <div class="section">
    <van-cell-group>
      <van-field v-model="user.name" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" @click-right-icon="$toast('question')" />
      <van-field v-model="user.password" type="password" label="密码" placeholder="请输入密码" required />
      <van-button type="primary" size="large">登录</van-button>
    </van-cell-group>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.section {
  height: 200px;
}
</style>
