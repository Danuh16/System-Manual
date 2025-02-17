import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const CountryOrigin = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Collapse</strong>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/collapse"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CountryOrigin
