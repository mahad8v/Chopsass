interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

export default function Table<T extends { id?: string }>({ columns, data, emptyMessage = "No data found." }: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-100">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((col) => (
              <th key={col.key as string} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50 bg-white">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-8 text-center text-sm text-gray-400">{emptyMessage}</td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={row.id ?? i} className="hover:bg-gray-50 transition-colors">
                {columns.map((col) => (
                  <td key={col.key as string} className="px-4 py-3 text-sm text-gray-700">
                    {col.render ? col.render(row) : String((row as any)[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
