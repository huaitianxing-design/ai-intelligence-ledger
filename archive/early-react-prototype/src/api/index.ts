/**
 * API 桶导出 —— 业务组件统一从这里 import
 *
 * 示例：
 *   import { sayHello } from './api'
 *   const result = await sayHello({ greeting: '你好' })
 *
 * 业务方新增 queries/<code>.ts 后，在这里追加一行 export 即可。
 */

// 客户端 + 类型
export { execute, type ExecuteOptions } from './client'
export type { QueryResult, QueryError } from './types'

// ============== 查询函数（按 code 字母序排列） ==============
export {
  CODE as HELLO_EXAMPLE_CODE,
  sayHello,
  type Params as HelloParams,
  type Response as HelloResponse,
} from './queries/HELLO_example'
