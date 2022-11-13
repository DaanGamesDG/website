import Head from "next/head";
import React from "react";

interface Props {
	title: string;
}

const HeadTitle: React.FC<Props> = ({ title }) => {
	return (
		<Head>
			<title>{title}</title>
		</Head>
	);
};

export default HeadTitle;
