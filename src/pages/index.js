import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Strong, List, Icon, Span, Button, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { FaBarcode } from "react-icons/fa";
import { FiLock, FiMusic, FiEdit } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section padding="88px 0 88px 0" background="radial-gradient(50% 50% at 52.09% 50%,rgba(0, 0, 0, 0.3) 67.1%,rgba(0, 0, 0, 0.4) 100%),url(https://uploads.quarkly.io/67c737959335410018cacb84/images/codioful-formerly-gradienta-OzfD79w8ptA-unsplash.jpg?v=2025-03-24T22:08:36.756Z) center center/cover repeat scroll padding-box" quarkly-title="Hero-25">
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
						Where Music Shines
					</Text>
					<Text
						margin="0px 0px 36px 0px"
						color="--light"
						font="--headline1"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Xenon Studios
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
					>
						Xenon Studios is a multi-genre distributor that focuses on reliable and fast distribution for all artists
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</Text>
				</Box>
			</Box>
			<Section />
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				What does prism audio do?
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				About Xenon Studios
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				We're a multi-genre label/distributor that takes pride in promoting our diverse artists and ensuring their music reaches audiences quickly and efficiently through various Digital Service Providers (DSPs). Our expertise spans multiple music styles, allowing us to cater to a wide range of tastes and preferences. We accept any artist as long as they have a minimum of one release per month. Any artist from any genre works! If you're a part of a collective, that is perfectly fine! Being signed to any PRO's is okay as well, as long as you provide your IPI number.
			</Text>
		</Section>
		<Section
			padding="60px 0 90px 0"
			sm-padding="60px 0 60px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="#000000"
			quarkly-title="Advantages/Features-6"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 48px 0px"
				lg-justify-content="center"
			>
				<Text as="p" font="--base" color="--primary" margin="0px 0px 8px 0px">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						What do we provide?
					</Strong>
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-text-align="center"
				>
					Services at Xenon Studios
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="50%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-text-align="center"
					lg-width="100%"
				>
					{" "}We provide multiple services for our artists so they can flourish. Here's what we offer.
				</Text>
			</Box>
			<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" list-style-type="disc" as="ul" />
			<List
				margin="40px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				as="ul"
				sm-margin="24px 0 0 0"
				list-style-type="none"
				font="normal normal 18px/150% sans-serif"
				display="grid"
				flex-direction="column"
				grid-gap="24px 32px"
				lg-margin="32px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="fa"
						icon={FaBarcode}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									<Strong>
										Codes.
									</Strong>
									{" "}We provide free UPC and ISRC codes by default, but you're welcome to provide your own or to use one from a previous distributor or label
								</Span>
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="fi"
						icon={FiLock}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-size="16px"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Strong>
									Lock Music
								</Strong>
								. We also provide a way to lock your music and prevent reuploads. Just tell us when uploading!
							</Span>
						</Span>
					</Text>
				</Box>
			</List>
			<List
				margin="40px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				as="ul"
				sm-margin="24px 0 0 0"
				list-style-type="none"
				font="normal normal 18px/150% sans-serif"
				display="grid"
				flex-direction="column"
				grid-gap="24px 32px"
				lg-margin="32px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="fi"
						icon={FiMusic}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Quick distribution.{" "}
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								We offer quick distribution to all DSPs for free if you're accepted (~7 days from submission, can sometimes take longer)
							</Span>
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="fi"
						icon={FiEdit}
						size="20px"
						color="--primary"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Strong
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									Professional mixing and mastering
								</Strong>
								.
							</Span>
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								{" "}We also do mixing and mastering for a small fee of $15, (being on this distro gets you FREE mixing and mastering) We require your vocals in .wav format and the instrumental in .mp3 or .wav.{" \n "}
							</Span>
						</Span>
					</Text>
				</Box>
			</List>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
				text-align="center"
			>
				Where does Xenon Studios Distribute?
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				Click bellow for the list!
			</Text>
			<Button font="--lead" margin="20px" type="link" href="https://xenon-partners.netlify.app">
				Click here!
			</Button>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
				text-align="center"
			>
				Access our submission portal
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				Click below to get access
			</Text>
			<Button font="--lead" margin="20px" type="link" href="https://xenon-portal.netlify.app">
				Click here!
			</Button>
		</Section>
		<Section background="--color-dark" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" border-color="#ffffff">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Link href="#" color="#000000">
						Some text
					</Link>
					<Box>
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact
						</Text>
						<Text
							font="--headline2"
							max-width="500px"
							margin="10px 0 0 0"
							color="#ffffff"
							sm-text-align="center"
						>
							Send demos and contact us here!
						</Text>
					</Box>
					<Text margin="0px 0px 0px 0px" color="#ffffff" />
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv" completeText="Thanks! A member of the Prism Audio team will reach out shortly!" errorMessage="Your message was not sent. Please contact a Prism Audio team member through different means if the form is still broken">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Name
									</Text>
									<Input width="100%" name="name" type="text" />
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Email
									</Text>
									<Input width="100%" type="email" name="email" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Message
									</Text>
									<Input as="textarea" rows="4" width="100%" name="message" />
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button>
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.FooterUniversal>
			<Override slot="text">
				© 2025 Xenon Studios. All rights reserved.
				<br />
				Site design done by minty's experiment lab (https://ebb.l5.ca/mintylab)
			</Override>
		</Components.FooterUniversal>
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
			<script place={"endOfHead"} rawKey={"67df6d2eaf493b2526755eb8"}>
				{"<!-- Elfsight Form Builder | Untitled Form Builder -->\n<script src=\"https://static.elfsight.com/platform/platform.js\" async></script>\n<div class=\"elfsight-app-671e35c7-21c3-42d4-b5e2-c48ecb7a158c\" data-elfsight-app-lazy></div>"}
			</script>
		</RawHtml>
	</Theme>;
});