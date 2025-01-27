import type { Metadata } from 'next'
import { Anuphan } from 'next/font/google'
import './globals.css'
import { HomeIcon, MenuIcon, PackageIcon, User2Icon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const anuphan = Anuphan({ subsets: ['latin', 'thai'], variable: '--font-anuphan' })

export const metadata: Metadata = {
  title: 'รายการขอขึ้นทะเบียน | ระบบแพทย์ กระทรวงสาธารณะสุข กรมควบคุมโรค',
  description: 'รายการขอขึ้นทะเบียนตรวจสอบข้อมูล กระทรวงสาธารณะสุข กรมควบคุมโรค'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={anuphan.variable}>
        <div className="grid h-screen max-h-[100dvh] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <aside className="hidden bg-muted md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="mt-10 flex items-center justify-center px-4 lg:px-6">
                <div className="text-center">
                  <div className="mx-auto inline-flex size-32 items-center justify-center rounded-full bg-white p-6">
                    <User2Icon className="h-full w-full" />
                  </div>
                  <div className="mt-2 -space-y-1">
                    <p className="font-semibold">นพ.ทดสอบ ระบบแพทย์</p>
                    <p className="text-sm text-muted-foreground">กระทรวงสาธารณะสุข กรมควบคุมโรค</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex-1">
                <nav className="grid items-start gap-y-2 px-2 text-sm font-medium lg:px-4">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground">
                    <HomeIcon className="h-4 w-4" />
                    หน้าหลัก
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <PackageIcon className="h-4 w-4" />
                    ขึ้นทะเบียนสำเร็จ
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                    <UsersIcon className="h-4 w-4" />
                    User Management
                  </Link>
                </nav>
              </div>
              <div className="mt-auto p-4">
                <nav className="grid items-start gap-y-1 text-sm font-medium">
                  <Link
                    href="#"
                    className="flex items-center px-3 text-muted-foreground transition-all hover:text-primary">
                    บริการอื่นๆ
                  </Link>

                  <Link
                    href="#"
                    className="flex items-center px-3 text-muted-foreground transition-all hover:text-primary">
                    คำถามที่พบบ่อย
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center px-3 font-semibold text-muted-foreground transition-all hover:text-primary">
                    ออกจากระบบ
                  </Link>
                </nav>
              </div>
            </div>
          </aside>
          <main className="flex flex-col overflow-auto">
            <header className="flex px-4 pt-4 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <div className="flex items-center justify-center px-4 lg:px-6">
                    <div className="text-center">
                      <div className="mx-auto inline-flex size-32 items-center justify-center rounded-full bg-muted p-6">
                        <User2Icon className="h-full w-full" />
                      </div>
                      <div className="-space-y-1">
                        <p className="font-semibold">นพ.ทดสอบ ระบบแพทย์</p>
                        <p className="text-sm text-muted-foreground">
                          กระทรวงสาธารณะสุข กรมควบคุมโรค
                        </p>
                      </div>
                    </div>
                  </div>
                  <nav className="mt-10 grid gap-2 font-medium">
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg bg-primary px-3 py-2 text-primary-foreground">
                      <HomeIcon className="h-4 w-4" />
                      หน้าหลัก
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                      <PackageIcon className="h-4 w-4" />
                      ขึ้นทะเบียนสำเร็จ
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                      <UsersIcon className="h-4 w-4" />
                      User Management
                    </Link>
                  </nav>
                  <div className="mt-auto">
                    <nav className="grid items-start gap-y-1 text-sm font-medium">
                      <Link
                        href="#"
                        className="flex items-center px-3 text-muted-foreground transition-all hover:text-primary">
                        บริการอื่นๆ
                      </Link>

                      <Link
                        href="#"
                        className="flex items-center px-3 text-muted-foreground transition-all hover:text-primary">
                        คำถามที่พบบ่อย
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center px-3 font-semibold text-muted-foreground transition-all hover:text-primary">
                        ออกจากระบบ
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </header>
            <div className="px-4 py-6 2xl:container lg:px-8 lg:py-12 2xl:mx-0">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
