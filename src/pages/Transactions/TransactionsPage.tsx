import { EmptyState } from '../../components/ui/EmptyState'

export function TransactionsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Transactions</h1>
        <p className="mt-2 text-text-secondary">
          Suivez les entrees et sorties d'argent de vos comptes.
        </p>
      </div>
      <EmptyState
        title="Aucune transaction"
        description="La structure est prete pour accueillir vos mouvements financiers lors des prochaines etapes."
      />
    </section>
  )
}
