import type { ReactNode } from 'react'
import { Button } from './Button'
import { Card } from './Card'

type ModalProps = {
  children: ReactNode
  isOpen: boolean
  title: string
  onClose: () => void
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-20 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <Card className="w-full max-w-lg bg-surface-elevated">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
          <Button onClick={onClose} variant="secondary">
            Fermer
          </Button>
        </div>
        <div className="mt-4 text-sm text-text-secondary">{children}</div>
      </Card>
    </div>
  )
}
