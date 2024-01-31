type ContactFormNotificationProps = {
	readonly firstName: string;
	readonly lastName: string;
	readonly emailAddress: string;
	readonly telephoneNumber?: string;
	readonly messageTitle: string;
	readonly messageContent: string;
};

export const ContactFormNotification = ({
	firstName,
	lastName,
	emailAddress,
	telephoneNumber,
	messageTitle,
	messageContent,
}: ContactFormNotificationProps) => {
	return (
		<div>
			<p>Hello?</p>
			<p>A new contact message has been received with the following details:</p>
			<ul>
				<li>
					<strong>First Name:</strong> {firstName}
				</li>
				<li>
					<strong>Last Name:</strong> {lastName}
				</li>
				<li>
					<strong>Email:</strong> {emailAddress}
				</li>
				<li>
					<strong>Telephone Number:</strong> {telephoneNumber}
				</li>
				<li>
					<strong>Message Title:</strong> {messageTitle}
				</li>
				<li>
					<strong>Message Content:</strong> {messageContent}
				</li>
			</ul>
			<p>
				Please acknowledge this message and initiate the process to fulfil this
				request as soon as possible.
			</p>
			<p>Your prompt attention is appreciated.</p>
			<p>
				Thank you for your dedication to providing exceptional client support.
			</p>
			<p>
				<strong>MTA @ S3</strong>
			</p>
		</div>
	);
};
