<template>
	<div id="login">
		<div id="login-box">
			<h2>登陆</h2>
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
			</table>
			<div id="btn">
				<button v-on:click="login()">登陆</button>
			</div>
			<div id="close" v-on:click="closeLogin()"><i class="fa fa-close"></i></div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";

	export default {
		name: "login",
		data() {
			return {
				yes: {
					name: false,
					password: false
				},
				no: {
					name: false,
					password: false
				},
				username: "",
				password: ""
			};
		},
		methods: {
			checkUserName(val) {
				if(val.length >= 8 && val.length <= 12) {
					this.yes.name = true;
				} else {
					this.no.name = true;
				}
			},
			checkUserPassword(val) {
				if(val.length == 6) {
					this.yes.password = true;
				} else {
					this.no.password = true;
				}
			},
			closeLogin() {
				this.$emit("closeLoginBox", false);
			},
			login() {
				if(this.yes.name && this.yes.password) {
					axios
						.post("http://39.108.118.110/login", {
							name: this.username,
							password: this.password
						})
						.then(function(res) {
							localStorage.setItem('_userName', res.data.data[0].user_name);
							location.reload();
							console.log(res);
						})
						.catch(function(err) {
							console.error(err);
						});
				} else {
					alert('请正确填写所有信息！');
				}
			}
		},
		watch: {
			username: function(value) {
				this.checkUserName(value);
			},
			password: function(value) {
				this.checkUserPassword(value);
			}
		}
	};
</script>

<style>
	@import url(../assets/font-awesome-4.7.0/css/font-awesome.css);
	#login {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		position: absolute;
		left: 0;
		top: 50px;
		z-index: 100;
	}
	
	#login-box {
		width: 60vw;
		margin: 200px auto;
		background: #fff;
		border-radius: 8px;
		padding: 20px 0;
		position: relative;
	}
	
	#login-box h2 {
		font-size: 36px;
		font-weight: bold;
		text-align: center;
	}
	
	#login table {
		width: 70%;
		margin: 10px auto;
	}
	
	#login-box td {
		text-align: left;
		padding: 5px 10px;
		width: 50%;
		height: 40px;
		position: relative;
	}
	
	#login-box input {
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
	
	#login-box td i {
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
	
	#login-box button {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		margin: 0 auto;
		font-size: 24px;
	}
</style>