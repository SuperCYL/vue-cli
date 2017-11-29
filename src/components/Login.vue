<template>
    <div id="Login">
        <el-header>Login</el-header>
        <el-main>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
                    <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </div>
</template>

<script>
import axios from "axios"
var baseUrl = 'http://10.250.117.2/v1/';
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        },
        fullscreenLoading: false
      };
    },
    methods: {
      submitForm(ruleForm) {
        let that = this;
        this.$refs[ruleForm].validate((valid) => {
            if (valid) {
                const loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
                var name = this.ruleForm.name,
                    password = this.ruleForm.password;

                axios.get(baseUrl+'user/encrypt?key='+password).then(function (response) {
                    const encryptPass = response.data;
            　　     axios.get(baseUrl+'user/login?userCode='+name+'&password='+encryptPass).then(function (response) {
                            that.$router.push({path:'/report'});
                            loading.close();
                    }).catch(function (error) {
                    　　console.log(error);
                        loading.close();
                        that.$message('登录失败')
                    })
                }).catch(function (error) {
            　　
                })
                
            } else {
                console.log('error submit!!');
                return false;
            }
        });
      },
      resetForm(ruleForm) {
        this.$refs[ruleForm].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" type="text/css" scoped>

</style>
