export type Status =
  | 'all'
  | 'waiting_check'
  | 'consider_document'
  | 'register'
  | 'issue_document'
  | 'edit'
export interface RegisterData {
  name: string
  code: string
  createDate: string
  verifyBy: string
  verifyDate: string
  status: string
}
