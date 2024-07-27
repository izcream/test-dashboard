import { RegisterTable } from '@/components/register-table'
import { type RegisterData } from '@/lib/types'

interface Props {
  searchParams: {
    q?: string
    status?: 'all' | 'waiting_check' | 'consider_document' | 'register' | 'issue_document' | 'edit'
  }
}

export default async function Dashboard({ searchParams }: Props) {
  const res = await fetch('https://test-api-py77dwlbxa-df.a.run.app/data')
  const data = (await res.json()) as RegisterData[]
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold">รายการขอขึ้นทะเบียน</h1>
      <RegisterTable registerData={data} {...searchParams} />
    </div>
  )
}
