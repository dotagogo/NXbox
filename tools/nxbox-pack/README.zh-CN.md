# NxbHelper（简体中文）

NxbHelper 可用于准备 USB 驱动器，或通过 Device Portal 将你自己拥有的游戏发送到已安装 NXbox 的 Xbox。它也可以为每款游戏安装一个独立的 NXbox UWP 应用。每个独立应用拥有自己的身份、名称、磁贴以及私有存档、密钥和内容目录。配置完成后，可直接从 Xbox Dev Home 启动对应游戏，无需先打开 NXbox 游戏库。该工具打包的是模拟器运行时，并不会重新编译游戏。

## 下载

请在 GitHub Actions 的 **Build NxbHelper** 工作流产物中下载对应版本：

| 文件 | 系统 |
| --- | --- |
| `nxbhelper-windows-x64.exe` | Windows x64 |
| `nxbhelper-macos-arm64` | Apple Silicon macOS |
| `nxbhelper-linux-x64` | 使用 glibc 的 Linux x64 |

在 macOS/Linux 上，启动前运行 `chmod +x nxbhelper-*`，然后在终端中运行程序。对于未压缩的 NSP/XCI 文件，通常不需要 Bun、Windows SDK、MakeAppx、SignTool、OpenSSL、签名证书或重新构建模拟器。

## 使用方法

1. 在 Xbox 的 **Dev Home > Remote Access** 中启用开发者模式和 Device Portal 身份验证。
2. 确认主机已安装 `Microsoft.VCLibs.140.00`（x64，版本 14.0.30704.0 或更新版本）。
3. 在终端启动 NxbHelper。若 Device Portal 使用自签名 TLS 证书，通常需要传入 `--insecure-portal`；此参数只对所选连接生效。只有在可信的本地网络中才应接受未经验证的证书。
4. 按屏幕提示选择 USB 驱动器、传输游戏，或将游戏安装为独立应用。

### 将游戏安装为独立应用

1. 拖入一个游戏文件并按 Enter。
2. 拖入 `prod.keys` 并按 Enter。
3. 可按提示逐个添加更新/DLC；没有其他文件时直接按 Enter。
4. 确认根据文件名识别出的游戏名称和标题 ID。如果文件名中没有明确的基础游戏 ID（例如 `[01007EF00011E000]`），请手动输入。当前工具尚未实现 Control NCA 元数据提取，因此会明确提示使用文件名回退方案和通用 NXbox 磁贴图。
5. 确认自动发现的 Xbox 地址，或输入 Dev Home 显示的地址。
6. 输入 Device Portal 凭据；密码输入时不会显示。你可以选择使用操作系统安全存储。
7. 安装和上传完成后，在 Dev Home 中将该游戏应用的类型设置为 **Game**，然后打开它的磁贴。应用注册和启动仍需在真实 Xbox Series 主机上验证。

## 语言

NxbHelper 支持英文、巴西葡萄牙语和简体中文，并根据系统区域设置自动选择。环境变量 `LC_ALL`、`LC_MESSAGES` 和 `LANG` 优先于系统区域设置。可设置 `NXBOX_PACK_LANG=zh-Hans` 强制使用简体中文进行测试；也可以使用 `en` 或 `pt`。

## 安全与凭据

除非你选择保存凭据，否则凭据只保留在当前进程内存中。macOS 使用 Keychain，Linux 使用 Secret Service；Windows 会尝试使用 PasswordVault，并在不可用时回退到当前用户的 DPAPI 加密记录。若安全存储失败，工具会提示凭据只在本次会话中保存。

NxbHelper 不会下载游戏或密钥。请只使用你有权使用、并从自己拥有的主机导出的文件。更多细节请参阅 [英文文档](README.md) 和 [NXbox 中文指南](../../docs/guide.zh-CN.md)。
