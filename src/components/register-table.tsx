'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { type Status, type RegisterData } from '@/lib/types'
import { useMemo, useState, useDeferredValue, useEffect } from 'react'
import { Input } from './ui/input'
import { SearchIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { StatusBadge } from './status-badge'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface Props {
  registerData: RegisterData[]
  q?: string
  status?: Status
}
export function RegisterTable({ registerData, q = '', status = 'all' }: Props) {
  const [filterStatus, setFilterStatus] = useState<Status>(status)
  const [search, setSearch] = useState(q)
  const deferedSearch = useDeferredValue(search)
  const filteredData = useMemo(() => {
    return registerData.filter((d) => {
      if (deferedSearch !== '')
        return (
          d.name.includes(deferedSearch) ||
          d.code.includes(deferedSearch) ||
          d.verifyBy.includes(deferedSearch) ||
          d.name.includes(deferedSearch)
        )
      if (filterStatus === 'all') return true
      if (filterStatus === 'waiting_check') return d.status === 'รอตรวจสอบ'
      if (filterStatus === 'consider_document') return d.status === 'พิจารณาเอกสาร'
      if (filterStatus === 'register') return d.status === 'ขึ้นทะเบียน'
      if (filterStatus === 'issue_document') return d.status === 'ออกเอกสาร'
      if (filterStatus === 'edit') return d.status.includes('แก้ไข')
    })
  }, [registerData, filterStatus, deferedSearch])
  useEffect(() => {
    if (deferedSearch === '') return
    setFilterStatus('all')
  }, [deferedSearch])
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between lg:gap-4">
        <div className="hidden lg:block">
          <Tabs value={filterStatus} onValueChange={(v) => setFilterStatus(v as Status)}>
            <TabsList className="h-auto flex-wrap lg:h-10">
              <TabsTrigger value="all">ทั้งหมด</TabsTrigger>
              <TabsTrigger value="waiting_check">ตรวจสอบความถูกต้อง</TabsTrigger>
              <TabsTrigger value="consider_document">พิจารณาเอกสาร</TabsTrigger>
              <TabsTrigger value="register">ขึ้นทะเบียน</TabsTrigger>
              <TabsTrigger value="issue_document">ออกเอกสาร</TabsTrigger>
              <TabsTrigger value="edit">แก้ไข</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex gap-x-2">
          <Select value={filterStatus} onValueChange={(v) => setFilterStatus(v as Status)}>
            <SelectTrigger className="w-[120px] sm:w-[180px] lg:hidden">
              <SelectValue placeholder="สถานะ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">ทั้งหมด</SelectItem>
                <SelectItem value="waiting_check">ตรวจสอบความถูกต้อง</SelectItem>
                <SelectItem value="consider_document">พิจารณาเอกสาร</SelectItem>
                <SelectItem value="register">ขึ้นทะเบียน</SelectItem>
                <SelectItem value="issue_document">ออกเอกสาร</SelectItem>
                <SelectItem value="edit">แก้ไข</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="relative flex-grow lg:w-[250px]">
            <Input
              placeholder="ค้นหา"
              className="peer w-full pl-8"
              value={search}
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
            <div className="absolute left-0 top-0 inline-flex h-full items-center pl-3 text-border peer-focus:text-primary">
              <SearchIcon className="size-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((data) => (
            <Card key={data.code}>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle className="text-base">{data.name}</CardTitle>
                  <StatusBadge status={data.status} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="divide-y">
                  <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">รหัสหน่วยบริการ</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.code}
                    </dd>
                  </div>
                  <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      วันที่ขึ้นทะเบียน
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.createDate}
                    </dd>
                  </div>
                  <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">ชื่อผู้ตรวจสอบ</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.verifyBy}
                    </dd>
                  </div>
                  <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">วันที่ตรวจสอบ</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.verifyDate}
                    </dd>
                  </div>
                  <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">สถานะ</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {data.status}
                    </dd>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div>Empty</div>
        )}
      </div>
      <Table className="hidden lg:table">
        <TableHeader>
          <TableRow>
            <TableHead className="text-nowrap">ชื่อหน่วยงาน</TableHead>
            <TableHead className="text-nowrap text-center">รหัสหน่วยบริการ</TableHead>
            <TableHead className="text-nowrap text-center">วันที่ขึ้นทะเบียน</TableHead>
            <TableHead className="text-nowrap text-center">ชื่อผู้ตรวจสอบ</TableHead>
            <TableHead className="text-nowrap text-center">วันที่ตรวจสอบ</TableHead>
            <TableHead className="text-nowrap text-left">สถานะ</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((d) => (
              <TableRow key={d.code}>
                <TableCell className="text-nowrap">{d.name}</TableCell>
                <TableCell className="text-nowrap text-center">{d.code}</TableCell>
                <TableCell className="text-nowrap text-center">{d.createDate}</TableCell>
                <TableCell className="text-nowrap text-center">{d.verifyBy}</TableCell>
                <TableCell className="text-nowrap text-center">{d.verifyDate}</TableCell>
                <TableCell className="text-nowrap text-left">
                  <StatusBadge status={d.status} />
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-muted-foreground">
                ไม่พบข้อมูล
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
