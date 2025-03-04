import React from "react";
import theme from "theme";
import { Theme, Link, Section, Text, Strong, Box, Input, Button } from "@quarkly/widgets";
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
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
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
				Prism Audio distributes to
				<br />
				Spotify
				<br />
				Apple Music
				<br />
				Amazon Music
				<br />
				YouTube Music
				<br />
				And YouTube Content ID,
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
					{" "}if you have the rights.
					<br />
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
					Facebook (Meta)
					<br />
					<br />
					Global Eagle (7digital)
					<br />
					<br />
					iMusica
					<br />
					<br />
					Instagram (Meta)
					<br />
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
					Kugou (Tencent)
					<br />
					<br />
					Kuwo (Tencent)
					<br />
					<br />
					Meta (Facebook and Instagram)
					<br />
					<br />
					Mixcloud
					<br />
					<br />
					MoodMedia (7digital)
					<br />
					<br />
					Mus.uy (7digital)
					<br />
					<br />
					Napster
					<br />
					<br />
					NetEase Cloud Music
					<br />
					<br />
					NEC (7digital)
					<br />
					<br />
					Nuuday
					<br />
					<br />
					Onkyo (7digital)
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
					Soundtrack Your Brand (7digital)
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
					TouchTunes
					<br />
					<br />
					Traxsource
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
							Email us, we would love to hear form you
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