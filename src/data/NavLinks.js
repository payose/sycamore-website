import MenuLoanVue from "@/svg/MenuLoan.vue";
import MenuInvestmentVue from "@/svg/MenuInvestment.vue";
import MenuMarketplaceVue from "@/svg/MenuMarketplace.vue";
import MenuAssetFinancingVue from "@/svg/MenuAssetFinancing.vue";
import MenuAboutVue from "@/svg/MenuAbout.vue";
import MenuCareerVue from "@/svg/MenuCareer.vue";
import MenuKnowledgeBaseVue from "@/svg/MenuKnowledgeBase.vue";


const nav = [
    {
      title: "Company",
      sub: [
        {
          title: "About us",
          description: "Solutions for everyone",
          icon: MenuAboutVue,
          bgColor: "rgba(255, 105, 67, 0.07)",
          hover: "about",
          path: "/about"
        },
        {
          title: "Careers",
          description: "Join us",
          icon: MenuCareerVue,
          bgColor: "rgba(21, 198, 198, 0.07)",
          hover: "careers",
          path: "/career"
        }
      ]
    },
    {
      title: "Features",
      sub: [
        {
          title: "Loans",
          description: "Get instant Loans",
          icon: MenuLoanVue,
          bgColor: "rgba(255, 105, 67, 0.07)",
          hover: "loans",
          path: "/loan"
        },
        {
          title: "Investments",
          description: "Earn while you sleep",
          icon: MenuInvestmentVue,
          bgColor: "rgba(56, 96, 255, 0.07)",
          hover: "investments",
          path: "/invest"
        },
        {
          title: "Loan Friends",
          description: "Borrow or Lend your friends",
          icon: MenuMarketplaceVue,
          bgColor: "rgba(255, 73, 171, 0.07)",
          hover: "loanfriends",
          path: "/loan-friends"
        },
        {
          title: "Mobile App",
          description: "Loans, Pay bills & Invest",
          icon: MenuAssetFinancingVue,
          bgColor: "rgba(39, 231, 162, 0.07)",
          hover: "mobileapp",
          path: "/download-app"
        }
      ]
    },
    {
      title: "Help",
      sub: [
        {
          title: "FAQs",
          description: "Answers to common question",
          icon: MenuKnowledgeBaseVue,
          bgColor: "rgba(39, 231, 162, 0.07)",
          hover: "faq",
          path: "/faqs"
        }
        //   {
        //     title: "Waitlist",
        //     description: "Get priority access",
        //     icon: MenuDevelopersVue,
        //     bgColor: "rgba(119, 147, 244, 0.07)",
        //     path: "/waitlist"
        //   },
        //   {
        //     title: "Contact",
        //     description: "Get in touch with us",
        //     icon: MenuContactVue,
        //     bgColor: "rgba(255, 105, 67, 0.07)",
        //     path: "/contact"
        //   }
      ]
    },
    {
      title: "Media",
      path: "/media"
    }
];

export default nav; 
