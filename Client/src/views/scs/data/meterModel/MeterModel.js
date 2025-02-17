import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const MeterModel = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/pagination"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MeterModel
