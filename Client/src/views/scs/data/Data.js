import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'
import pdf from '../../../assets/sample.pdf'

const Data = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>Slide only</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/carousel" pdfFile={pdf} ></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Data
