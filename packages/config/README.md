# @readue/config

Readue 的配置包。

## Install

```bash
npm install --save @readue/config
```

## API

### `getDefaultConfig`

获取默认的配置。

```ts
import { getDefaultConfig } from '@readue/config';

getDefaultConfig()
```

### `readUserConfig`

读取用户自定义配置。

```ts
import { readUserConfig } from '@readue/config';

readUserConfig()
```

### `getConfig`

获取配置，当用户配置为空时，会使用 Readue 默认配置。

```ts
import { getConfig } from '@readue/config';

getConfig()
```

### `ReadueConfig`

配置对象类型定义。

```ts
import { ReadueConfig } from '@readue/config';

const config: ReadueConfig = getDefaultConfig()
```

### `WRITE_MODE`

文件写入模式。

```ts
import { WRITE_MODE } from '@readue/config';

console.log(WRITE_MODE.COVER)  // 'cover'
```

### `DEFAULT_INSERT_PLACEHOLDER`

默认的插入位置占位符。

```ts
import { DEFAULT_INSERT_PLACEHOLDER } from '@readue/config';
console.log(DEFAULT_INSERT_PLACEHOLDER) // '__READUE_PLACEHOLDER__'
```
