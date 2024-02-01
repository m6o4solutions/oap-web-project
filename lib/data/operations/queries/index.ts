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

/* query to retrieve services page data */
export const qryServicesPage = gql`
	query qryServicesPage {
		pages(where: { slug: "services" }) {
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

/* query to retrieve all services data */
export const qryAllServices = gql`
	query qryAllServices {
		services {
			businessName
			businessLogo
			businessDescription {
				html
			}
			telephoneNumber
			emailAddress
			website
		}
	}
`;

/* query to retrieve pilots page data */
export const qryPilotsPage = gql`
	query qryPilotsPage {
		pages(where: { slug: "pilots" }) {
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
				list {
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
			galleryHeaderGalleryBlock {
				header {
					title
					subtitle
				}
				gallery
			}
			feesHeaderContentBlock {
				header {
					title
					subtitle
				}
			}
			fees {
				title
				structure {
					list {
						header {
							title
							subtitle
						}
					}
				}
			}
		}
	}
`;

/* query to retrieve about page data */
export const qryAboutPage = gql`
	query qryPilotsPage {
		pages(where: { slug: "about" }) {
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
				list {
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
			galleryHeaderGalleryBlock {
				header {
					title
					subtitle
				}
				gallery
			}
			benefitsHeaderContentBlock {
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
`;

/* query to retrieve home page data */
export const qryHomePage = gql`
	query qryHomePage {
		pages(where: { slug: "home" }) {
			pageTitle
			pageMetaDescription
			heroActionBlock {
				content {
					content {
						header {
							title
							subtitle
						}
					}
					image
				}
			}
		}
	}
`;
