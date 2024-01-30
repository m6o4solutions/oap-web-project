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

/* query to retrieve privacy policy page data */
export const qryPrivacyPolicyPage = gql`
	query qryPrivacyPolicyPage {
		pages(where: { slug: "privacy-policy" }) {
			pageTitle
			slug
			pageMetaDescription
			heroActionBlock {
				content {
					content {
						header {
							title
						}
					}
					image
				}
			}
			pasHeaderContentImageListBlock {
				header {
					content {
						header {
							title
							subtitle
						}
						content {
							html
						}
					}
				}
			}
		}
	}
`;
