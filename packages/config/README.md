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

### `ReadueConfig`

配置对象类型定义。

```ts
import { ReadueConfig } from '@readue/config';

const config: ReadueConfig = getDefaultConfig()
```

### `SUPPORTED_FILE_NAMES`

支持的配置文件名列表。

```ts
import { SUPPORTED_FILE_NAMES } from '@readue/config';

console.log(SUPPORTED_FILE_NAMES) // ['config.js','config.cjs']
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
