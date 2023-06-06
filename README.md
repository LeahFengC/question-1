fork 项目，实现完成之后把项目地址 发送到邮箱 `liuchengzheng@xiaoao.cloud ` 附上简历

#### 1.  叶子节点下拉框

业务背景: 在一个【用户画像】的需求中有级联选择器供使用者选择对应的画像标签。
![Image](https://github.com/wAIwAIqaq/md-img/blob/master/%E5%9B%BE%E7%89%871.png?raw=true)

且在弹窗中需要提供一个下拉框,进行图表维度的选择,可供选择的维度也就是画像标签的叶子节点。
现在接口只给出画像三级分类的category.json(使用src下的mock进行模拟，默认已经拿到json体,不考虑异步场景)

现在要求实现画像标签的叶子节点下拉框`el-select`。
![Image](https://github.com/wAIwAIqaq/md-img/blob/master/%E5%9B%BE%E7%89%872.png?raw=true)

ElementUI 级联选择器

https://element.eleme.io/#/zh-CN/component/cascader

JSON: category.json

目标:把树状json的叶子，平铺为一维，并使用el-select展示

#### 2.五角星

使用HTML,CSS,CANVAS等 画出下面的三角型
已提供div `.pentagram`,不局限于使用`H5C3`
![Image](https://github.com/wAIwAIqaq/md-img/blob/master/%E5%9B%BE%E7%89%873.png?raw=true)