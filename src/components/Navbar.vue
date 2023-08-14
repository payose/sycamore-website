<template>
  <header class="absolute w-full z-20">
    <div class="flex justify-between items-center mx-20 md:px-20 py-10">
        <div class="w-32 mr-24">
            <router-link to="/">
            <img src="@/assets/logo.png" width="100%" alt="" />
            </router-link>
        </div>
        <div class="flex w-1/3 justify-between items-center text-sm">
            <div v-for="(item, index) in nav" :key="index" class="link-item">
            <p
                v-if="item.path"
                class="cursor-pointer text-gray4F py-5 font-medium"
            >
                <router-link :to="item.path">
                {{ item.title }}
                </router-link>
            </p>
            <p
                v-else
                :to="item.path"
                class="cursor-pointer text-gray4F py-5 font-medium"
            >
                {{ item.title }}
            </p>
            <div
                v-if="item.sub"
                :class="
                item.sub.length > 3
                    ? 'grid grid-cols-1 lg:grid-cols-2 gap-x-10 px-8'
                    : 'px-4'
                "
                class="py-5 px-4 bg-white absolute -mt-2 -ml-24 rounded-lg w-auto link-item-dropdown"
                style="box-shadow: 2px 8px 48px -16px rgba(28, 37, 71, 0.2)"
            >
                <router-link
                v-for="(subItem, index) in item.sub"
                :key="index"
                :to="subItem.path"
                >
                <div
                    :class="
                    `
                    ${
                        index === item.sub.length - 1 ||
                        (item.sub.length > 3 && index === item.sub.length - 2)
                        ? 'mb-0'
                        : 'mb-7'
                    } text-default text-${subItem.hover}`
                    "
                    class="flex items-center"
                >
                    <div
                    class="mr-2 h-11 w-11 rounded-lg flex items-center justify-center"
                    :style="`background-color: ${subItem.bgColor}`"
                    >
                    <component :is="subItem.icon" />
                    </div>
                    <div>
                    <p class="font-semibold">{{ subItem.title }}</p>
                    <p class="text-xs">{{ subItem.description }}</p>
                    </div>
                </div>
                </router-link>
            </div>
            </div>
            <a target="_blank" class="cursor-pointer text-gray4F py-5 font-medium" href="https://blog.sycamore.ng/">Blog</a>
        </div>

        <div class="w-1/2 flex items-center justify-end">
            <a
                href="https://dashboard.sycamore.ng"
                target="_blank"
                class="px-8 py-2 text-sm bg-white text-primary border border-primary mr-5 rounded-md"
            >
                Sign in
            </a>
            <a
                href="https://dashboard.sycamore.ng/register"
                target="_blank"
                class="px-8 py-2 text-sm bg-primary border border-primary text-white rounded-md"
            >
                Sign up
            </a>
        </div>
    </div>
  </header>
</template>

<script>
import nav  from "@/data/NavLinks.js";

export default {
  data() {
    return {
      nav: nav,
      DASHBOARD_URL: process.env.VUE_APP_DASHBOARD_URL
    };
  }
};
</script>

<style lang="scss" scoped>
.link-item {
  transition: 0.9s;
  &-dropdown {
    display: none;
    transition: 180s all;
  }

  &:hover {
    .link-item-dropdown {
      display: grid;
    }
  }

  .text-default {
    color: #000;

    &.text-loans:hover {
      color: $loans;
    }
    &.text-about:hover {
      color: $about;
    }
    &.text-careers:hover {
      color: $careers;
    }
    &.text-investments:hover {
      color: $investments;
    }
    &.text-faq:hover {
      color: $faq;
    }
    &.text-help:hover {
      color: $help;
    }
    &.text-blog:hover {
      color: $blog;
    }
    &.text-loanfriends:hover {
      color: $loanfriends;
    }
    &.text-mobileapp:hover {
      color: $mobileapp;
    }
  }
}
</style>
