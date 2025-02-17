import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const CustomerCategory = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CustomerCategory</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/customerCategory" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CustomerCategory
