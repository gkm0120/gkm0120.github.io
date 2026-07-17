---
title: Git和Node.js安装
summary: 
tags:
  - git
  - Nodejs
categories:
  - Git
abbrlink: 03850
date: 2020-03-17 13:07:25
---

Git、Node.js安装
<!--more-->


### 1 Git安装教程
#### 1.1 [Git下载地址](https://git-scm.com/downloads)
#### 1.2 安装步骤：
1. 点击next
2. 根据自己想安装软件的位置来选择路径(我这里选择的是D:\blog)
3. 安装配置文件，自己需要选择
4. 不创建启动文件夹（勾选Don’t create a Star Menu folder）
5. 选择默认编辑器
6. 点击Next(Git from the command...)
7. 使用默认设置就行(use the OpenSSL libuary)
8. 默认(Checkout Windows-style,...)
9. 在终端模拟器选择页面，默认即可，配置后Git
10. 最后配置Git额外选择默认安装
11. 安装完成（鼠标右键出现Git GUI Here和Git Bash Here）

---

### 2 Node.js安装
#### 2.1 [Node.js下载地址](https://nodejs.org/en/download/)
#### 2.2 安装步骤:
1. 下载完成后，开始安装
2. 接受协议
3. 根据自己要安装的地方选择安装目录(我这里选择D:\blog\node.js路径下)
4. 选择安装项，一般默认
5. 点击“Install”按钮，开始安装，完成安装
6. 检验：
	- node -v 查看 node 版本
	- npm -v 查看 npm 版本

---

### 3 环境配置
1. 设置环境变量，“我的电脑”-右键-“属性”-“高级系统设置”-“高级”-“环境变量”
2. 在用户变量里选择Path，点击新建，在弹出的框中点击新建，然后在其中添加D:\blog\Node.js\node_modules
