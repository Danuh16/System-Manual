import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsExample } from 'src/components'

const Typography = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Headings</CCardHeader>
        <CCardBody>
          <DocsExample href="components/accordion" />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
