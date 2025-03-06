import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Icon, LinkBox, Box, Section } from "@quarkly/widgets";
import { FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
const defaultProps = {
	"padding": "50px 0 50px 0",
	"quarkly-title": "Footer-2",
	"background": "#000000"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "space-between",
			"sm-flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--base",
			"color": "#ffffff",
			"sm-margin": "0px 0px 15px 0px",
			"sm-text-align": "center",
			"children": <>
				© 2025 Prism Audio. All rights reserved.
				<br />
				Site design done by minty's experiment lab (https://ebb.l5.ca/mintylab)
			</>
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "grid",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"sm-align-self": "center"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaFacebook,
			"size": "24px",
			"color": "--primary",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"size": "24px",
			"color": "--primary",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox2": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitterSquare,
			"size": "24px",
			"color": "--primary",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox3": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaGithub,
			"size": "24px",
			"color": "--primary",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox4": {
		"kind": "LinkBox",
		"props": {
			"href": "/"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaYoutube,
			"size": "24px",
			"color": "--primary",
			"hover-color": "--dark",
			"transition": "background-color 1s ease 0s"
		}
	}
};

const FooterUniversal = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Box {...override("box1")}>
				<LinkBox {...override("linkBox")}>
					<Icon {...override("icon")} />
				</LinkBox>
				<LinkBox {...override("linkBox1")}>
					<Icon {...override("icon1")} />
				</LinkBox>
				<LinkBox {...override("linkBox2")}>
					<Icon {...override("icon2")} />
				</LinkBox>
				<LinkBox {...override("linkBox3")}>
					<Icon {...override("icon3")} />
				</LinkBox>
				<LinkBox {...override("linkBox4")}>
					<Icon {...override("icon4")} />
				</LinkBox>
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(FooterUniversal, { ...Section,
	defaultProps,
	overrides
});
export default FooterUniversal;