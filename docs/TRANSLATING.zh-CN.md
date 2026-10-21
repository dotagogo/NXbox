# NXbox 翻译贡献指南

NXbox 的 Xbox 主机界面和 NxbHelper 辅助工具使用独立的语言资源文件。简体中文语言标记为 `zh-Hans`。

## Xbox 主机界面

- 中文界面文件：`src/eden_uwp/ui/lang/zh_hans.inc`
- 注册表：`src/eden_uwp/ui/lang/registry.inc`
- 翻译表：`src/eden_uwp/ui/translation_tables.h`

翻译时必须保留 `Text::` 键名、`L` 前缀、字符串占位符（例如 `%s`、`{name}`）、转义序列和控制器按钮名称。电视界面文字应尽量简短。未翻译的键可以省略，运行时会回退到英文。

## NxbHelper 辅助工具

- 中文资源：`tools/nxbox-pack/src/i18n/zh_hans.ts`
- 语言注册：`tools/nxbox-pack/src/i18n/registry.ts`

必须保留 TypeScript 对象中的键名、占位符、文件扩展名、命令行参数和路径。NxbHelper 根据系统区域设置自动选择语言，也可以通过 `NXBOX_PACK_LANG=zh-Hans` 强制指定语言。

## 测试

在仓库根目录运行：

```sh
cd tests/port
python3 -m unittest test_i18n
```

检查 NxbHelper 时：

```sh
cd tools/nxbox-pack
bun install --frozen-lockfile
bun test
bun run check
```

新增翻译时应检查占位符是否与英文版本完全一致。不要翻译内部键名、路径、命令参数或协议字段。
