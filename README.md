# grafana-panel-radar
为Grafana设计开发的Panel雷达图插件。

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/grafana-panel-radar/issues)，欢迎参与维护！

- 插件开发文档： https://grafana.com/tutorials/build-a-panel-plugin/

## How to use?

首先，你需要安装必要的包：

```
npm install
```

然后，运行打包命令：

```
npm run dev
```

你会看见在目录下存在一个dist文件，你应该在你的Grafana的插件位置新建一个文件夹```grafana-panel-radar```，具体的位置就是：

```js
// 具体的取决于你的配置文件，下面这是默认配置路径
@grafana/data/plugins
```

然后，把打包后的dist文件放进去，重新启动```Grafana```即可。

如果是用于生产环境，打包命令应该替换成：

```
npm run build
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/grafana-panel-radar/blob/master/LICENSE)

Copyright (c) 2022 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
