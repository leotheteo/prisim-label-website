import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
    <div style="padding: 20px 40px;">Edit this widget on the Components's Panel</div>
    <script src="https://static.elfsight.com/platform/platform.js" async></script>
    <div class="elfsight-app-671e35c7-21c3-42d4-b5e2-c48ecb7a158c" data-elfsight-app-lazy></div>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});