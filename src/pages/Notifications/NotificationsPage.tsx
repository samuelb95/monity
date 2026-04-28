import { EmptyState } from '../../components/ui/EmptyState'

export function NotificationsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>
        <p className="mt-2 text-text-secondary">
          Centralisez les alertes financières importantes.
        </p>
      </div>
      <EmptyState
        title="Aucune notification"
        description="Les notifications visibles seront ajoutées seulement quand elles auront une action réelle."
      />
    </section>
  )
}
