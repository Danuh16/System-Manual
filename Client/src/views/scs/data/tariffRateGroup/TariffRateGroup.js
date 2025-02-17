import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import { DocsExample } from 'src/components'

const TariffRateGroup = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Popover</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/popover"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TariffRateGroup
