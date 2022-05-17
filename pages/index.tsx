import type { NextPage } from 'next'
import Header from '@components/Header'
import { Box } from '@styles/style'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Box fullWidth css={{ marginTop: '48px' }}>
        <Box>Donec sed odio dui.</Box>
      </Box>
    </>
  )
}

export default Home
