import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const village = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Card</strong> <small>Example</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/village"></DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default village
