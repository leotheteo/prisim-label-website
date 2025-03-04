import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Button, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
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
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-4" width="auto" height="auto">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
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
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
						width="auto"
						height="auto"
					>
						Prism Audio{"\n\n"}
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="auto"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
				height="auto"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Button type="link" href="https://docs.google.com/forms/d/e/1FAIpQLSeqxt2vzCF_F90cRN2j9tRbuOfIq2Eu6n1BJurDvkgJGNqxbg/viewform?usp=dialog" width="auto" height="auto">
					Apply
				</Button>
				<Button type="link" href="https://docs.google.com/forms/d/e/1FAIpQLScb0hygBn_AMHkJbDxHyqWkv8NiiX1dH2Kl_oPU50eMyJJ59Q/viewform?usp=dialog" width="auto" height="auto">
					For Clients
				</Button>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
								lg-font="--headline3"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 2px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 8px 6px 8px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--grey" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
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
			/>
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
			>
				<br />
				Prism Audio distributes{" "}
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
				</Strong>
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="auto"
				padding="0px 32px 0px 0px"
				height="auto"
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
					We also do mixing and mastering for a small fee of $15, signed to this label or not. We require your vocals in .wav files and the instrumental in .MP3 or .wav.{" "}
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
					Audiomack
					<br />
					<br />
					AWA
					<br />
					<br />
					Beatport
					<br />
					<br />
					Beatsource
					<br />
					<br />
					BMAT (Commercial)
					<br />
					<br />
					Boomplay
					<br />
					<br />
					Canva (7digital)
					<br />
					<br />
					Claro Musica (iMusica)
					<br />
					<br />
					Curve
					<br />
					<br />
					Deedo (7digital)
					<br />
					<br />
					Deezer
					<br />
					<br />
					Dial by i.am+ (7digital)
					<br />
					<br />
					Electric Jukebox (7digital)
					<br />
					<br />
					eMusic (7digital)
					<br />
					<br />
					Facebook (Meta)
					<br />
					<br />
					Global Eagle (7digital)
					<br />
					<br />
					Global Radio (7digital)
					<br />
					<br />
					GrandPad (7digital)
					<br />
					<br />
					Gracenote
					<br />
					<br />
					iHeartRadio
					<br />
					<br />
					iMusica
					<br />
					<br />
					Instagram (Meta)
					<br />
					<br />
					Jaxsta
					<br />
					<br />
					JioSaavn
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
					PEEX (7digital)
					<br />
					<br />
					Peloton
					<br />
					<br />
					Pinterest (7digital)
					<br />
					<br />
					Playlist for Life (7digital)
					<br />
					<br />
					Playster (7digital)
					<br />
					<br />
					QOBUZ
					<br />
					<br />
					Qub Musique (QOBUZ)
					<br />
					<br />
					QQ Music (Tencent)
					<br />
					<br />
					Roxi (7digital)
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
					Supernatural
					<br />
					<br />
					TDC (7digital)
					<br />
					<br />
					Tencent (Kugou Music, Kuwo Music, QQ Music, WeSing)
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
					WeSing (TenCent)
					<br />
					<br />
					Weyv (7digital)
					<br />
					<br />
					YouTube Content ID
					<br />
					<br />
					YouTube Music
					<br />
				</Text>
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