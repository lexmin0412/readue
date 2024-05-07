# Node.js API

## 安装

```bash
pnpm add @readue/api
```

## API

### `isMonorepo`

判断是否为 monorepo 仓库。

#### 类型定义

```ts
function isMonorepo(path: string): boolean
```

#### 参数

| 参数名 | 类型     | 说明             |
|--------|----------|------------------|
| `path` | `string` | 要判断的目录路径 |

#### 返回值

布尔值，表示是否为 monorepo 仓库。

#### 用法

```js
import { isMonorepo } from "@readue/api"

console.log(isMonorepo(process.cwd())) // true
```

### `generate4Monorepo`

为 monorepo 仓库生成 README.md。

#### 类型定义

```ts
function generate4Monorepo(pkgJson: Record<string, any>, path: string): Promise<void>
```

#### 参数

| 参数名    | 类型                  | 说明                         |
|-----------|-----------------------|------------------------------|
| `pkgJson` | `Record<string, any>` | monorepo 仓库的 package.json |
| `path`    | `string`              | 工作目录                     |

#### 返回值

无。

#### 用法

```js
import { generate4Monorepo } from "@readue/api"

// 读取 package.json
const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

// 解析 package.json
const pkgJson = JSON.parse(content)

// 生成 README.md
generate4Monorepo(content, process.cwd())
.then(() => {
	console.log('done')
	process.exit(0)
})
.catch(err => {
	console.error(err)
	process.exit(1)
})
```

### `generate4SinglePkg`

为单包仓库生成 README.md。

#### 类型定义

```ts
function generate4SinglePkg(pkgJson: Record<string, any>): void
```

#### 参数

| 参数名    | 类型                  | 说明             |
|-----------|-----------------------|------------------|
| `pkgJson` | `Record<string, any>` | 单包仓库的 package.json |

#### 返回值

无。

#### 用法

```js
import { generate4SinglePkg } from "@readue/api"

// 读取 package.json
const content = fs.readFileSync(path.resolve(process.cwd(), 'package.json')).toString()

// 解析 package.json
const pkgJson = JSON.parse(content)

// 生成 README.md
generate4SinglePkg(pkgJson)
```
