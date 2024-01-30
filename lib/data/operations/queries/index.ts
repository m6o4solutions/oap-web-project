import { gql } from "graphql-request";

/* query to retrieve global data */
export const qryGlobal = gql`
	query qryGlobal {
		globals(where: { siteName: "Orly Airpark" }) {
			siteName
			siteMetaDescription
			siteLogo
			siteTagline
			siteContactDetails {
				list {
					header {
						title
					}
					content {
						html
					}
				}
			}
			navigationHeader {
				links {
					label
					url
				}
			}
			navigationFooter {
				links {
					label
					url
				}
			}
		}
	}
`;
