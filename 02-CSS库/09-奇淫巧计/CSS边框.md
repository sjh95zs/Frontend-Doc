# 边框

## 圆形

> 我们通常会设置 border-radius 的值为宽高的一半，或者直接设置 50%的百分比来制作圆形

```
<div class="circle"></div>

.circle {
    width: 100px;
    height: 100px;
    background-color: #FFB5BF;
    border-radius: 50%;      /* 或者 50px */
}
```

![404](images/圆形.png)

## 阴影

> 动画演示：https://www.html.cn/tool/css3Preview/Box-Shadow.html
>
> box-shadow 可以添加一个或多个阴影，添加多个阴影需要用逗号隔开。每个阴影由下面几个属性构成

```
.box {
    box-shadow: h-shadow v-shadow blur spread color inset;
}
```

- h-shadow：必需，表示水平阴影的位置，正值阴影向右，负值向左
- v-shadow：必需，表示垂直阴影的位置，正值阴影向下，负值向上
- blur：可选，代表模糊半径
- spread：可选，阴影的尺寸
- color：可选，阴影的颜色
- inset：可选，使用该值可以将外部阴影（outset）转换成内部阴影

  ![404](images/阴影.png)
