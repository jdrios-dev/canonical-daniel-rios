import CardComponent from "@/components/Card.component";
import React from "react";

export async function getServerSideProps() {
	const res = await fetch(
		"https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
	);
	const data = await res.json();
	return { props: { data } };
}

const index = ({ data }) => {
	return (
		<div>
			{data?.map((item) => (
				<CardComponent key={item.id} item={item} />
			))}
		</div>
	);
};

export default index;
