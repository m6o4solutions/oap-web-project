import { gql } from "graphql-request";

/* create a contact request */
export const createMessage = gql`
	mutation createMessage(
		$firstName: String!
		$lastName: String!
		$emailAddress: String!
		$telephoneNumber: String
		$messageTitle: String!
		$messageContent: String!
	) {
		createMessage(
			data: {
				firstName: $firstName
				lastName: $lastName
				emailAddress: $emailAddress
				telephoneNumber: $telephoneNumber
				messageTitle: $messageTitle
				messageContent: $messageContent
			}
		) {
			id
		}
	}
`;
