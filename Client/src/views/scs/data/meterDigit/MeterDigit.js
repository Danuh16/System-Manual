import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const MeterDigit = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/list-group"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MeterDigit
