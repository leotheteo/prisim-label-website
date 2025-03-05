import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Strong, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
			<meta name={"msapplication-TileColor"} content={"#272782"} />
		</Helmet>
		<Section
			sm-padding="8px 0 8px 0"
			quarkly-title="Header-6"
			padding="24px 0px 24px 0px"
			width="auto"
			height="auto"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				max-width="100%"
				width="100%"
				padding="0px 24px 0px 24px"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="20%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="20%"
				md-justify-content="flex-start"
				md-order="-1"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image
						src="https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"
						display="block"
						width="36px"
						height="36px"
						srcSet="https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17%3A34%3A40.476Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Prism Audio
					</Text>
				</LinkBox>
			</Box>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="flex-end"
				align-items="flex-start"
				flex-direction="row"
				width="auto"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="40%"
				md-justify-content="flex-start"
				md-display="none"
				height="auto"
			>
				<Link
					border-radius="8px"
					href="#"
					text-decoration-line="initial"
					border-style="solid"
					sm-padding="5px 10px 5px 10px"
					md-padding="5px 10px 5px 10px"
					sm-margin="10px 0px 10px 0px"
					font="--base"
					color="--darkL1"
					margin="0px 0px 0px 34px"
					md-margin="10px 0px 0px 0px"
					border-width="2px"
					padding="4px 12px 5px 12px"
					border-color="--color-darkL1"
					width="auto"
					height="auto"
				>
					Apply
				</Link>
				<Link
					font="--base"
					text-decoration-line="initial"
					margin="0px 0px 0px 16px"
					background="--color-darkL1"
					border-radius="8px"
					md-margin="0px 0px 0px 14px"
					href="#"
					color="#ffffff"
					padding="6px 12px 7px 12px"
					md-order="1"
					width="auto"
					height="auto"
				>
					For Clients
				</Link>
			</Box>
		</Section>
		<Section
			padding="60px 0 60px 0"
			sm-padding="40px 0 40px 0"
			background="--color-dark"
			display="flex"
			flex-direction="column"
		>
			<Override
				slot="SectionContent"
				flex-wrap="wrap"
				flex-direction="row"
				width="auto"
				height="auto"
				display="inline"
			/>
			<Section>
				<Section width="fit-content" height="fit-content" display="block" />
				<Section />
			</Section>
			<Text
				margin="0px"
				font="--headline1"
				md-font="--headline2"
				color="--lightD2"
				width="auto"
				padding="0px 32px 0px 0px"
				display="block"
				height="auto"
				letter-spacing="inherit"
				text-align="center"
			>
				Who are we?
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="auto"
				padding="0px 32px 0px 0px"
				height="auto"
				display="grid"
				text-align="center"
			>
				We're a multi-genre label that takes pride in promoting our diverse artists and ensuring their music reaches audiences quickly and efficiently through various Digital Service Providers (DSPs). Our expertise spans multiple music styles, allowing us to cater to a wide range of tastes and preferences.{"\n\n"}
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="auto"
				padding="0px 32px 0px 0px"
				height="auto"
				display="inline-block"
			>
				<br />
				<br />
				<br />
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
					<br />
				</Strong>
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="auto"
				padding="0px 32px 0px 0px"
				height="auto"
				display="inline-block"
				text-align="center"
			>
				We accept any artist as long as they have a minimum of one release per month. Any artist from any genre works! If you're a part of a collective, that is perfectly fine! Being signed to any PRO's is okay as well, as long as you provide your IPI number.
			</Text>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--orange" font="--lead" md-margin="0px 0px 20px 0px" />
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Services
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				border-width="auto"
				border-style="auto"
			>
				<Text margin="0px 0px 40px 0px" color="--light" font="--base">
					We offer quick distribution to all DSPs for free if you're accepted (~7 days from submittion)
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					We also do mixing and mastering for a small fee of $15, signed to this label or not. We require your vocals in .wav files and the instrumental in .mp3 or .wav.{" "}
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="auto"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				height="auto"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Who do we distribute to?
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="#F7FBFF"
					font="--base"
					width="auto"
					height="auto"
					text-align="center"
				>
					Note: all Content Recognition services require exclusive rights to the instrumental
					<br />
					<br />
					7digital (all platforms including: Barry’s, Canva, Deedo, Electric Jukebox, GrandPad, NEC, Onkyo, Dial by i.am+, eMusic, Global Eagle, The Firstclub, Global Radio, Mood Media, Mus.uy, Panasonic, Pinterest, Playlist for Life, Playster, PEEX, Snapchat, Soundtrack Your Brand, TDC, and Weyv)
					<br />
					<br />
					ACRCloud
					<br />
					<br />
					Amazon Music
					<br />
					<br />
					AMI Entertainment
					<br />
					<br />
					Anghami
					<br />
					<br />
					Apple Music (iTunes, Shazam){" "}
					<br />
					<br />
					Audible Magic – Fulfillment360
					<br />
					<br />
					Audible Magic – Rights360
					<br />
					<br />
					Facebook and Instagram
					<br />
					<br />
					aioSaavn
					<br />
					<br />
					JOOX
					<br />
					<br />
					KKBOX
					<br />
					<br />
					Kuaishou
					<br />
					<br />
					Mixcloud
					<br />
					<br />
					Napster
					<br />
					<br />
					NetEase Cloud Music
					<br />
					<br />
					Nuuday
					<br />
					<br />
					Pandora
					<br />
					<br />
					RX Music
					<br />
					<br />
					Shazam (Apple)
					<br />
					<br />
					Slacker
					<br />
					<br />
					Snap (7digital)
					<br />
					<br />
					SoundCloud
					<br />
					<br />
					Spotify
					<br />
					<br />
					Styngr (Audible Magic – Fulfillment360)
					<br />
					<br />
					TIDAL
					<br />
					<br />
					TikTok
					<br />
					<br />
					Trebel
					<br />
					<br />
					VL Group
					<br />
					<br />
					YouTube Content ID
					<br />
					<br />
					YouTube Music
					<br />
					<br />
					Many more more not listed here. Contact us for the full list.
				</Text>
			</Box>
		</Section>
		<Section background="--color-dark" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" border-color="#ffffff">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
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
						<Text font="--headline2" max-width="500px" margin="10px 0 0 0" color="#ffffff">
							Send demos and contact us here!
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
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