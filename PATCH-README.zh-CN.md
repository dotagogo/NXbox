# NXbox 简体中文本地化补丁

## 内容

- `README.zh-CN.md`：项目中文主页。
- `docs/guide.zh-CN.md`：中文安装与使用指南。
- `docs/TRANSLATING.zh-CN.md`：中文翻译贡献指南。
- `src/eden_uwp/ui/lang/zh_hans.inc`：Xbox 前端简体中文资源。
- `tools/nxbox-pack/src/i18n/zh_hans.ts`：NxbHelper 简体中文资源。
- 更新两个语言注册表，使系统区域设置 `zh-Hans` 可以选择中文。
- 更新文档入口和翻译测试。

## 如何使用

将 ZIP 中的文件按目录结构覆盖/复制到你下载的 NXbox 源码根目录。建议先备份原始源码，并确认源码版本与本补丁对应。然后在仓库根目录运行：

```sh
cd tests/port
python3 -m unittest test_i18n
```

NxbHelper 还应在 `tools/nxbox-pack` 下运行项目原有的 `bun test` 和 `bun run check`，并重新构建对应平台程序。Xbox 前端需要按项目原有流程重新编译和打包。

## 翻译覆盖说明

Xbox 界面英文资源共有 506 个键；本补丁目前为其中 346 个键提供了简体中文，其余键会按项目已有的回退机制显示英文。NxbHelper 同样保留英文回退。因此，这是可测试的第一版中文化补丁，不应描述为 100% 完整翻译。未翻译的条目可以继续在 `zh_hans.inc` 与 `zh_hans.ts` 中补齐。

## 重要

- 本补丁不包含可安装的 Xbox APPX，也没有在真实 Xbox 上验证中文字体和布局。
- 如果 Xbox 字体不含所需中文字形，仍需为前端配置合适的中文字体并重新编译。
- 本补丁不修改游戏、固件或密钥，也不包含任何此类文件。
