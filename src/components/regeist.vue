<template>
  <div id="regeist">
    <div id="regeist-box">
      <h2>注册</h2>
      <table>
        <tr>
          <td>账号</td>
          <td>
            <input type="text" placeholder="请输入8-12位字符" v-model.lazy.trim="username">
            <i class="fa fa-check-square yes" v-show="yes.name"></i>
            <i class="fa fa-window-close no" v-show="no.name"></i>
          </td>
        </tr>
        <tr>
          <td>密码</td>
          <td>
            <input type="password" placeholder="请输入6位字符" v-model.lazy.trim="password">
            <i class="fa fa-check-square yes" v-show="yes.password"></i>
            <i class="fa fa-window-close no" v-show="no.password"></i>
          </td>
        </tr>
        <tr>
          <td>确认密码</td>
          <td>
            <input type="password" placeholder="请再输入密码" v-model.lazy.trim="passwordAgain">
            <i class="fa fa-check-square yes" v-show="yes.passwordAgain"></i>
            <i class="fa fa-window-close no" v-show="no.passwordAgain"></i>
          </td>
        </tr>
        <tr>
          <td>角色</td>
          <td>
            <select v-model.lazy.trim="role">
              <option value="观众">观众</option>
              <option value="选手">选手</option>
              <option value="教练">教练</option>
            </select>
          </td>
        </tr>
      </table>
      <div id="btn">
        <button v-on:click="regeist()">注册</button>
      </div>
      <div id="close" v-on:click="closeLogin()"><i class="fa fa-close"></i></div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "regeist",
        data() {
            return {
                yes: {
                    name: false,
                    password: false,
                    passwordAgain: false
                },
                no: {
                    name: false,
                    password: false,
                    passwordAgain: false
                },
                username: "",
                password: "",
                passwordAgain: "",
                role: '观众'
            };
        },
        methods: {
            checkUserName(val) {
                if (val.length >= 8 && val.length <= 12) {
                    this.yes.name = true;
                } else {
                    this.no.name = true;
                }
            },
            checkUserPassword(val) {
                if (val.length == 6) {
                    this.yes.password = true;
                } else {
                    this.no.password = true;
                }
            },
            checkUserPasswordAgain(val) {
                if (val === this.password) {
                    this.yes.passwordAgain = true;
                } else {
                    this.no.passwordAgain = true;
                }
            },
            closeLogin() {
                this.$emit("closeRegeistBox", false);
            },
            regeist() {
                if (this.yes.name && this.yes.password && this.yes.passwordAgain && this.role) {
                    axios.post('http://39.108.118.110/register', {
                        name: this.username,
                        password: this.password,
                        role: this.role
                    })
                        .then(function (res) {
                            console.log(res);
                        })
                        .catch(function (err) {
                            console.error(err);
                        })
                } else {
                    alert('请正确填写所有信息！');
                }
            }
        },
        watch: {
            username: function (value) {
                this.checkUserName(value);
            },
            password: function (value) {
                this.checkUserPassword(value);
            },
            passwordAgain: function (value) {
                this.checkUserPasswordAgain(value);
            }
        }
    };
</script>

<style>
  @import url(../assets/font-awesome-4.7.0/css/font-awesome.css);

  #regeist {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 100;
  }

  #regeist-box {
    width: 60vw;
    margin: 200px auto;
    background: #fff;
    border-radius: 8px;
    padding: 20px 0;
    position: relative;
  }

  #regeist-box h2 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
  }

  #regeist table {
    width: 70%;
    margin: 10px auto;
  }

  #regeist-box td {
    text-align: left;
    padding: 5px 10px;
    width: 50%;
    height: 40px;
    position: relative;
  }

  #regeist-box input {
    width: 180px;
  }

  #close {
    position: absolute;
    right: 15px;
    cursor: pointer;
    top: 5px;
    font-size: 24px;
  }

  #close:hover {
    color: #999;
  }

  #regeist-box td i {
    position: absolute;
    right: 150px;
    top: 18px;
  }

  .yes {
    color: seagreen;
  }

  .no {
    color: crimson;
  }

  #btn {
    width: 120px;
    height: 50px;
    margin: 0 auto;
  }

  #regeist-box button {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    margin: 0 auto;
    font-size: 24px;
  }
</style>

