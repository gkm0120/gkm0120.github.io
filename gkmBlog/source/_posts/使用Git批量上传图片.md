---
title: 使用Git批量上传图片
author: 戈孔明
top: false
cover: false
toc: true
mathjax: false
summary: 使用Git Bash 上传图片
tags:
  - jsDelivr
  - CDN
categories:
  - 批量上传图片
abbrlink: bb97
date: 2020-03-27 11:06:17
img:
coverImg:
password:
---

## 使用方法 ##
1. 首先登录/注册GitHub，新建一个仓库，填写好仓库名，仓库描述，初始化一个 README.md 描述文件，如图所示：

![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032701.jpg)
![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032702.jpg)

2. 提交对应版本

![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032704.jpg)
![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032705.jpg)

3. 然后找到对应的SSH key

![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032703.jpg)

4. 利用git本地推送，默认在c盘，修改到d盘，初始化，克隆

![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032706.jpg)

5. 本地新建一个images文件夹，随便存入一张test.jpg，提交，上传，推送

![](https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/2020032707.jpg)

## 加速方法 ##
1. 创建一个 GitHub 仓库作为图床仓库，上传提交图片到仓库中（就是刚刚那个CDN仓库）
2. 在要使用 GitHub 图床图片的地方将链接换为 https://cdn.jsdelivr.net/gh/{user}/{repo}/图片路径， 如：https://cdn.jsdelivr.net/gh/gkm0120/CDN/images/test.jpg 享受 jsDelivr 提供的全球 CDN 加速

