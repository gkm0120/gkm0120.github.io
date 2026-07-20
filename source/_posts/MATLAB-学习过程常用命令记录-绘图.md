
---
layout: post
title: MATLAB 学习过程常用命令记录 (绘图)
author: 戈孔明
top: false
cover: false
toc: true
mathjax: true
abbrlink: 32467
date: 2021-04-05 11:01:12
tags: matlab绘图
categories: MATLAB
---

MATLAB中一些基本图像的绘制。
<!--more-->

1. 绘制子图 subplot

```MATLAB
>> subplot(1,2,1)
>> subplot(1,3,1)
>> subplot(2,3,1)
```
subplot 函数代表绘制子图，三个参数，第一个代表绘制一共绘制几行小图表，第二个代表绘制几列小图表，第三个代表绘制第几个小图表。此命令也可以用来选定绘制哪个图。

2. 注释标记 text

```MATLAB
>> text(1,5,'线宽度为4')
>> subplot(1,2,1)
>> text(0.5,0.5,'线宽度为1')
```
text 函数用来绘制注释，三个参数，第一个是 $x$ 坐标，第二个为 $y$ 坐标，第三个为文字。

3. 矩阵的拼凑 [h1;h2] [h1 h2]

```MATLAB
>> h1 = [2 3 4]
>> h2 = [4 5 6]
>> h = [h1;h2]
```
h 则变为 h1 和 h2 叠成的矩阵，即 h1 在上 h2 在下

```MATLAB
>> h1 = [2 3 4]
>> h2 = [4 5 6]
>> h = [h1 h2]
```
h 则变为 h1 和 h2 左右拼接成的矩阵，即 h1 在左 h2 在右

4. 二维作图 plot

(1) plot(Y)
①参数为向量：

```MATLAB
>> plot([2 3 4])
```
作图时则

作 (1,2),(2,3),(3,4) 的直线

②参数为矩阵：

```MATLAB
>> plot([1 2 3;4 5 6])
```
则作 (1,1)(2,4) 和 (1,2)(2,5) 和 (1,3)(2,6) 的直线

(2)plot(X,Y)

①参数为向量和向量

```MATLAB
>> plot([1 2 4 ],[2 3 7])
```
作一条直线过 (1,2)(2,3)(4,7)

②左向量右矩阵

```MATLAB
>> plot([1 2 3],[2 3 4;5 6 7])
```
作图 (1,2)(2,3)(3,4) 直线和 (1,5)(2,6)(3,7) 直线 ，共两条

③左矩阵右向量

```MATLAB
>> plot([1 2 4;3 4 1],[2 3 7])
```
作图 (1,2)(2,3)(4,7) 和 (3,2)(4,3)(1,7) 直线，共两条

④左矩阵右矩阵

```MATLAB
>> plot([1 2.9 3;4 5 8],[2 3.5 4;5 6 7])
```
作图三条直线，第一个矩阵的第一列和第二个矩阵第一列为一条直线，第一个矩阵的第二列和第二个矩阵的第二列为一条直线… 依次类推，共三列，故三条

(3)plot(X1,Y1,X2,Y2…)

同理，会增加 X2 和 Y2 形成的直线

(4)plot(X,Y,LineSpec,…)

可以加一些属性，其中 LineSpec 为属性，后面的.. 则为附加属性

```MATLAB
>> plot(x,y,'--ro','LineWidth',4)
>> plot(x,y,'--ro','LineWidth',6)
>> plot(x,y,'--ro','LineWidth',6,'MarkerSize',12)
```
线型: - 实线 — 虚线：点线 -. 点画线

描点:. 点 o 圈 x 叉号 + 加号 * 星号 > 右三角 ^ 上三角 v 下三角 < 左三角 s 方形 d 菱形 p 五角星 h 六角星

颜色: r 红 y 黄 b 蓝 w 白 k 黑

另外的属性可以通过 get 获取

5. 为坐标加标签 xlabel ylabel

```MATLAB
>> xlabel('x') %为x轴加标签
>> ylabel('y') %为y轴加标签
```
分别为 x 轴和 y 轴加上标签

6. 图形保持功能 hold

```MATLAB
>> hold on  %开启图形保持功能
>> hold off %关闭图形保持功能
```
hold on 为开启图形保持功能，hold off 为关闭图形保持功能
7. 显示或隐藏坐标边框 box

```MATLAB
>> box on    %开启坐标边框
>> box off   %关闭坐标边框
```
box on 显示 box off 关闭 左边边框即为右侧和上方的坐标框，坐标系依然存在
8. 添加或消除网格 grid

```MATLAB
>> grid on      %显示网格
>> grid off     %关闭网格
>> grid minor   %显示次网格
```

9. 为坐标系添加标题 title

```MATLAB
>>title('string')     %为坐标系添加标题
```
10. 添加文字标注 text

```MATLAB
>>text(x,y,'string')
>>text(1,2,'OK')  %添加标记
```
11. 设置坐标系属性 axis

```MATLAB
>> axis on %显示坐标线
>> axis off %关闭坐标线
>> v = axis %显示坐标线范围
>> axis tight %不显示多余部分
>> axis fill %坐标系充满显示框
>> axis equal %坐标纵横比相同
>> axis square %坐标区域为正方形
```
12. 显示图形标注框 legend

```MATLAB
>> legend('string1','string2,...')  %标注各个画线代表什么
```
13. 生成间隔向量 linspace

```MATLAB
>> t = linspace(0,2*pi,60) %生成等间隔从0到2pi的60个元素向量
```
14. 绘制匿名函数 fplot

```MATLAB
>>  f = @(x)200*sin(x)/x; %声明匿名函数表达式
>>  fplot(f,[-20 20]) %绘制函数
```
15. 绘制隐函数 ezplot

```MATLAB
>> ezplot('3*x.^2+2*x*y+4*y.^2=5') %直接输入隐函数表达式
>> ezplot('3*x.^2+2*x*y+4*y.^2=5',[-1 1]) %直接输入隐函数表达式,并加入x的范围
```
16. 绘制饼状图 pie

```MATLAB
>> x = [10 10 30 42 23]; %输入各个值
>> name = ['1','2','3','4','5']; %输入各个名字
>> explode = [0 0 0 0 1] %将第五个分离出来
>> pie(x,explode,name) %绘制饼状图
```
17. 绘制柱状图 bar

```MATLAB
>> subplot(1,2,1)
>> x = [3 4 2 1];         % 每列一个
>> bar(x)
>> subplot(1,2,2);
>> y = [4 5 2 4;6 4 1 2]; % 每列两个
>> bar(y)
```
