import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Strong, Icon, Span, List, Input, Button, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { FiMusic, FiEdit } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
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
						Prism Audio
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
						Prism Audio is a multi-genre distributor that focuses on reliable and fast distribution for all artists
						<br />

					</Text>
				</Box>
			</Box>
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
				About Prism Audio
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
					Services at Prism Audio
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
							<Span font-weight="normal">
								We offer quick distribution to all DSPs for free if you're accepted (~7 days from submission)
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
							Professional mixing and mastering.
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
								{" "}We also do mixing and mastering for a small fee of $15, signed to this label or not. We require your vocals in .wav format and the instrumental in .mp3 or .wav.{" \n "}
							</Span>
						</Span>
					</Text>
				</Box>
			</List>
		</Section>
		import React from 'react';
import theme from 'theme';
import { Theme, Link, Text, Box, Section, Icon } from '@quarkly/widgets';
import { Helmet } from 'react-helmet';
import { GlobalQuarklyPageStyles } from 'global-page-styles';
import { RawHtml, Override, Formspree } from '@quarkly/components';
import * as Components from 'components';
import { FiMusic, FiEdit } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from 'react-icons/fa';

const dsps = [
    '7digital (all platforms including: Barry’s, Canva, Deedo, Electric Jukebox, GrandPad, NEC, Onkyo, Dial by i.am+, eMusic, Global Eagle, The Firstclub, Global Radio, Mood Media, Mus.uy, Panasonic, Pinterest, Playlist for Life, Playster, PEEX, Snapchat, Soundtrack Your Brand, TDC, and Weyv)',
    'ACRCloud',
    'Amazon Music',
    'AMI Entertainment',
    'Anghami',
    'Apple Music (iTunes, Shazam)',
    'Audible Magic – Fulfillment360',
    'Audible Magic – Rights360',
    'Facebook and Instagram',
    'JioSaavn',
    'JOOX',
    'KKBOX',
    'Kuaishou',
    'Mixcloud',
    'Napster',
    'NetEase Cloud Music',
    'Nuuday',
    'Pandora',
    'RX Music',
    'Slacker',
    'Snap (7digital)',
    'SoundCloud',
    'Spotify',
    'Styngr',
    'TIDAL',
    'TikTok',
    'Trebel',
    'VL Group',
    'YouTube Content ID',
    'YouTube Music',
];

export default (() => {
  
                <link rel={"shortcut icon"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} type={"image/x-icon"} />
                <link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
                <link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
                <link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
                <link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
                <meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/67c737959335410018cacb84/images/Pirsim%20Audio.png?v=2025-03-04T17:34:40.476Z"} />
                <meta name={"msapplication-TileColor"} content={"#272782"} />
            </Helmet>
            <Section padding="80px 0 80px 0" quarkly-title="Content-5" background="#000000">
                <Override slot="SectionContent" padding="0px 150px 0px 0px" lg-padding="0px 0 0px 0px" />
                <Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="--primary" max-width="640px">
                    Our distribution networks
                </Text>
                <Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-sans" max-width="640px" color="#ffffff">
                    Where do we distribute to?
                </Text>
                <Text margin="0px 0px 25px 0px" font="normal 300 25px/1.5 --fontFamily-sans" color="#ffffff" max-width="640px">
                    Prism Audio distributes to over 70+ DSPs (Digital Service Providers). Our providers can be seen below!
                </Text>
                <Box as="ul" list-style-type="none" padding="0" margin="0" color="#ffffff">
                    {dsps.map((dsp, index) => (
                        <Box as="li" key={index} margin="10px 0">
                            {dsp}
                        </Box>
                    ))}
                </Box>
                <Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#ffffff" max-width="640px">
                    Note: all Content Recognition services require exclusive rights to the instrumental.
                </Text>
            </Section>
            {/* Other sections and components */}
        </Theme>
    );
});

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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"67c737959335410018cacb82"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
