"use client";

import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import {
	Button,
	Checkbox,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@/components/index";

const formSchema = z.object({
	firstName: z.string().min(1, { message: "What is your first name?" }),
	lastName: z.string().min(1, { message: "What is your last name?" }),
	emailAddress: z.string().email({ message: "What is your email address?" }),
	telephoneNumber: z.string().optional(),
	messageTitle: z.string({
		required_error: "What is the title of your message?",
	}),
	messageContent: z
		.string()
		.min(10, { message: "What do you want us to help you achieve?" })
		.max(500, {
			message: "Your message details should not be longer than 500 characters.",
		}),
	consent: z.boolean({
		required_error:
			"Do you consent for us to use the information provided to contact you?",
	}),
	policy: z.boolean({
		required_error: "Do you accept the terms of the privacy policy?",
	}),
});

export const ContactFormBlock = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			emailAddress: "",
			telephoneNumber: "",
			messageTitle: "",
			messageContent: "",
		},
	});

	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleRequest = async (values: z.infer<typeof formSchema>) => {
		try {
			console.log(values);

			/* show success toast */
			toast.success("Thank you! We'll be in touch soon.");
		} catch (error) {
			/* the response was not successful */
			toast.error("An unknown error has occured. Please try again.");
		}
	};

	return (
		<section className="mx-auto max-w-4xl rounded-md bg-secondary p-3 dark:bg-transparent">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleRequest)} className="space-y-3">
					<div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First Name</FormLabel>
									<FormControl>
										<Input placeholder="First Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last Name</FormLabel>
									<FormControl>
										<Input placeholder="Last Name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="emailAddress"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email Address</FormLabel>
									<FormControl>
										<Input
											placeholder="Email Address"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="telephoneNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="Phone Number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="mt-3 grid grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="messageTitle"
							render={({ field }) => (
								<FormItem>
									<FormLabel>What is th title of your message?</FormLabel>
									<Select onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Message Title" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="General Inquiry">
												General Inquiry
											</SelectItem>
											<SelectItem value="Membership Inquiry">
												Membership Inquiry
											</SelectItem>
											<SelectItem value="Prior Permission Required Request">
												Prior Permission Required Request
											</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="messageContent"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Message Content</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Share your concern with clarity, providing as much detail as possible without being overly verbose."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="mt-5 grid grid-cols-1 gap-5">
						<FormField
							control={form.control}
							name="consent"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex items-center space-x-2">
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
											<Label htmlFor="consent">
												I consent for the use of the information provided in
												this form to contact me.
											</Label>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="policy"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex items-center space-x-2">
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
											<Label htmlFor="policy">
												I accept the terms of the{" "}
												<Link
													href="/privacy-policy"
													className=" text-primary underline"
												>
													privacy policy.
												</Link>
											</Label>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<Button type="submit" className="mt-5 w-full font-semibold uppercase">
						Submit Request
					</Button>
				</form>

				<div className="my-5 space-y-3 text-pretty text-center text-xs">
					<p>
						Your email address will be added to our database where we shall
						occasionally send you useful information and offers. We will never
						sell your data.
					</p>

					<p>
						Please note that Orly Airpark operates on{" "}
						<strong>Prior Permission Required</strong> basis.
					</p>
				</div>
			</Form>
		</section>
	);
};
