// 告诉执行环境用node来执行
#!/usr/bin/env node

// 添加命令的库
const program = require('commander')

// 拿到package.json 里的版本号
const packageJson = require('../package.json')
const init = require('../lib/init')

//  执行  vea-cli -V 会输出版本号
program.version(packageJson.version)

// 添加init命令,简写是i, <name> 是参数  action回调里可以拿到
program
  .command('init <name>')
  .alias('i')
  .description('vue admin 项目初始化工具')
  .action(name => {
    init(name)
  })

// 解析命令行参数
program.parse(process.argv)


