import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader } from '@coreui/react'
import { DocsExample } from 'src/components'

const MeterType = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React MeterType</strong> <small>base MeterType</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/nav#base-nav"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default MeterType
