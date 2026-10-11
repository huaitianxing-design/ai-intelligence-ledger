/**
 * 示例查询 —— 业务方照此模板新增 queries/<your-code>.ts，删除本文件
 *
 * 强约束（E13）：
 * 1. 文件名 = code（与 miniapp-data-binding 注册一致 + docs/api/<code>.md 对齐）
 * 2. 顶层 export const CODE = '<code>' as const  ←  让 IDE/外部能引用同名常量
 * 3. 入参 Params 和出参 Response 必须显式定义（不要 any），字段口径与 docs/api/<code>.md 一致
 * 4. 业务函数命名：动词 + 业务名（如 getDauTrend / askActivityAssistant / drawLottery）
 * 5. 函数体唯一职责 = 调 execute()，业务逻辑不要写在这里（放组件 / hook）
 */

import { execute } from '../client'
import type { QueryResult } from '../types'

/** miniapp-data-binding 注册的查询 code */
export const CODE = 'HELLO_example' as const

/** 入参（业务方按实际查询模板定义） */
export interface Params {
  /** 示例：用户问候语 */
  greeting: string
}

/** 出参（业务方按实际查询模板返回结构定义；不要 any） */
export interface Response {
  /** 示例：拼接后的回复文本 */
  reply: string
  /** 示例：响应时间戳 */
  ts: number
}

/**
 * 示例：调用 HELLO_example 查询
 *
 * @example
 * const result = await sayHello({ greeting: '你好' })
 * if (result.ok) {
 *   console.log(result.data.reply)
 * } else {
 *   console.error(result.error.message)
 * }
 */
export async function sayHello(params: Params): Promise<QueryResult<Response>> {
  return execute<Response>(CODE, params)
}
