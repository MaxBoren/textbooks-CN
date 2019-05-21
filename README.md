# Mathigon Textbooks - 中文版

This is the Translation Project of [Mathigon](https://github.com/mathigon/textbooks).Here is the Link of Official Hompage [mathigon.org](https://mathigon.org)

![](https://mathigon.org/images/hero.png)

欢迎来到 [Mathigon](https://mathigon.org)! 这个项目包含所有交互课程的源代码和资源。

Mathigon 是屡获殊荣适用12-18岁学生的新型数学教育平台。其中课程和虚拟教师使用了先进的技术
和创新的课程设计，使学习数学更加有趣，更具交互性。

![](https://mathigon.org/images/unused/divider-1.png)


## Getting Started

在fork和clone后，使用`npm install`安装依赖。

创建本地开发环境请使用 `npm start`.等待启动后打开 [localhost:5000](http://localhost:5000).
该项目支持热加载。

所有的课程均位于[content](content)目录下的子文件夹。 例如概率课程(probability)，文件目录为：
[Probability course](content/probability)， 则您可以从本地通过
[localhost:5000/course/probability](http://localhost:5000/course/probability)打开。

![](https://mathigon.org/images/unused/divider-2.png)


## Course Structure

所有的课程由以下组件构成：

* `content.md` 包含课程的，源代码和元数据。文档请参照[custom extension](https://mathigon.io/markdown),
  Markdown文档请参照[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)。  
* `functions.js` 包含本课程专用的Javascript代码。
* `styles.less` 包含本课程专用的样式，使用了[LESS](http://lesscss.org/)。
* `hints.yaml` (可选) 包含Mathigon虚拟教师发送的通知消息。
* `concepts.yaml` (可选) 包含Mathigon本课程的内部知识树。

[shared directory](content/shared)文件夹包含了多个课程共享的文档，多语言以及资源。

每个课程都被分为多个步骤，每个步骤都有一个唯一ID。这些ID会在每个部分开始时作为`functions.js`中的函数识别并设置使用。

[server directory](server) 目录是一个简单的Mathigon web服务器，它被用来进行本地测试，但不应该经常被改动。

![](https://mathigon.org/images/unused/divider-3.png)


## Contributing

We welcome any contributions to Mathigon – from bug fixes and correcting typos
to creating entirely new courses. If you find any errors or problems, please
[file an issue](https://github.com/mathigon/textbooks/issues). For larger
changes, please [contact us](mailto:dev@mathigon.org) before starting your work.

Before submitting a pull request, you will need to sign the [Mathigon Individual
Contributor License Agreement](https://gist.github.com/plegner/5ad5b7be2948a4ad073c50b15ac01d39).

You can find out more on [Mathigon.io](https://mathigon.io).

![](https://mathigon.org/images/unused/divider-4.png)

---

© Mathigon 2016–2019, All rights reserved
