import { EmptyState } from '../../components/ui/EmptyState'

export function GroupsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Groups</h1>
        <p className="mt-2 text-text-secondary">
          Preparez la gestion des espaces partages et des foyers.
        </p>
      </div>
      <EmptyState
        title="Aucun groupe"
        description="Cette page reserve l'emplacement des futurs groupes sans creer de logique de partage maintenant."
      />
    </section>
  )
}
