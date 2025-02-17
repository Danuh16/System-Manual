import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const WaterSource = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Spinner</strong> <small>Border</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/spinner"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default WaterSource
