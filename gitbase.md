# 安装

查看版本号 git --version

# 初始化配置

- 用户名称：sgit config --global user.name "yushumin"
- 电子邮箱地址：git config --global user.email 1914274610@qq.com
- 检查已有的配置信息： git config --list
  --global 表示这台机器上的所有仓库都会使用这个配置

## git 仓库

- 输入 git init 会出现一个.git 文件夹，这个就是 git 仓库
- hooks：目录包含客户端或服务端的钩子脚本
  info：包含一个全局的排除文件
  objects：目录参数所有的数据内容
  refs：目录存储指向数据（分支）的提交对象的指针
  config：文件包含项目特有的配置选项
  description:用来显示对仓库的描述信息
  HEAD：文件指示目前被检出的分支
  logs:保存日志信息
  index：文件保存暂存区信息

## 基础的 linux 命令

clear：清除屏幕
echo:在控制台打印信息或者创建文件 echo "content" > test.txt
ll:将当前目录下的子文件&子目录平摊在控制台
find 目录名：将对应目录下的子孙文件&子孙目录平铺在控制台
find 目录名 -type f:将对应目录下的文件平铺在控制台
rm 文件名：删除文件
mv 原文件 重命名文件：重命名
cat 文件的 url:查看对应文件的内容

- vim 文件的 url:需要在英文状态下按键
  按 i 键进入插入模式，进行文件的编辑
  按 esc 键&按:键，进行命令的执行 q!强制退出，不保存 wq 保存退出 set nu 设置行号
  vv 复制 p 粘贴 dd 删除整行

# 新建版本

1. git init 初始化本地库
2. echo "内容" > test.txt 创建一个新文件
3. git add test.txt 把文件存到暂存区
   git rm --cached test.txt 把暂存区的文件删掉，工作区的文件还在
4. git commit -m "日志信息" test.txt 提交到本地库 ,会有一个七位数的版本号
   git reflog 查看版本信息，含 7 位版本号
   git log 详细信息，包含用户签名，时间，完整的版本号
5. git status 查看文件的状态
   On branch master 当前分支为 master
   No commits yet 还没有提交本地库
   nothing to commit ，working tree clean 没有需要提交的文件
   绿色字需要提交本地库，红色字需要提交暂存区

# 版本迭代
1. vim test.txt 修改文件内容
   使用 vim 编辑文件时，超时退出终端，或者没有退出直接关闭终端，造成异常退出的场景，再次编辑时会报错
   先使用 ll -a 检查多出来的临时文件，再使用【rm 文件名】命令删除
   cat test.txt 查看文件内容
2. * git add test.txt 再次把文件存到暂存区 
   * git add . 是把所有文件都存到暂存区
3. * git commit -m "日志信息" test.txt ：再次提交到本地库
   * git commit -m "日志信息"  ：把所有文件提交到本地库
   tail -n test.txt 查看文件末尾的第一行
4. git diff 文件名：查看指定文件的修改情况

# 版本穿梭
1. git reset --hard 7位版本号 ：穿越到指定的版本
   改变指针的指向，指向不同的版本 head->master->版本之间切换
2. git reset --hard HEAD^:回退到上一个版本
3. git diff HEAD--文件名：查看指定文件工作区和版本库里最新版本的区别
4. git checkout--文件名：用版本库的版本代替工作区的版本，无论是修改还是删除
5. git reset HEAD 文件名：将已经添加到暂存区的指定文件撤销，使其回退到工作区
6. git rm 文件名：将文件从暂存区和工作区中删除
如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项 -f。 git rm --f 文件名
如果想把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除，使用 --cached 选项即可：git rm --cached 文件名
7. git stash list :查看暂存的工作区列表



# git 分支操作

分支的底层是指针的引用
同时并行推进多个功能开发，提高开发效率，互不影响

1. git branch 分支名： 新建分支
2. git checkout 分支名：切换分支 (或者是git switch 分支名)
   git checkout -b 分支名：新建分支并切换到该分支(或者是git switch -c 分支名)
3. git branch -v ：查看分支
4. git merge 指定的分支名：把指定的分支合并到当前的分支上，要切换到当前的分支上
5. 冲突合并 ：合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改，Git 无法替代我们决定使用哪一个，必须人为决定使用哪一个 CONFLICT
- vim 人为修改，
- git add test.txt，
- git commit -m "日志信息",此时 git commit 不加文件名
6. git branch -d 分支名：删除分支

# 团队协作

push 推送到代码托管中心【远程库】
内部：
clone 克隆到自己的本地库
pull 拉取
外部：
fork 叉子-clone-push-Pull request
审核-merge Pull request-pull

## 创建远程库

团队的同事 A 在 GitHub 上创建了一个远程数据库： 右上角加号 new
https://github.com/4274610/Git-.git

- 同事 A 把自己的代码推送到 GitHub 上的步骤：

1. * 首先得有一个远程库
   * 和远程库关联：git remote add 别名 远程地址
   * 把自己的代码add 和commit 到本地库
   * 推送代码到远程库：git push 别名 分支
   （忘记别名可以通过 git remote -v 查看别名）

- 如果出现 403 报错，是由于这台计算机以前的用户使用过 github,所以需要再凭据管理器，window 凭据删除之前的用户的 github 信息
  推送成功后，会跳出来 github 登录页面，此时 git 上显示 100%，返回 GitHub 的页面刷新

2. git pull 别名 分支：如果在 GitHub 上直接修改了代码，那么需要拉取远程库的代码同步到自己的代码上，会自动保存到本地库，不需要自己保存到暂存区和本地库

- 团队内的另一个同事 B 克隆代码：

1. git clone https://github.com/4274610/Git-.git 不需要登录账号，不会弹出登录框
   克隆好后用 cd 命令进入到文件夹下，查看分支，别名自动取为 origin
2. 同事 B 需要加入到团队中,在同事 A 的 settings-Collaborators 合作者-邀请同事 B-复制 Pending Invite 发给同事 B
   同事 B 要对代码进行修改，vim 后要 add 和 commit 到本地库，再 push 到远程库

- 跨团队协作

1. 在 github 上搜索账户名+项目名，或者打开发来的链接
2. 打开后，在右上角点 fork，叉一份
3. 可以在线编辑，也可以 clone 一份到自己的本地库
4. Pull request 给别人
5. 别人可以 merge Pull request，把修改后的代码合并到自己的代码上

## SSH 免密登录

1. ssh-keygen -t rsa -C 1914274610@qq.com 回车键三次
2. 检查在用户文件夹下是否有这两个文件 id_rsa.pub 公钥 id_rsa 私钥
3. 通过 cd 指令进入.ssh 文件夹,cat id_rsa.pub拿到公钥
4. 在 github 上 setting 里添加公钥，pull 代码和 push 代码就可以用 ssh 免密登录了
5. ssh -T git@gitee.com测试公钥是否在码云上配置

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDjydHsTpdIs4uYd/iOlq3SpPxkwWwJViqfPzR/WtCNVCd7DVL+3cj8jiiP39Ds0h9qV6gKmCF3NUBKcUbUyZFh4s4kw+ZDNYJC/yeaZlaWdAQYUI5YbxBnaNtX2ZIfhJAa73ygfILqvIB/KyM0LB/Hzj8POzxlN/02x65GZ5mjyVSJNRE3In4VGiopp7hHeomooxEJt92UajZLX4IslXptngGOHOzZrjXhbXHOkNdgrd6PBV+kIthw9gpocLbzXJR3x7y62ovMKMA6ZuYxjLE/SJLhpGL/7nP5zsDbWi1R3LIvlwlqrEDL+AadaEt5jBTQRvAUlcJU8JF0zHhYpgar9mhZRl/y0QLPsqNcBkyTxsxW4jJnBCG24sMH8E6qWAX+0oToHU7mglrHsFBfndUemZsGgF1MaT8AqxTHQPb6g0Cks0Rt9FoAM1zr/fOmzpeDUHEpVk3BATz0G+M9/VrRAXpPvKP/cGFVnLZNzH7na6UXmw12U8ksQTEf/M0Efuk= 1914274610@qq.com




## 区域

1. 工作区：本地代码
2. 暂存区
3. 版本库

## 对象

1. Git 对象 key:value 组成的键值对（key 是 value 的 hash），Git 对象是一个 blob 类型

- 向数据库写入内容，并返回对应键值 命令：echo "test content" | hash-object -w --stdin
  -w hash-object 命令存储数据对象，如果不写-w，该命令不会存储到文件中，只会返回对应的键值
  --stdin 该命令从标准输入读取内容，如果不写-stdin，则需在命令尾部给出待存储文件的路径

- git hash-object -w 文件路径 //把文件存 git 仓库里
  git hash-object 文件路径 //返回对应文件的哈希值
- 根据哈希值获取文件内容 ：git cat-file -p 哈希值
  根据哈希值获取文件类型： git cat-file -t 哈希值

### 对一个文件进行简单的版本控制

- 创建一个新文件并向里面写入内容并存入数据库
  echo "test.txt v1" > test.txt //写内容
  git hash-object -w ./test.txt //存仓库，得到哈希值
- 更新文件内容并再次存入仓库
  vim 文件的 url
  git hash-object -w ./test.txt //存仓库，得到哈希值
- 查看文件
  find .git/objects/ -type f
  git cat-file -p 哈希值

2. 树对象 tree 类型，一次项目版本的快照
   数对象能解决文件名保存问题，也允许我们将多个文件组织到一起

- 利用 update-index 命令为 test.txt 文件的首个版本创建一个暂存区，并通过 git write-tree 命令生成树对象放到版本库里
  git update-index --add --cacheinfo 100644 560a3d89bf36ea10794402f6664740c284d4ae3b test.txt
  git write-tree
- 新增一个文件 newtest.txt,将 newtest.txt 作为 test.txt 文件的第二个版本放入暂存区，并通过 git write-tree 命令生成树对象放到版本库里
  echo "newtest" > newtest.txt
  git update-index --add --cacheinfo 100644 新的哈希值 newtest.txt
  git write-tree

* git ls-files -s 查看暂存区

3. 提交对象 commit 类型，对树对象的封装，链式的
   echo "first commit" | git commit-tree 树对象的哈希值
   echo "first commit" | git commit-tree -p 上一个树对象的哈希值
   commit-tree

