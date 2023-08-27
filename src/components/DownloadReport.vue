<template>
    <div>
        <div class="text-center text-gray07">
			<p class="text-2xl leading-[64px] font-semibold">Download Report</p>
			<p class="text-sm font-normal">
				Complete this form to get full access to the report
			</p>
        </div>

		<form
			action="https://sycamore.us10.list-manage.com/subscribe/post?u=4673517822183d1554b66f2e5&amp;id=74aa277f31&amp;f_id=006ba3e5f0"
			method="post"
			id="mc-embedded-subscribe-form"
			name="mc-embedded-subscribe-form"
			target="_self"
		>
			<div class="mt-10">
				<div class="mt-4">
					<label for="name" class="text-black100">
						First name
					</label>
					<input
						id="mce-FNAME"
						name="FNAME"
						type="text"
						placeHolder="first name"
						v-model="formData.firstname"
						class="px-5 py-4 text-sm w-full h-[60px] mt-2 font-normal border border-grayD3 "
					/>
					<small
						v-if="error.firstname.length > 0"
						class="block text-red-500 text-xs pt-2"
					>{{ error.firstname }}</small>
				</div>

				<div class="mt-4">
					<label for="name" class="text-black100">
						Last name
					</label>
					<input
						id="mce-LNAME"
						name="LNAME"
						type="text"
						placeHolder="last name"
						v-model="formData.lastname"
						class="px-5 py-4 text-sm w-full h-[60px] mt-2 font-normal border border-grayD3 "
					/>
					<small
						v-if="error.lastname.length > 0"
						class="block text-red-500 text-xs pt-2"
					>{{ error.lastname }}</small>
				</div>

				<div class="mt-4">
					<label for="name" class="text-black100">
						Email
					</label>
					<input
						id="mce-EMAIL"
						name="EMAIL"
						type="email"
						placeHolder="your email address"
						v-model="formData.email"
						class="px-5 py-4 text-sm w-full h-[60px] mt-2 font-normal border border-grayD3 "
					/>
					<small
						v-if="error.email.length > 0"
						class="block text-red-500 text-xs pt-2"
					>{{ error.email }}</small>
				</div>

				<div class="mt-4">
					<small v-if="error.all.length > 0" class="text-red-500 text-xs">
						{{error.all}}
					</small>
				</div>

				<div class="mt-10 mb-8">
					<button
						type="button"
						@click="validate"
						:disabled="isLoading"
						class="bg-primary text-white flex items-center justify-center py-5 px-11 transition ease-in-out duration-500 rounded-[10px] w-full"
					>
						<component :is="ArrowUpRightVue" class="mr-4" />
						{{ isLoading ? "Submitting..." : "Download report" }}
					</button>
				</div>

				<button
					type="submit"
					class="hidden"
					id="mc-embedded-subscribe"
					name="subscribe"
				></button>
			</div>
		</form>

    </div>
</template>

<script>
import ArrowUpRightVue from "@/svg/ArrowUpRight.vue";

export default {
	name: "DownloadReport",
	data() {
		return {
			isLoading: false,
			ArrowUpRightVue,

			formData: {
				firstname: "",
				lastname: "",
				email: ""
			},
			error: {
				firstname: "",
				lastname: "",
				email: "",
				all: ""
			}
		};
	},

	methods: {
		downloadReport() {
			this.isLoading = true;
			document.getElementById("mc-embedded-subscribe").click();
		},

		validate() {
			this.error.firstname = "";
			this.error.lastname = "";
			this.error.email = "";
			this.error.all = "";

			if (
				this.formData.firstname.length < 1 ||
				this.formData.lastname.length < 1 ||
				this.formData.email.length < 1 
			) {
				this.error.all = "Please complete all fields";

			} else {
				const format = /^[A-Za-z]+$/;
				const mailformat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
				
				if (!format.test(this.formData.firstname)) {
					this.error.firstname = "First name seems to posses invalid characters";

				} else if (!format.test(this.formData.lastname)) {
					this.error.lastname = "Last name seems to posses invalid characters";

				} else if (!mailformat.test(this.formData.email)) {
					this.error.email = "Email seems to be invalid";

				} else {
					this.downloadReport();
				}
			}
		}
	}
}
</script>