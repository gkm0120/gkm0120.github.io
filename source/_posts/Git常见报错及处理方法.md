---
title: Git常见报错及处理方法
summary: 
tags:
  - git
categories:
  - Git
abbrlink: 00952
date: 2020-03-16 14:03:03
---

一些常见Git报错处理
<!--more-->


### Error 1 
**Fatal:remote origin already exists.**
如果输入`$ git remote add origin git@github.com:gkm0120（github帐号名）/gitdemo（项目名）.git`
提示出错信息：`fatal: remote origin already exists`.
#### 解决办法： ####
1. 先输入`$ git remote rm origin`
2. 再输入`$ git remote add origin git@github.com:gkm0120/gkm0120.github.io.git` 就不会报错了！
3. 若输入`$ git remote rm origin` 还是报错的话，error: Could not remove config section ‘remote.origin’. 我们需要修改gitconfig文件的内容
4. 找到你的github的安装路径，我的是C:/Users/gkm0120/.git
5. 找到一个名为gitconfig的文件，打开它把里面的[remote “origin”]那一行删掉就好了！

### Error 2 
**Permission denied (publickey)**
如果输入`$ ssh -T git@github.com`出现错误提示：Permission denied (publickey).因为新生成的key不能加入ssh就会导致连接不上github。
#### 解决办法： ####
1. 先输入`$ ssh-agent`，再输入$ ssh-add ~/.ssh/id_key，这样就可以了。
2. 如果还是不行的话，输入ssh-add ~/.ssh/id_key 命令后出现报错Could not open a connection to your authentication agent.解决方法是key用Git Gui的ssh工具生成，这样生成的时候key就直接保存在ssh中了，不需要再ssh-add命令加入了，其它的user，token等配置都用命令行来做。
3. 最好检查一下在你复制id_rsa.pub文件的内容时有没有产生多余的空格或空行，有些编辑器会帮你添加这些的。

### Error 3 
**Failed to push some refs to...**
如果输入`$ git push origin master`提示出错信息：error: failed to push some refs to 'git@github.com:gkm0120/-.git'错误分析：本地没有update到最新版本的项目（git上有README.md文件没下载下来）、本地直接push所以会出错。
#### 解决办法： ####

##### First #####
输入 `$ git pull --rebase origin master`......显示一串拉代码的英文，此时已经把github上最新的文件，然后在输入git push origin master,即可成功把本地的文件都上传到github上面去了，`$ git push origin master`

##### Second #####
1. 先输入`$ git pull origin master` //先把远程服务器github上面的文件拉下来
2. 再输入`$ git push origin master`
3. 如果出现报错 fatal: Couldn’t find remote ref master或者fatal: ‘origin’ does not appear to be a git repository以及fatal: Could not read from remote repository.
4. 则需要重新输入`$ git remote add origin git@github.com:gkm0120/gkm0120.github.io.git`
使用git在本地创建一个项目的过程
- $ makdir ~/hello-world //创建一个项目hello-world
- $ cd ~/hello-world  //打开这个项目
- $ git init //初始化
- $ git add README //更新README文件
- $ git commit -m ‘first commit’ //提交更新，并注释信息“first commit”
- $ git remote add origin git@github.com:gkm0120/gkm0120.github.io.git //连接远程github项目
- $ git push -u origin master //将本地项目更新到github项目上去

**参考链接**
1. <https://blog.csdn.net/Umbrella_Um/article/details/97271486>
