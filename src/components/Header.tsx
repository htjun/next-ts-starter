import { Box } from 'src/styles/style'
import Link from 'next/link'

const Header = () => {
  return (
    <Box
      as="header"
      fullWidth
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        marginY: '32px',
      }}
    >
      <h1>App Title</h1>
      <nav>
        <Box as="ul" css={{ display: 'flex', gap: '12px' }}>
          <li>
            <Link href="#">Menu1</Link>
          </li>
          <li>
            <Link href="#">Menu2</Link>
          </li>
          <li>
            <Link href="#">Menu3</Link>
          </li>
        </Box>
      </nav>
    </Box>
  )
}

export default Header
