import { Card } from '../../components/ui/Card'

const menuItems = [
  {
    description: 'Espaces partagés et gestion des foyers.',
    href: '#/groups',
    title: 'Groupes',
  },
  {
    description: 'Projection des dépenses et revenus à venir.',
    href: '#/forecasts',
    title: 'Prévisions',
  },
  {
    description: 'Suivi des priorités financières.',
    href: '#/goals',
    title: 'Objectifs',
  },
  {
    description: 'Centralisation des crédits et remboursements.',
    href: '#/loans',
    title: 'Prêts',
  },
  {
    description: 'Alertes importantes et rappels financiers.',
    href: '#/notifications',
    title: 'Notifications',
  },
  {
    description: 'Préférences et configuration de Monity.',
    href: '#/settings',
    title: 'Paramètres',
  },
]

export function MorePage() {
  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Plus</h1>
        <p className="mt-2 text-text-secondary">
          Accédez aux sections secondaires de Monity.
        </p>
      </div>

      <Card className="p-2">
        <nav aria-label="Sections secondaires" className="divide-y divide-border">
          {menuItems.map((item) => (
            <a
              className="flex items-center justify-between gap-4 rounded-button px-3 py-4 transition hover:bg-surface-elevated"
              href={item.href}
              key={item.href}
            >
              <span>
                <span className="block text-sm font-semibold text-text-primary">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm leading-5 text-text-secondary">
                  {item.description}
                </span>
              </span>
              <span className="text-lg font-semibold text-primary" aria-hidden="true">
                ›
              </span>
            </a>
          ))}
        </nav>
      </Card>
    </section>
  )
}
