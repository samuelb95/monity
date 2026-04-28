import { EmptyState } from '../../components/ui/EmptyState'

export function InvestmentsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Investments</h1>
        <p className="mt-2 text-text-secondary">
          Centralisez plus tard le suivi de vos placements.
        </p>
      </div>
      <EmptyState
        title="Aucun investissement"
        description="La base de page est creee sans appel API, sans graphique et sans donnee simulee."
      />
    </section>
  )
}
