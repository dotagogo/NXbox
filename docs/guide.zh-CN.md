# NXbox 简体中文使用指南

本指南帮助你在 Xbox 开发者模式下安装 NXbox，并准备自己的游戏文件。NXbox 仍处于实验阶段，兼容性和性能不作保证。

## 开始之前

你需要：

- Xbox Series X 或 Series S，并已启用 Developer Mode（开发者模式）。
- 从自己拥有的 Switch 主机合法导出的游戏文件、密钥和（需要时）固件。
- 电脑和网络连接，用于访问 Xbox Device Portal。
- 可选：USB 驱动器。推荐使用 NxbHelper 检查文件并准备驱动器。

NXbox 不提供游戏、密钥或固件。请勿下载或分享你无权分发的受版权保护内容。

## 第一步：下载 NXbox

1. 打开 [NXbox Releases](https://github.com/NspxMiguel/NXbox/releases/latest)。
2. 下载最新的 Xbox 构建。
3. 按项目当前发布说明，通过 Xbox Device Portal 将应用安装到开发者模式主机。
4. 首次启动后，按照屏幕提示完成设置。

## 第二步：准备游戏和密钥

推荐使用 [NxbHelper](../tools/nxbox-pack/README.md)。它可以检查 USB 驱动器中的文件，并提示缺少或无效的内容。

常见文件包括：

- 游戏：`.nsp`、`.xci`；部分工具流程支持 `.nsz`、`.xcz`。
- 主机密钥：`prod.keys`。
- 部分游戏可能需要：`title.keys`。
- 固件：来自你自己的主机的完整固件转储。请按工具提示放置，不要只复制单个零散文件。

若使用手动方式，请参考仓库中的 [NXbox 安装指南](guide.md)、[固件说明](firmware-free.md)和 [NxbHelper 文档](nxbox-pack.md)。不同版本的目录结构可能发生变化，请优先遵循当前版本中的说明。

## 第三步：扫描并启动游戏

1. 将准备好的文件复制到 NXbox 支持的目录，或通过 USB 导入。
2. 启动 NXbox，等待扫描完成。
3. 在游戏库中选择游戏并启动。
4. 如果游戏没有出现，请检查文件扩展名、标题 ID、密钥和存储空间。

## 故障排查

- **游戏不显示：** 确认文件完整、扩展名受支持，并放在正确目录。
- **提示缺少密钥：** 检查 `prod.keys` 是否来自自己的主机、文件是否有效，以及是否放在当前版本要求的位置。
- **提示缺少固件：** 部分系统功能和游戏需要固件；请按 NxbHelper 的提示准备完整转储。
- **黑屏、崩溃或画面异常：** NXbox 仍在开发中，可能属于已知兼容性问题。请查看 [GitHub Issues](https://github.com/NspxMiguel/NXbox/issues)。
- **性能差或频繁卡顿：** 不同游戏与渲染后端表现差异很大；请不要假定所有游戏都能流畅运行。
- **Device Portal 无法连接：** 检查主机与电脑是否在同一网络、远程访问是否开启，以及地址和登录信息是否正确。

报告问题时，请附上 NXbox 版本、游戏版本、操作步骤和日志。不要附上游戏镜像、密钥或个人凭据。

## 更多文档

- [项目主页（英文）](../README.md)
- [NxbHelper 使用说明](../tools/nxbox-pack/README.md)
- [用户指南目录](user/README.md)
- [故障排查](user/Troubleshoot.md)
- [翻译指南](TRANSLATING.md)
