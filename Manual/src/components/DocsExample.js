import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilNotes, cilMediaPlay } from '@coreui/icons'
import PdfDocument from './PdfDocument'
import ReactPDF, { PDFViewer } from '@react-pdf/renderer'
import ReactPlayer from 'react-player'
const DocsExample = (props) => {
  const { children, href, tabContentClassName, pdfFile, videoFile } = props
  const [activeKey, setActiveKey] = useState(1)
  return (
    <div className="example">
      <CNav variant="underline-border" role="tablist">
        <CNavItem>
          <CNavLink active={activeKey === 1} onClick={() => setActiveKey(1)}>
            <CIcon icon={cilNotes} className="me-2" />
            PDF
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink active={activeKey === 2} onClick={() => setActiveKey(2)}>
            <CIcon icon={cilMediaPlay} className="me-2" />
            Video
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className={`rounded-bottom ${tabContentClassName ? tabContentClassName : ''}`}>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <p>{pdfFile}</p>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="home1-tab" visible={activeKey === 2}>
          <ReactPlayer url={`http://localhost:3001/${videoFile}`} controls />
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsExample.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  pdfFile: PropTypes.string,
  videoFile: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(DocsExample)
