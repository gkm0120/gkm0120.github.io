---
title: 热传导方程的 Cauchy 问题
author: 戈孔明
top: false
cover: false
toc: true
mathjax: true
img: /medias/banner/1.jpg
coverImg: \medias\featureimages\12.jpg
summary: 
tags:
  - 热传导方程
  - Cauchy 问题
categories:
  - 偏微分方程
abbrlink: 21593
date: 2020-04-13 16:31:08
password:
---

偏微分的学习记录，持续更新中。。。
<!--more-->

## 3 热传导方程
### 3.1 热传导方程的 Cauchy 问题
#### 3.1.1 齐次热传导方程的 Cauchy 问题
一维齐次热传导方程的Cauchy问题是

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=0, \quad-\infty<x<\infty, t>0  \\\\
&\left.u\right|_{t=0}=\varphi(x), \quad-\infty<x<\infty
\end{aligned}
\tag{1} \label{eq:1}
\right.
\end{equation} $$

方程 （1）的解具有如下性质：
> 性质 3.1 设$ u(x,t) $是（1）的解, 则对任意的$ y\in R$，$u(x-y, t)$ 也是（1）的解。
> 性质 3.2 设$ u(x,t) $是（1）的解, 则它的各阶导数也是（1）的解。
> 性质 3.3 设$ S(x,t) $是（1）的解，则对任意连续函数$ g(y) $
$$
v(x, t)=\int_{-\infty}^{\infty} S(x-y, t) g(y) \mathrm{d} y
$$
也是（1）的解。

理由：
$$V_{\varepsilon}=\int_{-\infty}^{\infty} S_{\varepsilon}(x-y, t) g(y)\to g(x) \qquad \varepsilon\to 0 $$

> 性质 3.4 设$ u(x,t) $是（1）的解，则对任意的$ \lambda>0,$ $u\left(\lambda x, \lambda^{2} t\right)$ 也是（1）的解。

理由：
$u$是（1）的解，寻找$v(x,t)=\lambda{\alpha}u(\lambda{\beta}x，\lambda{\gamma}t)$是（1）的解
$$v_t=\lambda{\alpha+\gamma}u_t,u_x=\lambda{\alpha+\beta}u_x，u_{xx}=\lambda{\alpha+2\beta}u_x$$
$$0=v_t-a^{2}v_{xx}=\lambda{\alpha+\gamma}u_t-a^{2}\lambda{\alpha+2\beta}u_{xx}$$
取$$\gamma=2\beta，\lambda=\frac{1}{\sqrt{t}}，v(x, t)=u(\lambda x，\lambda^{2}t)=u({\frac{x}{\sqrt{t}}})=u(\xi)，\xi={\frac{x}{\sqrt{t}}}$$
空间变量、时间变量做伸缩变换（尺度不一）
$$0=v_t-a^{2}v_{xx}=2xt^{-\frac{3}{2}}- a^2 u^{\prime \prime} t^{-1}$$
化简有
$$u^{\prime \prime}+\frac{1}{2 a^{2}} \xi u^{\prime}=0$$
$$u(\xi)=c_{1} \int_{0}^{\xi} \mathrm{e}^{-\frac{1}{4 a^{2}} \eta^{2}} d \eta+c_{2}$$
其中$ c_1 $, $ c_2 $是两个积分常数。
进而
$$u(x,t)=c_{1} \int_{0}^{\frac{x}{\sqrt{t}}} \mathrm{e}^{-\frac{1}{4 a^{2}} \eta^{2}} d \eta+c_{2}$$
$$S(x, t)=\frac{\partial}{\partial x} v(x, t)=\frac{c_{1}}{\sqrt{t}} e^{-\frac{x^{2}}{4 a^{2} t}}$$
由性质3.3知对任意连续函数$g(y)$,
$$v(x, t)=\int_{-\infty}^{\infty} S(x-y, t) g(y) \mathrm{d} y=\frac{c_{1}}{\sqrt{t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2} t}} g(y) \mathrm{d} y$$
也是（1）的解
求出$c_1$使其满足初始条件，即
$$\lim_{t \rightarrow 0^{+}}\frac{c_{1}}{\sqrt{t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2} t}} g(y) \mathrm{d} y = \varphi(y)$$
作变换$y-x=2a \sqrt{t} \xi$，有
$$\lim_{t \rightarrow 0^{+}}\frac{c_{1}}{\sqrt{t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-\mu)^{2}}{4 a^{2} t}} g(x+2a \sqrt{t} \xi) 2a{\sqrt{t}} \mathrm{d} \xi = 2ac_1\lim_{t \rightarrow 0^{+}}\frac{c_{1}}{\sqrt{t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\xi^{2}} g(x+2a \sqrt{t}\xi) \mathrm{d} \xi \\\\ =2ac_1g(x)\int_{-\infty}^{\infty}\mathrm{e}^{-\xi^{2}} \mathrm{d} \xi=2a{\sqrt{\pi}}c_1g(x)=\varphi(x)$$
第二个等号成立的条件：$g$连续且一致有界$\Rightarrow$一致收敛（反常积分）$\Rightarrow$t的连续函数
取$c_1=\frac{\varphi(x)}{2a{\sqrt{\pi}}g(x)}$，代入有
$$u(x,t)=\frac{1}{2a{\sqrt{\pi t}}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2} t}} \varphi(y) \mathrm{d} y$$
称上式为Cauchy问题的Possion公式
记
$$G(x, t)=\begin{cases}
\frac{1}{2 a \sqrt{\pi t}} \mathrm{e}^{-\frac{x^{2}}{4 a^{2} t}}  & t>0 \\\\
0  & t<0
\end{cases} $$
则有
$$u(x, t)=\int_{-\infty}^{\infty} G(x-y, t) \varphi(y) \mathrm{d} y$$
称由上式确定的函数称为热核函数

下证$u(x,t)=\int_{-\infty}^{\infty} G(x-y,t) \varphi(y) \mathrm{d} y$是如下Cauchy问题的解：

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=0, \quad-\infty<x<\infty, t>0  \\\\
&\left.u\right|_{t=0}=\varphi(x), \quad-\infty<x<\infty
\end{aligned}
\right.
\end{equation} $$

由
$$u(x,t)=\frac{1}{2a{\sqrt{\pi t}}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2} t}} \varphi(y) \mathrm{d} y$$
知
$$u(x,t)=-\frac{1}{2a{\sqrt{\pi}t^{\frac{3}{2}}}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y+\frac{1}{2a{\sqrt{\pi}}t} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} {\frac{(x-y)^{2}}{4 a^{2} t^2}} \varphi(y) \mathrm{d} y$$
$\forall t_0 \gt 0,t\ge t_0$时，上述积分都一致收敛
理由：
$$\begin{aligned}
| u(x, t) | \leq M \int_{-\infty}^{\infty} G(x-y, t) \mathrm{d} y=\frac{M}{2 a \sqrt{\pi t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \mathrm{d} y=M
\end{aligned}$$
其中$|\varphi(x)| \le M,\forall t \gt 0$
局部：$\forall (x_0,t_1)\in \mathrm{R}\times(0,{\infty}) $，取$t_0=\frac{t_1}{2}$，故在$[\frac{t_1}{2},{\infty}]$上一致收敛
$$u_t(x, t)=\int_{-\infty}^{\infty} G_t(x-y, t) \varphi(y) \mathrm{d} y$$
$$u_{xx}(x, t)=\int_{-\infty}^{\infty} G_{xx}(x-y, t) \varphi(y) \mathrm{d} y$$
$$u_t(x, t)-a^2u_{xx}=\int_{-\infty}^{\infty} (G_t-a^2G_xx)(x-y, t) \varphi(y) \mathrm{d} y=0$$
注1：$\varphi$ 为有界连续函数，则$u(x,t)$当$t \gt 0$关于$x,t$无穷次可微，即
$$\frac{\partial^{k+1} u}{\partial x^{k} \partial t^{l}}=\int_{-\infty}^{\infty} \frac{\partial^{k+l}}{\partial x^{k} \partial t^{l}} G(x-y, t) \varphi(y) \mathrm{d} y \sim P(\frac{1}{\sqrt{t}}) \int_{-\infty}^{\infty} Q(x,y) \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y$$
其中$\sim$为等价符号，$Q(x,y)$为只含$x,y$变量的二元函数。由$\forall \delta \gt 0$，上式右端在区域$\{-\infty<x<\infty, t \geq \delta\}$上一致收敛。由于当$t \gt 0$，$G(x-y,t)$无穷次可微，故$u(x, t) \in C^{\infty}\left(\mathbb{R}_{+}^{2}\right)$

注2：初值 $\varphi $属于有界函数类的条件可放宽为$$\{|\varphi(x)| \leq M \mathrm{e}^{N x^{2}}, \quad-\infty<x<\infty}$$
理由:可证$u(x,t)$在区域$ {0 \lt t \lt \frac{1}{4 a^{2} N}，-\infty<x<\infty}$上仍是热传导方程Cauchy问题的解。

注3：若$|\varphi(x)| \le M$，由Possion公式知，$|u(x,t)| \le M，-\infty<x<\infty，t \geq 0$

注4：Possion公式给出的解在任意一点$(x,t)(t \gt 0)$的值，依赖于初始值在整个$x$轴的值，没有有限的依赖区域。
如果杆的初始温度只在某一小段$I_{\delta}=\left(x_{0}-\delta, x_{0}+\delta\right)$不为0，设$$\varphi(x)>0, x \in I_{\delta}; \varphi(x) \equiv 0, x \notin I_{\delta}$$
当$ t \geq 0$时，$$u(x, t)=\int_{-\infty}^{\infty} G(x-y, t) \varphi(y) \mathrm{d} y>0$$
说明热量瞬间传播到杆上的每一点，热的传播速度是无限的

#### 3.1.2 非齐次热传导方程的 Cauchy 问题
一维非齐次热传导方程的Cauchy问题是

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=f(x,t), \quad-\infty<x<\infty, t>0  \\\\
&\left.u\right|_{t=0}=\varphi(x), \quad-\infty<x<\infty
\end{aligned}
\tag{2} \label{eq:2}
\right.
\end{equation} $$
由叠加原理上式可分解为以下两个问题的求解：

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=0, \quad-\infty<x<\infty, t>0  \\\\
&\left.u\right|_{t=0}=\varphi(x), \quad-\infty<x<\infty
\end{aligned}
\right.
\end{equation} $$

解出
$$u(x, t)=\int_{-\infty}^{\infty} G(x-y, t) \varphi(y) \mathrm{d}=\frac{1}{2 a \sqrt{\pi t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y $$

和

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=f(x,t), \quad-\infty<x<\infty, t>0  \\\\
&\left.u\right|_{t=0}=0, \quad-\infty<x<\infty
\end{aligned}
\tag{3} \label{eq:3}
\right.
\end{equation} $$

>引理3.1（齐次化原理）若函数$w(x,t,\tau)$是Cauchy问题
$$ \begin{equation}
\left\\{
\begin{aligned}
&w_{t}-a^{2} w_{x x}=0, \quad-\infty<x<\infty, t>0  \\\\
&\left.w\right|_{t=0}=f(x,\tau), \quad-\infty<x<\infty
\end{aligned}
\tag{4} \label{eq:4}
\right.
\end{equation} $$

的解，则函数 $u(x,t)=\int_{0}^{t} w(x,t,\tau) \mathrm{d} \tau$ 是Cauchy问题（4）的解
证：
1. 满足初始条件$\left.u\right|_{t=0}=0 $
2. 满足方程$u_{t}-a^{2} u_{x x}=f(x,t)$
$$u_t=w(x,t,\tau)+\int_{0}^{t} w_t (x,t,\tau) \mathrm{d} \tau = f(x,t)+\int_{0}^{t} w_t(x,t,\tau) \mathrm{d} \tau$$
$$u_x=\int_{0}^{t} w_x (x,t,\tau) \mathrm{d} \tau，u_{xx}=\int_{0}^{t} w_{xx} (x,t,\tau) \mathrm{d} \tau$$
则
$$u_t-a^{2}u_{xx} = f(x,t)+ \int_{0}^{t} w_t (x,t,\tau) \mathrm{d} \tau - a^{2} \int_{0}^{t} w_{xx} (x,t,\tau) \mathrm{d} \tau \\\\ = f(x,t) + \int_{0}^{t} (w_t - a^{2}w_{xx}) (x,t,\tau) \mathrm{d} \tau = f(x,t)$$

为了求解问题（4），令$t^{\prime}=t-\tau，x=x$（自变量变换）

$$ \begin{equation}
\left\\{
\begin{aligned}
&w_{t^{\prime}}-a^{2} w_{x x}=0, \quad-\infty<x<\infty, t^{\prime}>0  \\\\
&\left.w\right|_{t^{\prime}=0}=f(x,\tau), \quad-\infty<x<\infty
\end{aligned}
\tag{5} \label{eq:5}
\right.
\end{equation} $$

解出
$$w(x,t^{\prime},\tau)=\int_{-\infty}^{\infty} G(x-y, t^{\prime}) f(y,\tau) \mathrm{d} y $$
则问题（4）的解
$$w(x,t,\tau)=\int_{-\infty}^{\infty} G(x-y, t-\tau) f(y,\tau) \mathrm{d} y $$
则问题（3）的解
$$u(x,t)=\int_{0}^{t}\int_{-\infty}^{\infty} G(x-y, t-\tau) f(y,\tau) \mathrm{d} y \mathrm{d} \tau$$
故由叠加原理,问题（2）的解为
$$u(x,t)=\int_{-\infty}^{\infty} G(x-y, t) \varphi(y)\mathrm{d} y + \int_{0}^{t}\int_{-\infty}^{\infty} G(x-y, t-\tau) f(y,\tau) \mathrm{d} y \mathrm{d} \tau $$
也记为$$u(x,t)=G \ast \varphi + \int_{0}^{t} G(\bullet,t-\tau)f(\bullet,t-\tau)$$
其中$\ast$为卷积符号，$\bullet$表示关于第一个空间变量作卷积

> 定理3.1：若$\varphi(x) \in C(-\infty, \infty), f(x, t) \in C((-\infty, \infty) \times(0, \infty))$且均有界，则由Possion公式确定的函数$u(x,t)$是Cauchy问题（2）的解

理由：根据上述推导证明可得。

### 3.2 热传导方程的混合问题
#### 3.2.1 半直线上热传导方程与热的反射
考虑侧表面绝热的均匀细杆，一端固定，已知初始温度和细杆在固定端点的温度，则杆上的温度分布满足如下混合问题：

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=f(x, t),  &0 \lt x \lt \infty, t>0 \\\\
&u(x, 0)=\varphi(x),  &0 \leq x \lt \infty \\\\
&u(0, t)=\mu(t), &t \geq 0
\end{aligned}
\tag{6} \label{eq:6}
\right.
\end{equation} $$

考虑$f(x) \equiv 0，u(t) \equiv 0$的情形
1. Dirlect边界

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=0,  &0 \lt x \lt \infty, t>0 \\\\
&u(x, 0)=\varphi(x),  &0 \leq x \lt \infty \\\\
&u(0, t)=0, &t \geq 0
\end{aligned}
\tag{7} \label{eq:7}
\right.
\end{equation} $$

由

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=0, \quad-\infty<x<\infty, t>0  \\\\
&\left.u\right|_{t=0}=\varphi(x), \quad-\infty<x<\infty
\end{aligned}
\tag{8} \label{eq:8}
\right.
\end{equation} $$

解出：
$$u(x, t)=\frac{1}{2 a \sqrt{\pi t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y $$

初始：
$$ \left.u\right|_{t=0}=\varphi(x)，-\infty<x<\infty$$

选取（连续奇函数）：
$$\Phi(x)=\begin{cases}
\varphi(x)  & x \ge 0 \\\\
-\varphi(-x)  & x \lt 0
\end{cases} $$
其中：
$$u(0, t)=\frac{1}{2 a \sqrt{\pi t}} \int_{-\infty}^{\infty} e^{-\frac{y^{2}}{4 a^{2}}} \Phi(y) d y=0$$
则有：
$$u(x, t)=\frac{1}{2 a \sqrt{\pi t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y = \frac{1}{2 a \sqrt{\pi t}} \int_{-\infty}^{0} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} {-\varphi(-y)} \mathrm{d} y +\\\\ \frac{1}{2 a \sqrt{\pi t}} \int_{0}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y  =\frac{1}{2 a \sqrt{\pi t}} \int_{0}^{+\infty}\left(\mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}}}-e^{-\frac{(x+y)^{2}}{4 a^{2}}}\right) \varphi(y) \mathrm{d} y $$

2. Newmann边界

$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=0,  &0 \lt x \lt \infty, t>0 \\\\
&u(x, 0)=\varphi(x),  &0 \leq x \lt \infty \\\\
&u_x(0, t)=0, &t \geq 0
\end{aligned}
\tag{9} \label{eq:9}
\right.
\end{equation} $$
选取（连续偶函数）：
$$\Phi(x)=\begin{cases}
\varphi(x)  & x \ge 0 \\\\
\varphi(-x)  & x \lt 0
\end{cases} $$
则有：
$$u(x, t)=\frac{1}{2 a \sqrt{\pi t}} \int_{-\infty}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y = -\frac{1}{ a \sqrt{\pi t}} \int_{-\infty}^{0} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} {-\varphi(-y)} \mathrm{d} y + \\\\ \frac{1}{2 a \sqrt{\pi t}} \int_{0}^{\infty} \mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}t}} \varphi(y) \mathrm{d} y  =\frac{1}{2 a \sqrt{\pi t}} \int_{0}^{+\infty}\left(\mathrm{e}^{-\frac{(x-y)^{2}}{4 a^{2}}}+e^{-\frac{(x+y)^{2}}{4 a^{2}}}\right) \varphi(y) \mathrm{d} y $$

为求解问题（6），将边界齐次化，令$v(x,t)=u(x,t)-\mu(t)$
则

$$ \begin{equation}
\left\\{
\begin{aligned}
&v_{t}-a^{2} v_{x x}=f(x,t)-\mu^{\prime}(t)，\\\\
&v(x,0)=\varphi(x)-\mu(0)，\\\\
&v(0,t)=0.\\\\
\end{aligned}
\right.
\end{equation} $$

由叠加原理，上述问题可分解为

$$ \begin{equation}
\left\\{
\begin{aligned}
&v_{t}-a^{2} v_{x x}=0，\\\\
&v(x,0)=\varphi(x)-\mu(0)，\\\\
&v(0,t)=0.\\\\
\end{aligned}
\right.
\end{equation} $$

和

$$ \begin{equation}
\left\\{
\begin{aligned}
&v_{t}-a^{2} v_{x x}=f(x,t)-\mu^{\prime}(t)，\\\\
&v(x,0)=0，\\\\
&v(0,t)=0.\\\\
\end{aligned}
\right.
\end{equation} $$

若令$v(x,t)=u(x,t)-\mu(t)x$，则可将Newmann边界齐次化
$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=f(x,t), \quad-\infty \lt x \lt \infty, t>0  \\\\
&u(x,0)=\varphi(x), \quad 0 \le x \lt \infty \\\\
&u_x(0,t)=\mu(t), \quad 0 \le x \lt \infty \\\\
\end{aligned}
\right.
\end{equation} $$

#### 3.2.1 有限区间上的热传导方程与分离变量法
在矩形区域$\Omega = {0 \le x \le l，0 \lt t \le T}$上，考虑
$$u_t-a^{2}u_{xx}=f(x,t)，0 \le x \le l，0 \lt t \le T$$

及初始条件
$$ \left.u\right|_{t=0}=\varphi(x)，0 \le x \le l $$

和边界条件
$$ u(0,t)=\mu_1(t), u(l,t)=\mu_2(t)，0 \le x \le l $$

先考虑第二边值问题
$$ \begin{equation}
\left\\{
\begin{aligned}
&u_{t}-a^{2} u_{x x}=f(x,t), \quad 0 \lt x \lt l, t>0  \\\\
&u(x,0)=\varphi(x), \quad 0 \le x \le l \\\\
&u_x(0,t)=\mu(t), u_x(0,t)=\mu(t) \\\\
\end{aligned}
\right.
\end{equation} $$
寻找$u(x,t)=X(x)T(t)$形式解
$$X(x)T^{\prime}(t)-a^{2}X^{\prime \prime}(x)T(t)=0$$
从而
$$\frac{T^{\prime}(t)}{a^{2}T(t)}=\frac{X^{\prime \prime}(x)}{X(x)}=\lambda$$
有
$$T^{\prime}(t)+a^{2}\lambda X^{\prime \prime}(x)T(t)=0$$
联立
$$ \begin{equation}
\left\\{
\begin{aligned}
&X^{\prime}(x)+a^{2}\lambda X^{\prime \prime}(x)T(t)=0 \\\\
&X^{\prime}(0)=0, X^{\prime}(l)=0 \\\\
\end{aligned}
\right.
\end{equation} $$
情形$1^{\prime}$ $\lambda \lt 0$
$$X(x)=c_1e^{-\sqrt{-\lambda}}+c_2e^{-\sqrt{-\lambda}}，X^{\prime}(x)=\left(-c_1e^{-\sqrt{-\lambda}}+c_2e^{-\sqrt{-\lambda}}\right){-\sqrt{-\lambda}}$$
代入得$$c_1=c_2=0$$

情形$2^{\prime}$ $\lambda = 0$
$$X(x)=c_1+c_2x$$
代入得$c_2 = 0$，$X_0(x) \equiv 1$是上述问题得一个非平凡解

情形$3^{\prime}$ $\lambda \gt 0$
$$X(x)=c_1cos{\sqrt{\lambda}}x+c_2sin{\sqrt{\lambda}}x，X^{\prime}(x)=\left(-c_1sin{\sqrt{\lambda}}x+c_2cos{\sqrt{\lambda}}x\right){\sqrt{\lambda}}$$
代入得$c_2 = 0$，$c_1 = {\sqrt{\lambda}}sin{\sqrt{\lambda}}l = 0$