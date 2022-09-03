import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import account from "./account";
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import project from "./project";
import topic from "./topic";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	name: "default",
	types: schemaTypes.concat([
		post,
		project,
		category,
		topic,
		account,
		blockContent,
	]),
});
