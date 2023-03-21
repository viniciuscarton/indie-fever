// template: mdbootstrap.com
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '../components/footer.css'

export default function Footer() {
  return (
    <MDBFooter className='footer text-center text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-lg-block'>
          <span>Siga-nos:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='footerbox text-center text-md-start mt-5'>
          <MDBRow className='mt-3 text-center'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='dice' className='me-3' />
                Indie Fever
              </h6>
              <p >
                Through the darkness of future past <br />
                The magician longs to see. <br />
                One chants out between two worlds  <br />
                Fire walk with me. <br />
                From Twin Peaks <br />
                by David Lynch <br />
              </p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  News
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Account</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Sign In
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Wishlist
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                29 Neibolt Street, Derry, ME.
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                if@example.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: '#f9f7fa', fontSize: "12px" }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
  );
}