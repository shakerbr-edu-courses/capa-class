const departmentStyles = {
  Engineering: {
    badge: 'bg-blue-50 text-blue-700 ring-blue-100',
    avatar: 'bg-blue-600',
    accent: 'from-blue-500 to-indigo-600',
  },
  Marketing: {
    badge: 'bg-amber-50 text-amber-700 ring-amber-100',
    avatar: 'bg-amber-600',
    accent: 'from-amber-500 to-orange-600',
  },
  Sales: {
    badge: 'bg-rose-50 text-rose-700 ring-rose-100',
    avatar: 'bg-rose-600',
    accent: 'from-rose-500 to-pink-600',
  },
};

const defaultStyles = {
  badge: 'bg-slate-50 text-slate-700 ring-slate-100',
  avatar: 'bg-slate-600',
  accent: 'from-slate-500 to-slate-700',
};

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function Card({ name, age, department, city }) {
  const styles = departmentStyles[department] ?? defaultStyles;
  const initials = getInitials(name);

  return (
    <div className="w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`h-1.5 bg-linear-to-r ${styles.accent}`} />

      <div className="p-6">
        <div className="mb-5 flex items-start gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${styles.avatar} text-lg font-semibold text-white shadow-sm`}
          >
            {initials}
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xl font-bold tracking-tight text-slate-900">
              {name}
            </h2>
            <span
              className={`mt-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles.badge}`}
            >
              {department}
            </span>
          </div>
        </div>

        <dl className="space-y-3 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-sm font-medium text-slate-500">Age</dt>
            <dd className="text-sm font-semibold text-slate-800">{age}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-sm font-medium text-slate-500">City</dt>
            <dd className="text-sm font-semibold text-slate-800">{city}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Card;
