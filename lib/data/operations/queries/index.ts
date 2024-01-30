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

/* query to retrieve contact page data */
export const qryContactPage = gql`
	query qryContactPage {
		pages(where: { slug: "contact" }) {
			pageTitle
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
