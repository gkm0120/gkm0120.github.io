---
layout: post
title: TeX Live 2021 从卸载到安装指南（WIN10）
author: 戈孔明
top: false
cover: false
toc: true
mathjax: true
abbrlink: 59473
date: 2021-04-06 20:54:20
tags: texlive安装
categories: LaTeX
---

WIN10下TeX Live 2021 的下载安装和TeXstudio安装。
<!--more-->

**TeX Live 各版本区别**：[The TeX Live Guide—2021](https://tug.org/texlive/doc/texlive-en/texlive-en.html#news)

## 1 Texlive 2020卸载

若未安装过Texlive，则跳过这一步

windows下Tex Live的安装目录（目录每个人都不一样）

`\texlive\2021\tlpkg\installer`

然后运行里边的`uninst.bat`文件。


<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210529.png"/>

## 2 Texlive 2021 安装

TeX Live 2021已经发布了，大家可以在各个镜像站中直接下载，例如：

**镜像**
- TeX Live 官网：[Index of /CTAN/systems/texlive/Images/](https://mirrors.nju.edu.cn/CTAN/systems/texlive/Images/)

- 清华镜像（推荐）：[Index of /CTAN/systems/texlive/Images/](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/) 

- 中科大镜像：[Index of /CTAN/systems/texlive/Images/](https://mirrors.ustc.edu.cn/CTAN/systems/texlive/Images/)

- 阿里云镜像：[Index of /CTAN/systems/texlive/Images/](https://mirrors.aliyun.com/CTAN/systems/texlive/Images/)


下载镜像文件，双击`install-tl-windows.bat`

<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210536.png"/>


**修改安装路径**

<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210542.png"/>

安装，大约等待半个小时左右
<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210547.png"/>


## 3 TeXstudio安装
注：也可以配置vscodes相应环境进行安装

官网下载：[https://www.texstudio.org/](https://www.texstudio.org/)

<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210529.png"/>


**修改语言**：Options --> Configure Texstudio --> General --> Language --> zh_CN

<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210559.png"/>


**修改默认编译器**: 选项 --> 设置 --> 构建 --> 默认编译器 --> xelatex
<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210604.png"/>

**示例**
```
%导言区
\documentclass[utf-8]{ctexart}%book,report,letter
\newcommand\degree{^\circ} %定义符号

\title{\heiti 杂谈勾股定理}
\author{\kaishu 张三}
\date{\today}

%正文区（文稿区）
\begin{document}
	\maketitle 	
    勾股定理可以用现代语言表述如下:
    直角三角形斜边的平方等于两腰的平方和。
    可以用符号语言表述为:设直角三角形 $ABC$ ,其中
    $\angle C=90\degree$,则有:
     \begin{equation}%带编号的行间公式
     AB^2=BC^2+AC^2
     \end{equation}
\end{document}
```
<img width = '600' height ='300' src ="https://cdn.jsdelivr.net/gh/gkm0120/CDN/img/20210406210615.png"/>


