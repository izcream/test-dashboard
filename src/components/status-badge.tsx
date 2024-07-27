import { cn } from '@/lib/utils'

export function StatusBadge({ status }: { status: string }) {
  let statusColor: Record<string, string> = {
    รอตรวจสอบ: 'bg-muted',
    พิจารณาเอกสาร: 'bg-sky-500 text-white',
    ขึ้นทะเบียน: 'bg-purple-500 text-white',
    ออกเอกสาร: 'bg-emerald-500 text-white'
  }
  if (status.includes('แก้ไข')) {
    statusColor[status] = 'bg-amber-500 text-white'
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        statusColor[status]
      )}>
      {status}
    </span>
  )
}
