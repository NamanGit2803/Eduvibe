import React from 'react'
import styles from '@/styles/footer.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';





const Footer = () => {

  const [openPartnerLoginWindow, setOpenPartnerLoginWindow] = useState(false);

  const router = useRouter()

  const handleOpenLoginWindow = () => {
    setOpenPartnerLoginWindow(true);
  };

  const handleCloseLoginWindow = () => {
    setOpenPartnerLoginWindow(false);
  };



  return (
    <>
      {/* footer section */}
      <div id={styles.footer}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* logo  */}
            <Grid container direction={'column'} spacing={2} size={{ xs: 12, md: 4, lg: 3 }}>
              <div className={styles.logo}>EduVibe</div>
              {/* icons  */}
              <Stack direction="row" spacing={3}>
                <InstagramIcon sx={{ fontSize: '28px', color: 'gray', cursor: 'pointer' }} />
                <LinkedInIcon sx={{ fontSize: '28px', color: 'gray', cursor: 'pointer' }} />
                <XIcon sx={{ fontSize: '28px', color: 'gray', cursor: 'pointer' }} />
                <FacebookIcon sx={{ fontSize: '28px', color: 'gray', cursor: 'pointer' }} />
              </Stack>
            </Grid>
            {/* links  */}
            <Grid container spacing={2} size={{ xs: 12, md: 7, lg: 8 }}>
              <Grid size={{ xs: 6, md: 4, lg: 4 }}>
                <div className={styles.linksContainer}>
                  <Link href={'/'}>Home</Link>
                  <Link href={'/contact'}>Contact</Link>
                  <Link href={'/courses'}>Courses</Link>
                </div>
              </Grid>
              <Grid size={{ xs: 6, md: 4, lg: 4 }}>
                <div className={styles.linksContainer}>
                  <Link href={'/'}>Terms</Link>
                  <Link href={'/'}>Privacy</Link>
                </div>
              </Grid>
              <Grid size={{ xs: 6, md: 4, lg: 4 }}>
                <div className={styles.linksContainer}>
                  <Link href={'/'}>Partners</Link>
                  <Link href={'/'}>About us</Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
          {/* divider  */}
          <Divider variant="middle" component="div" sx={{ marginTop: '5rem', marginBottom: '2rem', height: '5px', borderColor: '#455A64' }} />

          {/* Copyright section  */}
          <div className={styles.copyRightSection}>
            © EduVibe Private Limited, 2024
          </div>
        </Box>
      </div >
    </>
  )
}

export default Footer