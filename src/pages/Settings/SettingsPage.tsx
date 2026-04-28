import { EmptyState } from '../../components/ui/EmptyState'

export function SettingsPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-2 text-text-secondary">
          Regroupez les preferences de l'application quand elles seront utiles.
        </p>
      </div>
      <EmptyState
        title="Aucun parametrage"
        description="Les reglages visibles seront ajoutes seulement quand ils auront une action reelle."
      />
    </section>
  )
}
