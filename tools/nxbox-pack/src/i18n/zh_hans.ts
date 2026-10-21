// SPDX-FileCopyrightText: Copyright 2026 NSPX
// SPDX-License-Identifier: GPL-3.0-or-later
// 简体中文翻译。未覆盖的条目将回退到英文。

import type { Translation } from "./registry";

export default {
  transferDone: "文件已发送。请在 Xbox 上打开 NXbox，导入固件并开始游玩。",
  driveProd: "主机密钥",
  driveTitle: "标题密钥",
  driveFirmware: "固件",
  driveGames: "找到游戏：{count}",
  driveLayout: "游戏不在游戏库目录中：{path}",
  driveFound: "位置：{path}",
  driveKeysFix: "请将有效的 prod.keys（包含 32 字节的 header_key）复制到 NXbox/ 或驱动器根目录。",
  driveTitleMissing:
    "可选；仅部分游戏需要。请将 title.keys 复制到 NXbox/ 或驱动器根目录。",
  driveTitleInvalid: "请将有效的 title.keys 复制到 NXbox/ 或驱动器根目录。",
  driveFirmwareOk: "版本 {version}，共 {count} 个文件",
  driveFirmwareMissing: "请将完整的固件转储复制到 NXbox/firmware/。",
  driveUnpack: "NxbHelper 可以解包。请选择“修复”。",
  driveOldKeys: "密钥版本早于固件。请从已更新的 Switch 重新导出密钥。",
  driveFirmwareCopy: "请重新复制完整的固件转储。",
  driveChunksMove:
    "These NCA chunk folders sit where NxbHelper writes the finished files. Move the whole firmware dump to firmware/ at the drive root, then choose Fix it.",
  driveNandMany:
    "Could not pick one NAND backup: more than one was found, or its parts (00, 01, …) are incomplete. Keep a single emuMMC folder with all its parts.",
  driveRename: "请将文件扩展名改为小写，以便 Xbox 列出该文件。",
  driveConvert: "复制前请将 .xcz 转换为 .xci；Xbox 无法列出 .xcz 文件。",
  driveTruncated: "游戏文件不完整。请完成下载或重新复制完整的转储文件。",
  driveNoId: "文件名中没有标题 ID。请添加 [0100…] 格式的游戏标题 ID。",
  driveMove: "请将游戏移至驱动器根目录下的 games/ 或 NXbox/games/。",
  driveNoGames:
    "驱动器中尚无游戏。请放入 NXbox/games/（也支持根目录下的 games/）。",
  driveReady: "已准备好连接 Xbox",
  driveNotReady: "连接 Xbox 前，请先修复失败项目。",
  driveConflict:
    "存在同名的其他文件。请重命名或选择其他目标；未复制任何文件。",
  driveSpace: "可用空间不足。请释放空间或更换驱动器。",
  consoleFull:
    "Xbox 内部存储已满。请在 NXbox 中删除不再使用的游戏，或使用 USB 驱动器作为外部存储。",
  consoleFullSpace:
    "Xbox 内部存储已满：还需要 {size} 空间。请删除不再使用的游戏，或使用 USB 驱动器作为外部存储。",
  nxboxMissing:
    "尚未安装 NXbox。请先从 https://github.com/NspxMiguel/NXbox/releases/latest 安装 NXbox。",
  xboxSpaceWarning:
    "无法获取主机剩余空间。请先打开一次 NXbox，让它报告剩余空间。",
  driveUsage:
    "nxbhelper --check-drive <path> [--fix]\nnxbhelper --to-drive <path> <files…> --keys <prod.keys> [--title-keys <title.keys>] [--firmware <path>]\nnxbhelper --to-xbox [--host <host>] <files…> --keys <prod.keys> [--title-keys <title.keys>] [--firmware <path>]",
  wayChoice:
    "1 — 使用 USB 驱动器（推荐）\n2 — 通过 Device Portal\n3 — 将游戏安装为独立应用\n请选择方式",
  drivePath: "USB 驱动器文件夹",
  gamePaths: "游戏路径（可重复添加；留空结束）",

  profileUsage:
    "Usage: nxbhelper profile multi on|off, or nxbhelper profile avatar <name> <image> | --character <id> --color <name> [--insecure-portal]",
  profilePackage: "应用完整包名称（选择要编辑账户的应用）",
  profileMissing:
    "未找到配置文件、名称重复或配置数据无效。请先打开一次 NXbox 创建配置文件。",
  profileClose:
    "继续前，请先关闭主机上选定的 NXbox 应用。关闭后按 Enter。",
  profileDone: "配置文件已更新。请重新打开选定的 NXbox 应用。",
  avatarInvalid:
    "请选择有效的 PNG、JPEG、WebP、GIF 或 BMP 图片（最大 20 MB）。浏览器必须在两分钟内完成处理。",
  avatarBrowser: "Converting in your local browser. If it did not open, open this URL on this PC:",
  avatarConverting: "正在准备 NXbox 头像……",
  avatarConverted: "图片已准备好。请返回 NxbHelper；现在可以关闭此标签页。",

  guide: "将游戏文件拖入此窗口并按 Enter（支持：.nsp、.xci、.nsz、.xcz）",
  legal: "你必须拥有该游戏，并自行导出密钥。NxbHelper 不会下载游戏或密钥。",
  keys: "将 prod.keys 拖入此窗口并按 Enter",
  extra: "拖入更新/DLC 文件，或按 Enter 继续（每次一个文件）",
  host: "Xbox 地址（Dev Home > Remote Access）",
  found: "找到的 Xbox 设备",
  user: "Device Portal 用户名",
  password: "Device Portal 密码（隐藏）",
  saved: "是否使用操作系统安全存储中的凭据？[Y/n]",
  remember: "是否将凭据保存到操作系统安全存储？[y/N]",
  secureUnavailable: "安全存储不可用；凭据仅在本次会话中保留。",
  fallback:
    "Control NCA metadata extraction is not implemented. Using the filename title ID/name and a generic NXbox icon.",
  title: "基础游戏标题 ID（16 位十六进制，以 0100 开头）",
  name: "游戏显示名称",
  runtime: "正在下载并验证 NXbox 运行时……",
  install: "正在注册独立游戏应用……",
  gameDestination: "{file} → {folder}",
  upload: "正在上传到此应用的私有 LocalState……",
  done: "已就绪。请在 Xbox Dev Home 中打开该游戏磁贴；将应用类型设为 Game 才能使用完整内存。",
  failed: "NxbHelper 运行失败",
  file: "请选择一个存在且非空的 .nsp、.xci、.nsz 或 .xcz 文件。",
  keyFile: "请选择名为 prod.keys、存在且非空的文件。",
  titleInvalid:
    "基础游戏标题 ID 必须为 16 位十六进制，以 0100 开头并以 000 结尾。",
  nameInvalid: "请输入 1–64 个字符的游戏名称，且不能包含控制字符。",
  compressed:
    "NSZ/XCZ 需要 PATH 中的可选 nsz 解压工具（nsz -D）。请安装它，或提供 NSP/XCI 转储文件。",
  runtimeMissing:
    "Runtime unavailable; CI downloads may require NXBHELPER_GITHUB_TOKEN. Supply --runtime-url and --runtime-sha256 (CI artifact ZIP or game APPX).",
  runtimeInvalid: "Runtime download, checksum or payload validation failed.",
  portal: "Device Portal 请求失败。请检查地址、凭据和开发者模式。",
  deploy:
    "Xbox 注册失败或超时。请检查 VCLibs 和 Device Portal 部署日志。",
  interrupted: "已取消。",
  secret: "需要在终端中输入隐藏密码。",
  args: "参数无效。请运行 --help。",
  progress: "正在发送",
  itemGame: "游戏",
  itemKeys: "密钥（prod.keys）",
  itemUpdate: "更新",
  itemDlc: "DLC",
  itemFirmware: "固件",
  itemSaves: "存档数据",
  itemMods: "模组",
  itemTitleKeys: "密钥（title.keys）",
  fileCount: "个文件",
  firmware:
    "拖入固件 NCA 文件夹、ZIP 或 hekate rawnand 备份；按 Enter 跳过（建议提供固件，否则 Mii 界面和部分系统应用可能为空）",
  saves: "拖入此游戏的 JKSV/Checkpoint 备份文件夹或 ZIP；按 Enter 跳过",
  mods: "拖入 romfs/exefs 文件夹或此游戏的模组文件夹/ZIP；按 Enter 跳过",
  titleKeys: "拖入 title.keys，或按 Enter 跳过",
  inputInvalid:
    "文件夹/ZIP 无效：路径不安全、压缩格式不支持、数据为空或文件系统损坏。",
  firmware7z: "请先解压 .7z，再选择解压后的固件文件夹。",
  firmwareRar: "请先解压 .rar，再选择解压后的固件文件夹。",
  firmwarePartition:
    "不支持基于分区的 emuMMC。请使用 Hekate 将其备份为文件，然后选择 eMMC 文件夹。",
  firmwareInvalid:
    "Firmware rejected: NCA filename SHA-256, encrypted NCA3 header or SystemVersion data is invalid.",
  firmwareIncomplete:
    "固件不完整：需要 SystemVersion（0100000000000809，Data）和 Mii 模型（0100000000000802，Data/PublicData）。",
  firmwareKeys:
    "Firmware requires header_key and, for NAND, bis_key_02 (32 bytes, crypt+tweak). Encrypted SystemVersion also requires the matching key_area_key in prod.keys.",
  nandInvalid:
    "Invalid hekate NAND: missing/ambiguous SYSTEM GPT partition, missing split parts or unreadable FAT32 (check bis_key_02).",
  optionalMismatch:
    "已拒绝：备份/模组的标题 ID 与此游戏不匹配。请拖入此游戏对应的单个备份目录。",
  modsInvalid:
    "已拒绝：模组必须在单个模组文件夹或 load/<titleid>/<modname>/ 中包含 romfs/exefs。",
  titleKeysInvalid: "请选择名为 title.keys、存在且非空的文件。",
  saveExists:
    "Save import stopped: this app already has a profile. Use a fresh game app to avoid replacing its user or saves.",
  none: "-",
  rejectNoId:
    "已拒绝：文件名中没有唯一的 [标题 ID]，无法匹配游戏。",
  rejectMismatch:
    "Rejected: this title ID does not belong to the game (expected its update ID or DLC range).",
  rejectDuplicate: "已拒绝：此文件或标题 ID 已添加。",
  help: "NxbHelper\nUsage: nxbhelper [--runtime-url HTTPS_URL --runtime-sha256 HEX] [--insecure-portal]\n--insecure-portal accepts the Xbox self-signed TLS certificate for this connection only.\nDefault runtime: latest NspxMiguel/NXbox release with a SHA-256 asset digest.\nNo games or keys are included in the staged runtime. NSZ/XCZ requires nsz on PATH.",
} satisfies Translation;
