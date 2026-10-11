import { useState } from 'react'
import type { IMiniAppHostContext } from '../../types/qiankun'
import './index.css'

interface Props {
  hostContext?: IMiniAppHostContext
}

/**
 * 示例组件：演示如何调用宿主应用（host platform）注入的能力。
 * 真实业务可以删掉，但请保留 hostContext 取用模式作为参考。
 */
export default function HelloPanel({ hostContext }: Props) {
  const [count, setCount] = useState(0)

  const handleNotify = () => {
    if (hostContext?.notify) {
      hostContext.notify('success', `当前计数：${count}`)
    } else {
      // 独立调试态 fallback
      window.alert(`当前计数：${count}`)
    }
  }

  return (
    <section className="hello-panel">
      <h2>👋 Hello, MiniApp</h2>

      <div className="hello-panel__user">
        当前用户：
        <strong>{hostContext?.user?.name ?? '（独立调试，无主站用户信息）'}</strong>
      </div>

      <div className="hello-panel__actions">
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          点击 +1（当前：{count}）
        </button>
        <button type="button" onClick={handleNotify}>
          调用主站 notify
        </button>
      </div>
    </section>
  )
}
