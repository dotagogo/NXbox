<!--
SPDX-FileCopyrightText: Copyright 2025 Eden Emulator Project
SPDX-FileCopyrightText: 2018 yuzu Emulator Project
SPDX-License-Identifier: GPL-3.0-or-later
-->

<p align="center">
  <img src="docs/assets/nxbox-banner.png" alt="NXbox：在 Xbox Series X 上模拟 Switch" width="100%">
</p>

<h1 align="center">NXbox</h1>

<p align="center">
  <b>可在 Xbox Series X 上原生运行的 Nintendo Switch 模拟器。</b><br>
  NXbox 将 <a href="https://git.eden-emu.dev/eden-emu/eden">Eden</a> 移植到 Xbox UWP 沙盒环境：通过 JIT 执行 Switch 的 ARM64 代码，并使用为主机编写的原生 Direct3D 12 渲染器处理图形；同时保留基于 Mesa 的 OpenGL 路径作为备用方案。<br>
  <a href="https://github.com/NspxMiguel/NXbox/releases/latest"><b>下载最新版本</b></a> ·
  <a href="https://discord.gg/2SxEDzVyJM"><b>加入 Discord 社区</b></a>
</p>

> [!IMPORTANT]
> **项目状态请以仓库当前英文 README 和 Releases 页面为准。** 模拟器仍处于实验阶段，不保证任何游戏没有错误或能够完整游玩。不同版本、渲染后端和游戏版本的兼容性可能不同。

<p align="center">
  <a href="#项目功能">项目功能</a> ·
  <a href="#当前状态">当前状态</a> ·
  <a href="#运行要求">运行要求</a> ·
  <a href="#使用教程">使用教程</a> ·
  <a href="#开发与翻译">开发与翻译</a>
</p>

## 项目功能

Eden 是模拟器核心；NXbox 则提供让它在 Xbox 上使用所需的前端、控制器交互和平台适配。

- **主机风格游戏库**：显示游戏封面，提供首次启动设置和每个游戏独立的配置。
- **针对 Xbox 手柄设计**：界面使用 Xbox 按钮提示，并可选择 A 或 B 作为确认键。
- **模组与金手指**：提供 GameBanana 模组安装入口及社区金手指数据库功能；具体可用性以当前版本为准。
- **角色功能**：内置 Moru 角色创建器，并可使用系统固件中的 Mii 创建器。
- **着色器缓存共享**：支持在局域网内共享缓存，减少其他主机重复编译。
- **NxbHelper 辅助工具**：检查并准备 USB 驱动器中的游戏、固件和密钥，也可通过 Device Portal 向 Xbox 发送文件。支持 Windows、macOS 和 Linux。
- **版本更新**：可从项目 Releases 页面获取更新；应用内更新功能取决于构建版本。

## 当前状态

NXbox 是实验性开源项目。模拟器可以启动部分游戏并进入实际游戏场景，但渲染错误、性能问题、卡顿、音频或兼容性缺陷可能仍然存在。请在使用前查看：

- [最新发布版本](https://github.com/NspxMiguel/NXbox/releases)
- [兼容性与问题追踪](https://github.com/NspxMiguel/NXbox/issues)
- [NXbox Discord 社区](https://discord.gg/2SxEDzVyJM)
- [Direct3D 12 后端技术说明](docs/d3d12-backend.md)
- [Xbox 移植技术记录](docs/nxbox-port.md)

性能和兼容性会受到 Xbox 型号、开发者模式内存预算、渲染后端、游戏版本以及模拟器构建版本影响。单纯能够启动游戏，并不代表游戏已达到稳定、完整可玩的状态。

## 运行要求

- Xbox Series X 或 Series S，并启用 **Developer Mode（开发者模式）**。
- 通过合法方式从自己拥有的主机导出的游戏文件、固件和密钥。
- 用于安装、传输文件和查看日志的 Xbox Device Portal。
- 如需使用 NxbHelper，请准备 Windows、macOS 或 Linux 电脑，以及 USB 驱动器或网络连接。

**NXbox 不附带游戏、固件或密钥。** 请只使用你有权使用、并从自己拥有的设备导出的文件。不要向他人索取或分发受版权保护的游戏文件或密钥。

## 使用教程

### 1. 下载并安装 NXbox

前往 [Releases 发布页面](https://github.com/NspxMiguel/NXbox/releases/latest)，下载适用于 Xbox 的签名构建，并按照项目提供的安装说明通过开发者模式安装。

### 2. 准备游戏、密钥和固件

推荐使用 [NxbHelper](tools/nxbox-pack/README.md) 检查 USB 驱动器内容并准备文件。工具会提示文件缺失、格式错误或存储空间不足等问题。也可以按照项目文档，通过 Device Portal 手动复制文件。

- 游戏文件常见格式：`.nsp`、`.xci`；部分流程也支持 `.nsz`、`.xcz`。
- 主机密钥文件通常为 `prod.keys`；部分游戏或内容可能还需要 `title.keys`。
- 固件应来自你自己的主机转储。不同游戏和系统功能对固件的需求不同。

### 3. 在 Xbox 上启动

打开 NXbox，等待扫描游戏库。若游戏或密钥未显示，请查看应用内提示，并参考[故障排查文档](docs/user/Troubleshoot.md)和[安装指南](docs/guide.md)。

### 4. 调整设置与报告问题

如果游戏出现黑屏、崩溃、图形错误或性能问题，请先尝试项目支持的其他渲染后端（如果当前构建提供），然后查看日志。提交问题时请说明 Xbox 型号、NXbox 版本、游戏版本、渲染后端、复现步骤，并附上相关日志；不要上传游戏文件或密钥。

## 项目目录

| 路径 | 说明 |
| --- | --- |
| `src/eden_uwp/` | Xbox 前端：启动游戏、窗口和控制器管理 |
| `src/video_core/renderer_d3d12/` | 原生 Direct3D 12 图形后端 |
| `src/shader_recompiler/backend/hlsl/` | 将着色器转换为 HLSL 的后端 |
| `tools/nxbox/patch_mesa_uwp.py` | Mesa UWP 补丁工具 |
| `tools/nxbox-pack/` | NxbHelper 辅助工具 |
| `tools/shader-share/` | 局域网着色器缓存共享工具 |
| `docs/` | 用户指南、开发文档和移植记录 |

## 开发与翻译

- [开发环境与构建指南](docs/Development.md)
- [构建说明](docs/Build.md)
- [维护文档索引](docs/MAINTENANCE.md)
- [翻译贡献指南（简体中文）](docs/TRANSLATING.zh-CN.md)
- [翻译贡献指南（英文）](docs/TRANSLATING.md)

本补丁增加简体中文语言资源。未翻译的界面条目会按项目原有机制回退为英文；欢迎继续完善翻译并提交 Pull Request。

## 鸣谢与许可

NXbox 基于 [Eden](https://git.eden-emu.dev/eden-emu/eden) 开发，并使用多个开源项目及第三方库。请查看仓库中的 `NOTICE.md`、`LICENSE.txt` 和各依赖项目的许可文件，了解完整版权与许可信息。

NXbox 使用 GPL-3.0-or-later 许可证，具体以仓库许可证文件为准。
