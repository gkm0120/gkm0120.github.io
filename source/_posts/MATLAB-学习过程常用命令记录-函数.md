
---
layout: post
title: MATLAB 学习过程常用命令记录 (函数)
author: 戈孔明
top: false
cover: false
toc: true
mathjax: true
abbrlink: 47321
date: 2021-04-05 10:26:26
tags: matlab函数
categories: MATLAB
---

MATLAB中一些基本函数的用法。
<!--more-->

1. 匿名函数定义

```MATLAB
>> f = @(x)x.^2;
>> fx = f(1:10)

fx =

     1     4     9    16    25    36    49    64    81   100
```

```MATLAB
>> g = @(x,y)x.^2+y.^2;
>> gxy=g(1:10,2:11)
gxy =

     5    13    25    41    61    85   113   145   181   221
```

```MATLAB
>> g = @(a,b)@(x)a*x+b;
>> h = g(2,3);
>> h

h =

    @(x)a*x+b

>> k = h(2)

k =

     7
```
2. 嵌套函数

```MATLAB
function r =MytestFunction(input)
    a = 5;
    c = sin(input)+tan(input);
    function y = nestedfun(b);
        y = a*c+b;
    end
    r = nestedfun(5);
end
```

```MATLAB
>> r = MytestFunction(5)
```

```MATLAB
function r = NestFunction3(a)
b = a+1;
    function x = nest1(m)
        x = m+1;
        function nest2
            n = x+1;
        end
        nest2;
    end
nest1(b);
r = n;
end
```

```MATLAB
>> NestFunction3(5)
```
注：变量作用域范围，嵌套函数访问父函数的变量，可以在函数定义里面直接拿来用，父函数访问访问嵌套函数必须在经过调用之后才能调用.

第二重嵌套函数可以调用不包含它的第一重嵌套函数，即子函数可以求助于叔伯，但第三重函数不能调用它的第二重嵌套函数，非直系关系。

函数关系比喻成父子孙等关系，函数调用比喻成一个人求助一个人，规律如下：

父亲可以求助儿子，儿子可以求助父亲，父子可以互相求助。一个人不能求助孙子，重孙等后代，但可以求助直系祖宗如祖父曾祖父等以及和直系祖宗是亲兄弟的先人。一个人可以求助亲兄弟或者亲叔伯，不能求助侄儿。

3. 求函数零点

```MATLAB
>> f = @(x) exp(x)+x.^2+x.^(sqrt(x))-100;
>> x0 = fzero(f,3)

x0 =

   4.163549956946139
```
fzero 函数为求零点的函数，第二个参数是基准点，即求 3 附近的零点.

```MATLAB
>> x0 = fzero(f,[2,5])

x0 =

   4.163549956946138

>> x0 = fzero(f,[2,3])
Error using fzero (line 274)
The function values at the interval endpoints must differ in sign.
```
另外可以规定区间如上所示。

4. 显式表达 $y$ 关于 $x$ 的隐函数

例如：$(e^y+x^y)^(1/y)-x^2y =0$

则可以用匿名函数表示为:

```MATLAB
>> y = @(x)fzero(@(y)(exp(y)+x^y)^(1/y)-x^2*y,1)

y =

    @(x)fzero(@(y)(exp(y)+x^y)^(1/y)-x^2*y,1)

>> y1 = y(1)

y1 =

    2.7779

>> y2 = y(2)

y2 =

    1.1055
```
在外面嵌套一层 arrayfun 即可向量输入

```MATLAB
>>  y = @(xx)arrayfun(@(x)fzero(@(y)(exp(y)+x^y)^(1/y)-x^2*y,1),xx)

y =

    @(xx)arrayfun(@(x)fzero(@(y)(exp(y)+x^y)^(1/y)-x^2*y,1),xx)

>> y(1:10)

ans =

  Columns 1 through 7

    2.7779    1.1055    0.7759    0.6284    0.5425    0.4856    0.4446

  Columns 8 through 10

    0.4135    0.3889    0.3689
```
例如：对于 $a=[0,0,01,0,02,…,2]$, 求方程 $f (x)=e^x+x^a+x^{\sqrt x} = 100$ 的 $x$ 的值，并画出 $a$ 和 $x$ 的图像

则可以把它理解为一个隐函数关于 $x$ 和 $y$ 变化.

```MATLAB
x = @(a) fzero(@(x) exp(x)+x^a+x^(sqrt(x))-100,4)
h = @(xx)arrayfun(@(a)fzero(@(x)exp(x)+x^a+x^(sqrt(x))-100,4),xx)
a = 0:0.01:2;
plot(a,h(a))
```
或者

```MATLAB
>> f = @(a)@(x)exp(x)+x^a+x^(sqrt(x))-100
f =
    @(a)@(x)exp(x)+x^a+x^(sqrt(x))-100
>> f(a)
ans =
    @(x)exp(x)+x^a+x^(sqrt(x))-100
>> aa = 0:0.01:2;
>> plot(aa,arrayfun(@(a)fzero(f(a),4),aa))
```

5. 创建符号对象

```MATLAB
>> a = sym('5');
>> b = sym('b');
>> syms c d e;
>> whos
  Name      Size            Bytes  Class    Attributes

  a         1x1               112  sym
  b         1x1               112  sym
  c         1x1               112  sym
  d         1x1               112  sym
  e         1x1               112  sym
```
6. 常用函数

vpa 指定有效数字位数显示符号数值对象，如

```MATLAB
>> vpa(pi,30)
```
求极限和导数和级数：

```MATLAB
limit(f,v,a)  %求极限lim v->a f(v)
limit(f,v,a,'right') %求右极限
limit(f,v,a,'left') %求左极限
diff(f,v,n) %求f(v)的n阶导数
taylor(f,n,v,a) %求f(v)在v=a处展开到n次的泰勒级数
```
例子：

求极限 $\mathop{lim}\limits_{n\rightarrow \infty} \frac{n^{n+\frac{1}{2}}}{e^n \times n!}$

```MATLAB
>> syms n
>> limit(n^(n+1/2)/exp(n)*gamma(n+1),n,inf)

ans =

Inf
```

```MATLAB
intf = int(f,v)   %求以v为自变量的函数f的不定积分
intf = int(f,v,a,b) %求以v为自变量的函数f从a到b的定积分
```
求三重积分：

```MATLAB
>> syms x y z
>> result  = int(int(int((x+y)/z,z,x*y,2*x*y),y,x,2*x),1,2)

result =

(35*log(2))/6
```
