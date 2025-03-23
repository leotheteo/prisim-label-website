import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Prism Audio
			</title>
			<meta name={"description"} content={"Sound in Every Spectrum"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<meta name={"msapplication-TileColor"} content={"#272782"} />
		</Helmet>
		<Section padding="88px 0 88px 0" background="radial-gradient(50% 50% at 52.09% 50%,rgba(0, 0, 0, 0.3) 67.1%,rgba(0, 0, 0, 0.4) 100%),url(https://images.unsplash.com/photo-1570398584138-59a560dc1288?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover repeat scroll padding-box" quarkly-title="Hero-25">
			<Override
				slot="SectionContent"
				lg-justify-content="center"
				max-width="1220px"
				flex-direction="row"
				flex-wrap="wrap"
			/>
			<Box
				lg-margin="0px 0px 40px 0px"
				width="70%"
				display="flex"
				align-items="flex-start"
				flex-direction="column"
				justify-content="space-between"
				lg-width="100%"
			>
				<Box
					width="80%"
					flex-direction="column"
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					sm-margin="0px 0px 40px 0px"
					sm-padding="0px 0px 0px 0px"
					display="flex"
					justify-content="center"
					lg-margin="0px 0px 40px 0px"
					md-align-items="flex-start"
				>
					<Text
						margin="0px 0px 16px 0px"
						color="--lightD2"
						font="--base"
						lg-text-align="center"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						Sound in Every Spectrum
					</Text>
					<Text
						margin="0px 0px 36px 0px"
						color="--light"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Welcome to the submissions portal!
					</Text>
					<Text
						lg-text-align="center"
						lg-width="80%"
						width="70%"
						sm-width="100%"
						margin="0px 0px 0px 0px"
						color="--lightD2"
						font="--lead"
						md-text-align="left"
					/>
				</Box>
			</Box>
			<Section>
				<Link href="#https://prisim-audio.netlify.app/" color="#ffffff">
					&lt;- Take me back to Prism Audio
				</Link>
			</Section>
		</Section>
		<Components.EmbedHTML />
		<Components.QuarklycommunityKitNetlifyForm />
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2" background="#000000">
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#ffffff"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
				>
					© 2025 Prism Audio. All rights reserved.
					<br />
					Site design done by minty's experiment lab (https://ebb.l5.ca/mintylab)
					<br />
					<br />
					(shoutout budgiemint for telling me abt quarkly which this site was made with)
					<br />
					<br />
					Owned and Operated by v1x0 (linktr.ee/v1x0music)
				</Text>
				<Box display="grid" grid-template-columns="repeat(5, 1fr)" grid-gap="16px 24px" sm-align-self="center">
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaFacebook}
							size="24px"
							color="--primary"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaInstagram}
							size="24px"
							color="--primary"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaTwitterSquare}
							size="24px"
							color="--primary"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="--primary"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaYoutube}
							size="24px"
							color="--primary"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"67c737959335410018cacb82"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});