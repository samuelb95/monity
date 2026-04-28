import { EmptyState } from '../../components/ui/EmptyState'

export function BudgetsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Budgets</h1>
        <p className="mt-2 text-text-secondary">
          Organisez vos limites de depenses par categorie.
        </p>
      </div>
      <EmptyState
        title="Aucun budget"
        description="Les budgets seront branches plus tard sur les donnees metier, puis sur Supabase si necessaire."
      />
    </section>
  )
}
