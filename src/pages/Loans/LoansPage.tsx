import { EmptyState } from '../../components/ui/EmptyState'

export function LoansPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Prêts</h1>
        <p className="mt-2 text-text-secondary">
          Regroupez plus tard les crédits et remboursements.
        </p>
      </div>
      <EmptyState
        title="Aucun prêt"
        description="Cette page reste vide tant que la gestion des prêts n'est pas implémentée."
      />
    </section>
  )
}
