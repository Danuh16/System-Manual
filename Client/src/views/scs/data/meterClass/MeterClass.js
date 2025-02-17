import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import { DocsExample } from 'src/components'

const MeterClass = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React CustomerCategory</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/meterClass" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MeterClass
