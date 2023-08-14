<template>
  <main class="main">
    <particles />

    <section class="flex flex-col justify-center items-center ">
      <div
        class="h-42 w-full pt-48 pb-20 bg-no-repeat bg-cover flex flex-col justify-center items-center px-6 md:px-20 banner"
      >
        <div class="absolute left-0 bottom-30 z-0">
          <FaqPattern1 />
        </div>
        <div class="absolute right-0 bottom-40 z-0">
          <FaqPattern2 />
        </div>
        <div
          class="faq-header text-center text-gray07 font-semibold text-6xl md:w-1/3"
          style="line-height:4rem"
        >
          <h1>Frequently Asked Questions</h1>
        </div>

        <!-- <div class="w-full md:w-5/12 mt-8 relative">
          <input
            type="text"
            placeholder="Search for anything"
            class="search-input focus:shadow-md"
            v-model="search"
          />
          <span @click="checkResults" class="search right-4 top-4">
            <search />
          </span>
        </div> -->
      </div>

      <!-- FAQ TABS -->
      <div class="container">
        <div class="flex justify-center">
          <nav class="flex flex-row">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="toggleTab(index + 1, tab.toLowerCase())"
              :class="
                `${
                  activeTab == index + 1
                    ? 'text-gray07 font-semibold border-b-2 border-primary'
                    : ''
                }`
              "
              class="text-gray-500 text-xs md:text-base py-4 px-1 md:px-6 block outline-none font-medium transition-all duration-500 cursor-pointer"
            >
              {{ tab }}
            </button>
          </nav>
        </div>

        <!-- FREQUENTLY ASKED QUESTIONS -->
        <div class="mb-12">
          <div sm="6">
            <div class="md:w-2/3 m-auto">
              <div v-for="faq in faqs" :key="faq.id">
                <accordion :faq="faq" />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// import Search from "@/svg/SearchIcon.vue";
import Accordion from "../components/Accordion.vue";
import FaqPattern1 from "@/svg/FaqPattern1.vue";
import FaqPattern2 from "@/svg/FaqPattern2.vue";
export default {
  name: "Faq",

  metaInfo: {
    title: "Sycamore FAQ | ",
    titleTemplate: "%s Fequently Asked Questions -Sycamore.ng",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Sycamore.ng Frequently Asked Questions - Learn about Sycamore, Sycamore App, Loan Friends, How to apply for loans, Investment, Loan Repayments etc."
      },
      {
        vmid: "keywords",
        name: "keywords",
        content:
          "sycamore, sycamore solutions, sycamore FAQ, Frequently Asked Questions"
      }
    ]
  },

  components: {
    // Search,
    Accordion,
    FaqPattern1,
    FaqPattern2,
  },

  data() {
    return {
      search: "",
      selectedTab: 1,
      filterResult: [],
      collapseStates: [false, false, false],
      activeTab: 1,
      tabName: "general",
      faqs: [],
      tabs: ["General", "Sycamore 2.0", "Loans", "Investment", "Loan Friends"],
      allFaqs: [
        {
          id: "general_1",
          category: "general",
          question: "What is Sycamore?",
          answers: [
            "Sycamore is a peer-to-peer platform that offers digital payments with integrated third party services. Our digital experience stands relevant to a diverse group of individuals and small business owners who are looking to grow their finances. You can open an account in less than 3 minutes at no cost, access salary and business loans, make extra income by lending to eligible borrowers, pay all your bills, track and recover all the loans you give to your friends and families."
          ]
        },
        {
          id: "general_2",
          category: "general",
          question: "Is Sycamore a registered entity?",
          answers: [
            "Yes. We’re covered by the Money Lenders Act cap 52. Our RC Number is: RC1505897"
          ]
        },
        {
          id: "general_3",
          category: "general",
          question:
            "What makes Sycamore unique?",
          answers: [
            "We have curated the best investment and credit products for you. What’s more? Our unique product: Loan Friends is the first relationship based lending product in all of Africa. With Loan Friends, you can lend or borrow from your friends and family with confidence."
          ]
        },
        {
          id: "general_4",
          category: "general",
          question: "Where’s your office and do you have branches?",
          answers: [
            "Our Head Office is located at 53, Oduduwa Way, Ikeja GRA. We have physical coverage in Ibadan, Abuja, Port Harcourt and some parts of Ogun State."
          ]
        },
        {
          id: "general_5",
          category: "general",
          question: "Are my funds safe with Sycamore?",
          answers: [
            "Absolutely. We have partnered with 2 of the most trusted commercial banks in the country to hold your funds. We do not hold your money in any way."
          ]
        },
        {
          id: "general_6",
          category: "general",
          question: "How can I add money to my Sycamore account?",
          answers: [
            "By signing up up on the mobile app and creating a Wema or Providus virtual account."
          ]
        },
        {
          id: "general_7",
          category: "general",
          question: "What kind of account will I get when I sign up?",
          answers: [
            "You will get a virtual account you can use for savings, bills payment, transfers to any bank in Nigeria and much more."
          ]
        },
        {
          id: "general_8",
          category: "general",
          question: "Is there a minimum balance I must fund my account with?",
          answers: [
            "Not at all. We operate accounts with zero balances."
          ]
        },
        {
          id: "general_9",
          category: "general",
          question: "Is there a maximum balance I can fund my account with?",
          answers: [
            "Same savings account limit applies. However there are limits to how much you can withdraw daily depending on your Account tier."
          ]
        },
        {
          id: "general_10",
          category: "general",
          question: "What should I do if I need help?",
          answers: [
            "You can easily reach with the live chat option in your Sycamore App or on our website.",
            "You may also send us an email at complaints@sycamore.ng or call 017002021."
          ]
        },

        


        {
          id: "sycamore_1",
          category: "sycamore 2.0",
          question: "What is Sycamore 2.0?",
          answers: [
            "This version of the Sycamore app signifies a new phase of accessibility to our services with an enhanced user experience"
          ]
        },
        {
          id: "sycamore_2",
          category: "sycamore 2.0",
          question: "Will I need to sign up again to this app?",
          answers: [
            "Not at all. If you’re an existing user, you may sign in with the same credentials as you did in older versions."
          ]
        },
        {
          id: "sycamore_3",
          category: "sycamore 2.0",
          question: "Why should I upgrade my app to this new version?",
          answers: [
            "We have added new exciting features and optimized the experience of old features. We recommend that you upgrade to this version for you to enjoy the best of Sycamore."
          ]
        },
        {
          id: "sycamore_4",
          category: "sycamore 2.0",
          question: "What are the new features on this version of the app?",
          answers: [
            "Now you can request and customize your account number at the tip of a finger. We have also partnered with Wema bank to give you access to more virtual accounts. We added PayForMe: a unique product that allows you help your friends pay for their bills and they pay you back later and vice versa."
          ]
        },
        {
          id: "sycamore_5",
          category: "sycamore 2.0",
          question: "Will the old app be deactivated?",
          answers: [
            "Not immediately. Android and ios versions 1.0.1 and 1.0.2 will be available until February 28, 2023. From March you will need to be on versions Android versions 1.0.3, 1.0.4 or 2.0.0 or ios versions 1.0.3 and 2.0.0"
          ]
        },
        {
          id: "sycamore_6",
          category: "sycamore 2.0",
          question: "What are the oldest versions of Android and iOS are compatible with the new app?",
          answers: [
            "Android 5 and ios 12"
          ]
        },
        {
          id: "sycamore_7",
          category: "sycamore 2.0",
          question: "What is my maximum transfer limit?",
          answers: [
            "The maximum amount you can transfer daily depends on the tier you belong to. Our highest tier is tier 3 and you can transfer up to 5 million daily once you upgrade to that tier."
          ]
        },
        {
          id: "sycamore_8",
          category: "sycamore 2.0",
          question: "Why am I being asked to upgrade my account?",
          answers: [
            "In order to dissuade fraudulent actors, stay compliant with CBN policies while also protecting your account, we need you to validate your identity. This will also help us place you in an appropriate tier so you can transact seamlessly."
          ]
        },
        {
          id: "sycamore_9",
          category: "sycamore 2.0",
          question: "What are the requirements needed to get an account number?",
          answers: [
            "Just your basic KYC details submitted at sign up. Your government name, email address, phone number linked to your BVN or NIN and your selfie."
          ]
        },
        {
          id: "sycamore_10",
          category: "sycamore 2.0",
          question: "I am being asked to create a tag, what does it mean?",
          answers: [
            "Tags allow you personalize your experience on Sycamore. With tags , other sycamore users can send you money at no cost"
          ]
        },
        {
          id: "sycamore_11",
          category: "sycamore 2.0",
          question: "Why do you need my utility bill?",
          answers: [
            "To validate the address you gave us at onboarding as required by regulatory authorities. Therefore, it is important that the address you gave us at sign up is the same as the address on your utility bill. The Utility bill does not have to bear your name."
          ]
        },
        {
          id: "sycamore_12",
          category: "sycamore 2.0",
          question: "Are there any new ways to fund my wallet?",
          answers: [
            "Absolutely. You can now self-generate a Wema or Providus account number to fund your wallet. You may also share your tag with another Sycamore user or use the pay online option to fund your wallet with your card"
          ]
        },
        {
          id: "sycamore_13",
          category: "sycamore 2.0",
          question: "Why am I getting charged for funding my wallet using the ‘ Pay Online’ option?",
          answers: [
            "Now that we can allow you self-generate bank accounts, we can afford to shed the online charges charged by our payment processor when you fund your wallet online. The charge is 1.5% of the amount  + N100 fee capped at N2000. N100 is waived for amounts less than N2500."
          ]
        },
        {
          id: "sycamore_14",
          category: "sycamore 2.0",
          question: "How much am I charged for transfers?",
          answers: [
            "Transfers between Sycamore users are free. However, transfers to other banks are not due to charges from our payment processor. We charge N10 for transfers < =N5000, N25 for transfers greater than 5000 but less than N50,000 and N50 for transfers >=N50,000.",
            "We’re currently working on ways to give a more competitive price."
          ]
        },
        {
          id: "sycamore_15",
          category: "sycamore 2.0",
          question: "How much am I charged for paying bills or buying airtime?",
          answers: [
            "No fees. Buying airtime, data or paying for cable and electricity bills on Sycamore are absolutely free of charge."
          ]
        },
        {
          id: "sycamore_16",
          category: "sycamore 2.0",
          question: "Can I get my Wallet Statement?",
          answers: [
            "Absolutely. In one click, you can go to More→Wallet Statement on the mobile app, select a date range and ask that your statement be sent in pdf format to your registered email"
          ]
        },
        {
          id: "sycamore_17",
          category: "sycamore 2.0",
          question: "I think I submitted the wrong details at sign up, how can I correct them?",
          answers: [
            "You can edit every information you submit to us under your profile page except your email address and phone number because they're your primary identities. However, you can write to us at complaints@sycamore.ng for us to change it."
          ]
        },
        {
          id: "sycamore_18",
          category: "sycamore 2.0",
          question: "Why do you need my BVN or NIN?",
          answers: [
            "To simply verify your identity. Your BVN or NIN does not give us access to your bank accounts."
          ]
        },
        {
          id: "sycamore_19",
          category: "sycamore 2.0",
          question: "Why can’t I verify my BVN or NIN?",
          answers: [
            "Your BVN or NIN verification may fail if the KYC information(mobile number or date of birth) you submitted does not match your BVN or NIN records. To solve this, you may visit your bank to update your records or write to us at complaints@sycamore.ng"
          ]
        },
        {
          id: "sycamore_20",
          category: "sycamore 2.0",
          question: "Can I have more than one virtual account with Sycamore?",
          answers: [
            "Each user can only have one virtual account at a time."
          ]
        },
        {
          id: "sycamore_21",
          category: "sycamore 2.0",
          question: "Am I charged for stamp duty like other Banks/Fintechs do?",
          answers: [
            "No, we do not charge you for stamp duty"
          ]
        },
        {
          id: "sycamore_22",
          category: "sycamore 2.0",
          question: "Can I ask for my data to be deleted?",
          answers: [
            "Considering the array of awesome services we have to offer, we advise that you keep your Sycamore account active as you might need it in the future. However, if you insist on deleting your account, you can simply do so on the mobile app.",
            "Please note that for your request to be successful, you will need to clear any outstanding loan facility with us."
          ]
        },
        {
          id: "sycamore_23",
          category: "sycamore 2.0",
          question: "Why do I need to verify my BVN/NIN?",
          answers: [
            " Your BVN is required by law to verify your identity. By no means do we have any access to your bank accounts. This helps us to protect you against identity theft and fraud."
          ]
        },
        {
          id: "sycamore_24",
          category: "sycamore 2.0",
          question: "Are my card details safe?",
          answers: [
            "Your security is of utmost concern to us, your card details are stored with a PCI-DSS compliant payment processor, Paystack."
          ]
        },
        {
          id: "sycamore_25",
          category: "sycamore 2.0",
          question: "What do I do if my card is expired or missing?",
          answers: [
            "Simply request for a new debit card from your bank and connect it to your Sycamore account on the Mobile app or web dashboard. You may also reach us at info@sycamore.ng to set it up."
          ],
          link: true
        },
        {
          id: "sycamore_26",
          category: "sycamore 2.0",
          question:
            "What if I no longer have access to the phone number linked to my BVN?",
          answers: [
            "In this scenario, kindly contact your bank to update the phone number for us to verify you successfully."
          ],
          link: ""
        },
        {
          id: "sycamore_27",
          category: "sycamore 2.0",
          question: "Is my money safe with you?",
          answers: [
            "We are currently in partnership with a couple of commercial banks where your money sits. Your money does not reside with us in any way."
          ],
          link: ""
        },
        {
          id: "sycamore_28",
          category: "sycamore 2.0",
          question: "What happens if I change my device?",
          answers: [
            "You are allowed to sign in on one device per profile. If you attempt to sign in on a new device, you will be required to authenticate before you are allowed access."
          ],
          link: ""
        },
        {
          id: "sycamore_29",
          category: "sycamore 2.0",
          question:
            "What happens if I think my password / transaction pin details are compromised?",
          answers: [
            "We urge you to keep your details confidential at all times. If you suspect that your details are compromised in any way, please send an email to info@sycamore.ng or call 017002021 immediately.",
            "You may also change your password and/or pin immediately by clicking forget password or reset pin on the security page of the more section on the Mobile app or web dashboard. "
          ],
          link: true
        },

        {
          id: "loans_1",
          category: "loans",
          question: "How do you determine my eligibility for a loan?",
          link: "",
          answers: [
            "You should be between 22 and 59 years old",
            "You must run an account",
            "You must live and work in Lagos State",
            "You must have a verifiable source of income",
            "You must have a clean Credit Bureau report"
          ]
        },
        {
          id: "loans_2",
          category: "loans",
          question:
            "What documents do I need to present to get an individual loan?",
          answers: [
            "Bank statement for the most recent six months",
            "Signed online Direct Debit form",
            "Valid proof of identification",
            "Proof of residency (Utility Bill)",
            "Recent passport photograph (or selfie)"
          ]
        },
        {
          id: "loans_3",
          category: "loans",
          question:
            "What documents do I need to present to get a business loan?",
          answers: [
            "Bank statement that shows your business’ most recent activities in 6 months",
            "Signed online Direct Debit form",
            "CAC documents - All forms including form Co2 (Return of Allotments), Co7 (Particulars of Directors), Memo and Articles of Association, Certificate of Incorporation or Business name as the case maybe.",
            "Collateral documents (Premium for car tracker to be paid for by the customer or deducted before disbursement)",
            "A valid proof of identification (Preferably driver’s license,  international passport, voter’s card or National ID)",
            "Proof of residency (Utility Bill)",
            "Recent Passport photograph or selfie"
          ]
        },
        {
          id: "loans_4",
          category: "loans",
          question: "How much can I borrow?",
          answers: [
            "You can borrow between  ₦100,000 - ₦5,000,000 depending on your current capacity and risk profile."
          ]
        },
        {
          id: "loans_5",
          category: "loans",
          question:
            "Are there any associated fees I am required to pay with your loans?",
          answers: [
            "Besides the interest, there are no other charges. Interest is charged between 3.5% - 5% flat monthly on the amount disbursed."
          ]
        },
        {
          id: "loans_6",
          category: "loans",
          question: "Are there any upfront payments to be made?",
          answers: ["There are no upfront payments or hidden charges."]
        },
        {
          id: "loans_7",
          category: "loans",
          question: "Does Sycamore support businesses that are just starting?",
          answers: [
            "This is relative. We consider businesses that have complete registration documentation and at least 6 months of cash flow in their business account(s)"
          ]
        },
        {
          id: "loans_8",
          category: "loans",
          question: "Can I apply for another loan while I have one running?",
          answers: ["You can only apply for a top-up while a loan is running."]
        },
        {
          id: "loans_9",
          category: "loans",
          question:
            "I recently completed a loan payment. Do I need to re-submit all my documents to apply for a new loan?",
          answers: [
            "All we need to proceed is your bank statement for the last 3 months. You can proceed to the Mobile app or web dashboard to submit a new statement."
          ]
        },
        {
          id: "loans_10",
          category: "loans",
          question: "How do I make repayment?",
          answers: [
            "All you have to do is to set-up a direct debit mandate on your salary/business account , set up your Bank card on the Mobile app/web dashboard or ensure your wallet is funded on or before due date with repayment amount."
          ]
        },
        {
          id: "loans_11",
          category: "loans",
          question:
            "Can I liquidate in part or in full before my repayment is due?",
          answers: [
            "Yes, you can. Simply sign in to the Mobile app or dashboard, click on ‘Make payment’ and indicate the amount you want to pay back. You can pay online with your card or from your wallet. The repaid amount will be deducted from your loan balance instantly. You may send an email to repayments@sycamore.ng if you have further questions."
          ]
        },
        {
          id: "loans_12",
          category: "loans",
          question: "What happens if I change jobs or salary date changes?",
          answers: [
            "Simply sign in to the Mobile app or web dashboard to update your details. You may also send us an email at repayments@sycamore.ng to update your profile."
          ]
        },
        {
          id: "loans_13",
          category: "loans",
          question: "What happens if I cannot make a repayment?",
          answers: [
            "Failure to make your repayment will result in penalties which may include contacting your employer, blacklisting your BVN, or sending debt collectors to your home and/or place of work.",
            "Additionally, there are fines that will be accrued on the outstanding loan amount. You may send an email to repayments@sycamore.ng before hand if you cannot repay on the due date for any reason."
          ]
        },
        {
          id: "loans_14",
          category: "loans",
          question: "I was debited twice for the same repayment",
          answers: [
            "We apologise for this. Please send an email to repayments@sycamore.ng with evidence of debit. Your money will be refunded within 24 hours."
          ]
        },
        {
          id: "loans_15",
          category: "loans",
          question: "Will I be charged for early loan liquidation?",
          answers: [
            "Not at all. Your payment will only consist of the outstanding principal and interest accrued up to the liquidation date."
          ]
        },




        {
          id: "investment_1",
          category: "investment",
          question: "How do I invest my money with you?",
          answers: [
            "You can invest a minimum of ₦100,000 and receive up to 16.5% per annum on your investment upfront, monthly, quarterly or on maturity date"
          ]
        },
        {
          id: "investment_2",
          category: "investment",
          question: "Is my investment safe with you?",
          answers: [
            "Your investment is covered under our insurance policy. We also have a license from the Lagos State Government authority to accept investments. Most importantly, we have never defaulted on payout to date"
          ]
        },
        {
          id: "investment_3",
          category: "investment",
          question: "Will I be charged for early liquidation?",
          answers: [
            "You can get your money back on the maturity date but if you wish to liquidate before the due date, you will be charged 30% - 50% of your total accrued interest."
          ]
        },
        {
          id: "investment_4",
          category: "investment",
          question: "Are there any charges on my investment?",
          answers: [
            "A 10% Withholding Tax (WHT) made mandatory by the Government is charged on your total accrued interest."
          ]
        },
        {
          id: "investment_5",
          category: "investment",
          question:
            "How long will it take to get my money if I want to liquidate my investment?",
          answers: [
            "You will receive your money within 24 hours of your liquidation request. You may liquidate on the mobile app or by sending an email to info@sycamore.ng"
          ]
        },




        {
          id: "loan_friends_1",
          category: "loan friends",
          question: "What is Loan Friends?",
          answers: [
            "Loan Friends is a unique product that allows you lend or borrow from your friends and family with ease. With Loan Friends, you don’t have to worry about having awkward conversations with your debtors as this product will help you send automated reminders and help you get your money back. You can also add interest rates and make extra cash on your loans."
          ]
        },
        {
          id: "loan_friends_2",
          category: "loan friends",
          question: "What is PayForMe and is it different from Loan Friends?",
          answers: [
            "PayForMe is a sub-product of Loan Friends that lets you help your friends directly pay their bills"
          ]
        },
        {
          id: "loan_friends_3",
          category: "loan friends",
          question: "How much am I charged for using Loan Friends?",
          answers: [
            "For every loan between friends, we charge the lender 1.5% of the amount + N100 convenience fee capped at N5,000. The N100 fee is waived for loan amounts less than or equal to N2,000."
          ]
        },
        {
          id: "loan_friends_4",
          category: "loan friends",
          question: "How do I get my money back?",
          answers: [
            "We ensure the borrower adds a repayment instrument before s/he can access the loan."
          ]
        },
        {
          id: "loan_friends_5",
          category: "loan friends",
          question: "As a lender, can I add interests on my loans?",
          answers: [
            "Absolutely you can. Please note that we will charge 10% on all interests received for loans greater than N19,999"
          ]
        },
        {
          id: "loan_friends_6",
          category: "loan friends",
          question: "How do I invite friends and family to use Loan Friends?",
          answers: [
            "Easy-peasy. Simply, tell your friend to sign-up on Sycamore, and search for them by their tag or phone number. We’ll take care of the rest."
          ]
        },
        {
          id: "loan_friends_7",
          category: "loan friends",
          question: "How many borrowers can I loan at a time?",
          answers: [
            "You can loan up to 50 friends or family at a time"
          ]
        },
        {
          id: "loan_friends_8",
          category: "loan friends",
          question: "Who reminds the borrower to pay back?",
          answers: [
            "We do. However, we’ve also given you the option to trigger a reminder to the borrower’s email and send a push notification to their phone."
          ]
        },
        {
          id: "loan_friends_9",
          category: "loan friends",
          question: "As a borrower, why should I ask my friend to loan me through Loan Friends?",
          answers: [
            "Your friend is more likely to approve that loan request if they’re assured they won’t have to chase you around to get their money back. What better way to prove that than Loan Friends?"
          ]
        },
      ]
    };
  },

  methods: {
    checkResults() {
      alert("thanks for asking", this.searchData);
    },
    toggleTab(tab, name) {
      this.activeTab = tab;
      this.faqs = this.allFaqs.filter(faq => faq.category == name);
      this.tabName = name;
    },
    talkToUs() {
      this.$intercom.show();
    }
  },

  computed: {
    searchResults() {
      return this.allFaqs.filter(
        allFaq =>
          allFaq.question.toLowerCase().includes(this.search.toLowerCase()) ||
          allFaq.answers.filter(answer =>
            answer.toLowerCase().includes(this.search.toLowerCase())
          )
      );
      //   const result = words.filter(word => word.length > 6);
    },
    accordionClasses: function() {
      return {
        "is-closed": false
      };
    }
  },

  mounted() {
    this.faqs = this.allFaqs.filter(faq => faq.category == "general");
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100% !important;
}
ul {
  list-style-type: none;
}

ul li:before {
  content: "\2714\0020";
}
.banner {
  background: linear-gradient(
    180deg,
    rgba(246, 171, 25, 0.1) 0%,
    rgba(246, 171, 25, 0) 100%
  );
  position: relative;
}
.hero-area {
  padding: calc(90px + 1rem) 0 3rem;
  min-height: calc(100vh - 90px);
  background-size: cover;
  background-position: center;
}

.hero-area.other-page {
  padding: 5rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  border-bottom: 2px solid #eee;
  min-height: initial;
  position: relative;
}

.hero-area.other-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
}

.hero-text h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-right: auto;
  color: #09243b;
}

.hero-area.other-page .hero-text h1 {
  margin: auto;
}
.contact {
  background-color: #f9faf9;
}
.swifit {
  margin: 70px 0px;
}
.swifit ul li {
  list-style: none;
  padding: 15px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
}
.swifit ul li img {
  padding-right: 10px;
}
.swifit ul {
  margin-left: -42px;
}
.swifit h6 {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #2d0000;
}
.swifit img {
  width: 36px;
}
.swifit h2 {
  font-weight: 600;
  font-size: 40px;
  font-size: 40px;
  color: #2d0000;
}
.swifit p {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #2d0000;
}

.faq-header h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #e23939;
}
.faq-header h3 {
  font-style: normal;
  font-size: 40px;
}
.search {
  position: absolute;
  text-align: center;
  font-size: 24px;
  z-index: 2;
  cursor: pointer;
}

.search-input {
  border: 1px solid rgba(7, 48, 66, 0.9);
  border-radius: 10px;
}
input {
  outline: none !important;
}
.container {
  display: flex;
  flex-direction: column;
  z-index: 10;
}

.message-content {
  padding: 20px;
}
.message-content li,
p {
  color: #073042;
  opacity: 0.7;
}
.message-content li {
  display: flex;
  margin-bottom: 10px;
}
.message-content span {
  margin-right: 1.7rem;
}
.accordion-caret {
  background-image: linear-gradient(to top right, transparent 50%, #727272 50%);
  width: 0.5rem;
  height: 0.5rem;
  transform: rotate(-45deg);
}
ul li[data-v-7a6425cc]:before {
  display: none;
}
.faq button {
  background: #f9faf9;
  border: 0.16838px solid #a4ae9d;
  box-sizing: border-box;
  box-shadow: none;
  border-radius: 4.48563px 4.48563px 0px 0px;
  color: #000;
  text-align: left;
  font-weight: 500;
}
.btn-secondary.focus,
.btn-secondary:focus {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
  box-shadow: none;
}
.btn-secondary:hover {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
}
.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  color: #000;
  background-color: #f9faf9;
  border-color: #a4ae9d;
}

.talk-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

.faq-btn {
  background: #26c165;
  border-radius: 6.64px;
  border: 1px solid #26c165;
  padding: 13px 30px;
  margin: 30px 0;
  color: $white;
  width: 179px;
  height: 69px;
}
.faq .faq-btn a {
  color: #fff !important;
}
.faq ul li {
  margin: 20px -20px;
}

.faq .faq-p {
  padding: 20px 17.69px;
}

.faq h4 {
  font-size: 1.25rem;
  color: #dc3545;
  margin: 30px 0 30px;

  /* font-weight: bold; */
}

.acc-img {
  position: sticky;
  top: 50px;
}

.accodion-img {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
}
img .acc-image {
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
}

@include mobile {
  .faq-header h3 {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .faq h4 {
    font-size: 18px;
  }
  .search-wrapper h1 {
    font-size: 25px;
  }
  .collapse {
    width: calc(100% - 30px);
  }
}
</style>
