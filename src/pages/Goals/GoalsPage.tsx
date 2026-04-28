import { EmptyState } from '../../components/ui/EmptyState'

export function GoalsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Objectifs</h1>
        <p className="mt-2 text-text-secondary">
          Préparez le suivi des objectifs financiers.
        </p>
      </div>
      <EmptyState
        title="Aucun objectif"
        description="Les objectifs seront ajoutés quand la logique associée sera définie."
      />
    </section>
  )
}
