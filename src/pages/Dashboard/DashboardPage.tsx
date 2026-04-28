import { EmptyState } from '../../components/ui/EmptyState'

export function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-text-secondary">
          Vue d'ensemble de vos finances et futurs widgets configurables.
        </p>
      </div>
      <EmptyState
        title="Aucun widget configure"
        description="Les widgets du dashboard seront ajoutes progressivement, sans drag and drop pour cette premiere base."
      />
    </section>
  )
}
