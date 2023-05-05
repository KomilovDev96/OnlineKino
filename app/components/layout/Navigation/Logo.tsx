import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="https://azdev.uz/">
			azdev.uz
		</Link>
	)
}

export default Logo
