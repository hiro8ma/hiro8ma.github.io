import { ParsedUrlQuery } from 'querystring'
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  NextPage,
  NextPageContext,
} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

type Props = {
  message: string
}

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #9057ff;
`

const fontColor = css`
  color: #4689ff;
`

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.default};
`

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background: #4689ff;
  border-radius: 16px;
`

const Text = styled.p`
  ${fontColor}
  font-weight: bold;
`

const BorderedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`

const Home: NextPage<Props> = (props) => {
  const { message } = props

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>hiro8ma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <H1>hiro8ma</H1>
        <Badge>{message}</Badge>
        <Text>
          <StyledLink href="https://github.com/hiro8ma">Github</StyledLink>
        </Text>
        <BorderedText>World</BorderedText>
        <Button variant="primary">Button</Button>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}`
  console.log(message)
  return {
    props: {
      message,
    },
    revalidate: 60,
  }
}

export default Home
