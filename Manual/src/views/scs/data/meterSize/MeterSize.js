import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const MeterSize = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Breadcrumb</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/meterSize" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MeterSize
