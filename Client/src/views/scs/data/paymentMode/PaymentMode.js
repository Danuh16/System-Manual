import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import { DocsExample } from 'src/components'

const Tooltips = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Tooltip</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/tooltip"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tooltips
