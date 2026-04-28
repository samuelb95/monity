import { EmptyState } from '../../components/ui/EmptyState'

export function ForecastsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Prévisions</h1>
        <p className="mt-2 text-text-secondary">
          Anticipez les mouvements financiers à venir.
        </p>
      </div>
      <EmptyState
        title="Aucune prévision"
        description="Cette section est prête pour accueillir les prévisions dans une prochaine étape."
      />
    </section>
  )
}
